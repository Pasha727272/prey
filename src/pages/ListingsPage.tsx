import { Crosshair, FileText, Shield, Fingerprint } from 'lucide-react'

const PILLARS = [
  {
    icon: Crosshair,
    title: 'Execution',
    q: 'Can we buy it in the size we need?',
    body: 'Test-buys on a forked mainnet with real order size. If price impact blows the slippage budget, the asset is rejected. Reported pool depth is ignored — only execution matters.',
  },
  {
    icon: FileText,
    title: 'Pricing',
    q: 'Can we price it without trusting the pool?',
    body: 'Stock tokens need an official oracle feed. Memes use on-chain VWAP from a keeper. No reliable price → no listing.',
  },
  {
    icon: Shield,
    title: 'Token risk',
    q: 'Will it still be yours tomorrow?',
    body: 'Reject mint / blacklist / transfer tax / pause. LP locked or burned. Real sell simulation on a fork. Concentration and history checked. Issuer powers allowed only for official stock tokens.',
  },
  {
    icon: Fingerprint,
    title: 'Identity',
    q: 'Is it really the right contract?',
    body: 'Assets are identified by Robinhood Chain contract address only. Tickers are ignored — spoof names do not list.',
  },
]

export default function ListingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        How an asset gets listed
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-white/55 leading-relaxed">
        We do not list coins for a brochure. Fee share buys for hunters must actually execute. Four
        hard pillars — fail one, stay dark.
      </p>

      <h2 className="mt-12 text-sm uppercase tracking-widest text-white/40">The review</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {PILLARS.map(({ icon: Icon, title, q, body }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Icon className="text-ember mb-3" size={20} />
            <h3 className="text-lg font-semibold text-ember">{title}</h3>
            <p className="mt-2 text-sm font-medium text-white/80">{q}</p>
            <p className="mt-3 text-sm text-white/45 leading-relaxed">{body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
