import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  connectWallet,
  truncateAddress,
  type EthereumProvider,
  type WalletId,
} from '../lib/wallet'

type WalletContextValue = {
  address: string | null
  short: string | null
  walletId: WalletId | null
  connecting: boolean
  error: string | null
  modalOpen: boolean
  openConnect: () => void
  closeConnect: () => void
  connect: (id: WalletId) => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextValue | null>(null)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [walletId, setWalletId] = useState<WalletId | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const providerRef = useRef<EthereumProvider | null>(null)
  const errorTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearErrorSoon = useCallback((message: string) => {
    if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
    setError(message)
    errorTimerRef.current = setTimeout(() => {
      setError(null)
      errorTimerRef.current = null
    }, 2000)
  }, [])

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const provider = providerRef.current
    if (!provider?.on) return

    const onAccounts = (accounts: unknown) => {
      const list = accounts as string[]
      setAddress(list[0] ?? null)
      if (!list[0]) {
        setWalletId(null)
        providerRef.current = null
      }
    }

    provider.on('accountsChanged', onAccounts)
    return () => {
      provider.removeListener?.('accountsChanged', onAccounts)
    }
  }, [address, walletId])

  const openConnect = useCallback(() => {
    if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
    setError(null)
    setModalOpen(true)
  }, [])

  const closeConnect = useCallback(() => {
    setModalOpen(false)
  }, [])

  const connect = useCallback(
    async (id: WalletId) => {
      setConnecting(true)
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
      setError(null)
      try {
        const result = await connectWallet(id)
        providerRef.current = result.provider
        setAddress(result.address)
        setWalletId(result.walletId)
        setModalOpen(false)
      } catch (e) {
        clearErrorSoon(e instanceof Error ? e.message : 'Connect failed')
      } finally {
        setConnecting(false)
      }
    },
    [clearErrorSoon],
  )

  const disconnect = useCallback(() => {
    if (errorTimerRef.current) clearTimeout(errorTimerRef.current)
    setAddress(null)
    setWalletId(null)
    setError(null)
    providerRef.current = null
  }, [])

  const value = useMemo(
    () => ({
      address,
      short: address ? truncateAddress(address) : null,
      walletId,
      connecting,
      error,
      modalOpen,
      openConnect,
      closeConnect,
      connect,
      disconnect,
    }),
    [
      address,
      walletId,
      connecting,
      error,
      modalOpen,
      openConnect,
      closeConnect,
      connect,
      disconnect,
    ],
  )

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

export function useWallet() {
  const ctx = useContext(WalletContext)
  if (!ctx) throw new Error('useWallet must be used within WalletProvider')
  return ctx
}
