import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CopyableCa } from '../components/CopyableCa'
import { ECONOMICS, ROBINHOOD_CHAIN, TIERS, TRADE_LINKS } from '../config'

const TIER_AMOUNTS = [
  '100,000',
  '170,000',
  '290,000',
  '490,000',
  '840,000',
  '1,430,000',
  '2,430,000',
  '4,130,000',
  '7,020,000',
  '11,940,000',
]

const FEE_ROWS = [
  ['All revenue', `${ECONOMICS.feePoolPct}% the reward pool`],
  ['Ours', `${ECONOMICS.feeProjectPct}% gas, hosting, the work`],
  [
    'Every payout',
    `${ECONOMICS.poolTradersPct}% to hunters, by fees paid × tier`,
  ],
  [
    'Referrals',
    `${ECONOMICS.poolReferrersPct}% to referrers, ${ECONOMICS.referralDepth.join(' / ')} three deep`,
  ],
  ['Hunt entry', `${ECONOMICS.entryFeeEth} ETH a side`],
  ['Tiers', 'Upgraded with Prey, never refunded, never falls'],
]

export default function HomePage() {
  const poolNow = 0
  const threshold = ECONOMICS.payoutThresholdEth
  const pct = Math.min(100, (poolNow / threshold) * 100)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,165,75,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
            {ECONOMICS.pair} on {ROBINHOOD_CHAIN.name}
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
            Hunt the whales.
            <br />
            <span className="font-display italic text-bone/90">Take the bounty.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base md:text-lg text-white/60 leading-relaxed">
            Not a fair fight. Whales sit on Most Wanted with a prize on their head. You trade HOUND
            from your wallet in the same window. Beat their PnL and the bounty is yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/hunt"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-black hover:bg-ember-bright"
            >
              Take a trail <ArrowRight size={16} />
            </Link>
            <Link
              to="/treasury#tiers"
              className="inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4"
            >
              See the tiers <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CopyableCa />
            <a
              href={TRADE_LINKS.gmgn}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70 hover:text-white"
            >
              Trade on GMGN ↗
            </a>
            <a
              href={TRADE_LINKS.axiom}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70 hover:text-white"
            >
              Trade on Axiom ↗
            </a>
          </div>
        </div>
      </section>

      {/* Live */}
      <section className="px-6 py-20 text-center border-b border-white/10">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Live right now.</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/55 text-sm md:text-base leading-relaxed">
          Both sides mark from the same open. Pumping the bag helps nobody. What is left on the
          clock is the hunt.
        </p>
        <p className="mt-6 text-sm text-white/40">No hunts are running.</p>
        <Link
          to="/hunt"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-8 py-3.5 text-sm font-semibold text-black"
        >
          Enter The Hunt <ArrowRight size={16} />
        </Link>
      </section>

      {/* Loop strip */}
      <section className="bg-ember text-black">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/15">
          {[
            ['HUNT', 'TAKE THEIR BOUNTY'],
            ['PREY', 'TIER YOUR SCENT'],
            ['TRADE', 'SHARE THE POOL'],
          ].map(([a, b]) => (
            <div key={a} className="px-6 py-5 text-center text-sm font-semibold tracking-wide">
              {a} <span className="opacity-50">→</span> {b}
            </div>
          ))}
        </div>
      </section>

      {/* Pool bar */}
      <section className="px-6 py-16 border-b border-white/10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-white/55 leading-relaxed">
            Rewards pay out as soon as the pool passes {threshold} ETH. No weekly wait and no
            windows. Miss HOUND trades in the window and you are out of that payout.
          </p>
          <div className="mt-6 h-px w-full bg-white/15 overflow-hidden">
            <div className="h-full bg-ember" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-3 text-xs text-white/40">
            {poolNow} ETH of {threshold} ETH in the pool now
          </p>
        </div>
      </section>

      {/* Tiers (light) */}
      <section className="bg-bone text-black px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
            A trading contest usually takes a desk and a licence. Here it takes{' '}
            <span className="bg-black text-white px-2 py-0.5 inline-block">a tier</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-sm md:text-base text-black/60 leading-relaxed">
            Upgrade your tier with Prey. A tier never falls. It multiplies your share of every
            reward payout, and once HOUND graduates it is what lets you enter a hunt.
          </p>

          <div className="mt-14 flex items-end justify-between gap-1 sm:gap-2 h-48 sm:h-56">
            {TIERS.map((t, i) => (
              <div key={t.id} className="flex-1 flex flex-col items-center gap-2 min-w-0 h-full justify-end">
                <span className="text-[9px] sm:text-[10px] text-black/40 hidden sm:block">
                  Tier {t.id}
                </span>
                <div
                  className={`w-full rounded-t-sm ${t.id === 10 ? 'bg-black/40' : 'bg-black'}`}
                  style={{ height: `${18 + t.id * 8}%` }}
                />
                <div className="text-center w-full">
                  <p className="text-[9px] sm:text-[11px] font-medium truncate leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-black/50 truncate">
                    {TIER_AMOUNTS[i]} Prey
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-black/40">{t.mult}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-black/40">
            <span>Tier 1</span>
            <span>Tier 10</span>
          </div>
          <Link
            to="/treasury#tiers"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-black underline underline-offset-4"
          >
            Get a tier <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Big fee % */}
      <section className="bg-black px-6 py-28 md:py-36 text-center border-y border-white/10">
        <p className="text-7xl md:text-9xl font-semibold tracking-tight text-white">
          {ECONOMICS.feePoolPct}%
        </p>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-white">
          {ECONOMICS.feePoolPct}% of every fee pays the hunters.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/50 leading-relaxed">
          {ECONOMICS.feePoolPct}% of all revenue goes to the reward pool, {ECONOMICS.feeProjectPct}%
          keeps the lights on. Nothing is minted to pay a reward: it is the fees, in ETH.
        </p>
      </section>

      {/* Nine tenths */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(40,60,40,0.35),transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Nine tenths of a payout goes to hunters.
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/55 leading-relaxed max-w-lg">
              They are split by the fees you paid, times your tier. The last tenth goes to whoever
              brought you in, three referrers deep. Trade nothing and you are out of that payout,
              whatever tier you hold.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ember/50 text-ember text-lg font-semibold">
                {ECONOMICS.poolTradersPct}%
              </div>
              <span className="text-white/30 tracking-[0.4em]">····→</span>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ember/50 text-ember text-lg font-semibold">
                {ECONOMICS.poolReferrersPct}%
              </div>
              <span className="text-white/30 tracking-[0.4em]">····→</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/prey-logo.jpg"
              alt=""
              className="h-56 w-56 md:h-72 md:w-72 rounded-3xl object-cover shadow-2xl shadow-black/50"
            />
          </div>
        </div>
      </section>

      {/* Fee map */}
      <section className="px-6 py-20 md:py-28 border-b border-white/10">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              See where every fee goes.
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/treasury"
                className="inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4"
              >
                How rewards are split <ArrowRight size={14} />
              </Link>
              <Link
                to="/structure"
                className="inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4"
              >
                Contract addresses <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <dl className="divide-y divide-white/10 border-t border-white/10 md:border-t-0 md:border-l md:pl-10">
            {FEE_ROWS.map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4"
              >
                <dt className="text-sm font-medium text-white">{k}</dt>
                <dd className="text-sm text-white/50 sm:text-right max-w-xs">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Asset slots */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Today you hunt on HOUND.
          </h2>
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            HOUND is the only asset a trail is run on right now. Every coin after it arrives through
            a partnership, chosen and announced with the project behind it, one at a time.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-black font-bold text-xl">
                H
              </div>
              <span className="text-white font-medium">HOUND</span>
              <span className="text-ember text-xs uppercase tracking-widest">Live</span>
            </div>
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 text-2xl">
                  ?
                </div>
                <span className="text-white/40">Partner</span>
                <span className="text-white/30 text-xs uppercase tracking-widest">Open</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/40 max-w-xl mx-auto">
            Bounties settle in ETH or graduated coins. Partners are picked by us, with the reason
            published.
          </p>
          <Link
            to="/listings"
            className="mt-4 inline-flex text-sm text-ember underline underline-offset-4"
          >
            How an asset gets listed →
          </Link>
        </div>
      </section>
    </div>
  )
}
