import { Link } from 'react-router-dom'
import { ECONOMICS } from '../config'

const STEPS = [
  {
    n: 1,
    title: 'Public Most Wanted with live bounties',
    body: 'Tops and whales surface with prize pools. Any hunter with scent can take the trail — no mutual accept.',
  },
  {
    n: 2,
    title: 'HOUND graduation as hunt ticket',
    body: 'After graduation, HOUND is the stake currency for bounty pots and the gate into The Hunt alongside Prey tiers.',
  },
  {
    n: 3,
    title: 'Backer seasons on tracked hunters',
    body: 'Stake Prey behind a hunter. Season pool from fees splits 75% backers / 25% carry — partnership logic onchain.',
  },
  {
    n: 4,
    title: 'Partner assets, one slot at a time',
    body: 'Execution, pricing, risk, identity. Each new hunt asset is announced with the project behind it.',
  },
]

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:px-6">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Where Prey is headed</h1>
      <p className="mt-4 text-sm text-white/55 leading-relaxed">
        Fund-desk access without the desk. Onchain records and wallets replace accreditation. The
        live product today is the asymmetric hunt on HOUND plus the fee → ETH pool.
      </p>

      <ol className="mt-12 space-y-8">
        {STEPS.map((s) => (
          <li key={s.n} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm">
              {s.n}
            </span>
            <div>
              <h2 className="font-semibold text-lg">{s.title}</h2>
              <p className="mt-2 text-sm text-white/45 leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/45">
        <p>
          © 2026 Prey. Asymmetric bounty hunts on {ECONOMICS.huntAsset}.{' '}
          {ECONOMICS.feePoolPct}% of every fee pays the hunters.
        </p>
        <nav className="mt-4 flex flex-wrap gap-3 text-xs">
          {[
            ['/', 'Home'],
            ['/feed', 'Feed'],
            ['/traders', 'Traders'],
            ['/hunt', 'The Hunt'],
            ['/treasury', 'Treasury'],
            ['/referrals', 'Referrals'],
            ['/structure', 'Structure'],
            ['/listings', 'Listings'],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="text-white/50 hover:text-ember">
              {label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  )
}
