import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { HOUND_CA } from '../config'
import { truncateAddress } from '../lib/wallet'

export function CopyableCa({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(HOUND_CA)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={HOUND_CA}
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 hover:text-white transition-colors ${className}`}
    >
      <span className="text-white/40 tracking-wide uppercase">CA</span>
      <span className="font-mono">{truncateAddress(HOUND_CA)}</span>
      {copied ? <Check size={14} className="text-ember" /> : <Copy size={14} />}
    </button>
  )
}
