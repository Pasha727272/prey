export const HOUND_CA = '0x486f756e6450726579484f554e44000000000001' as const

export const ROBINHOOD_CHAIN = {
  chainId: 4663,
  chainIdHex: '0x1237',
  name: 'Robinhood Chain',
  rpcUrl: 'https://rpc.mainnet.chain.robinhood.com',
  explorer: 'https://robinhoodchain.blockscout.com',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
} as const

export const ECONOMICS = {
  feePoolPct: 82,
  feeProjectPct: 18,
  payoutThresholdEth: 0.01,
  poolTradersPct: 90,
  poolReferrersPct: 10,
  referralDepth: [80, 15, 5] as const,
  entryFeeEth: 0.001,
  huntAsset: 'HOUND',
  pair: 'HOUND/ETH',
} as const

export const TIERS = [
  { id: 1, name: 'Stray', prey: '100K', mult: '1.00x', access: 'Lean bounties' },
  { id: 2, name: 'Nose', prey: '170K', mult: '1.10x', access: 'Lean bounties' },
  { id: 3, name: 'Tracker', prey: '290K', mult: '1.20x', access: 'Mid bounties' },
  { id: 4, name: 'Scout', prey: '490K', mult: '1.30x', access: 'Mid bounties' },
  { id: 5, name: 'Hunter', prey: '840K', mult: '1.40x', access: 'Mid bounties' },
  { id: 6, name: 'Bloodhound', prey: '1.43M', mult: '1.50x', access: 'Fat bounties' },
  { id: 7, name: 'Pack Lead', prey: '2.43M', mult: '1.60x', access: 'Fat bounties' },
  { id: 8, name: 'Alpha', prey: '4.13M', mult: '1.70x', access: 'Fat bounties' },
  { id: 9, name: 'Apex', prey: '7.02M', mult: '1.85x', access: 'Whale bounties' },
  { id: 10, name: 'Prey Lord', prey: '11.94M', mult: '2.00x', access: 'All targets' },
] as const

export const TRADE_LINKS = {
  gmgn: `https://gmgn.ai/`,
  axiom: `https://axiom.trade/`,
} as const
