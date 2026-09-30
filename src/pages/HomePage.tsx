import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ECONOMICS, ROBINHOOD_CHAIN, TIERS } from '../config'

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
      <section className="relative isolate overflow-hidden border-b border-white/10 min-h-[520px] md:min-h-[640px]">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-90"
          src="/prey-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        <div className="relative mx-auto flex min-h-[520px] md:min-h-[640px] max-w-3xl flex-col items-center justify-center px-6 py-20 md:py-28 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/55">
            {ECONOMICS.pair} on {ROBINHOOD_CHAIN.name}
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] drop-shadow-sm">
            Hunt the whales.
            <br />
            <span className="font-display italic text-bone/90">Take the bounty.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base md:text-lg text-white/75 leading-relaxed">
            Not a fair fight. Whales sit on Most Wanted with a prize on their head. You trade HOUND
            from your wallet in the same window. Beat their PnL and the bounty is yours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/hunt"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-hood-deep hover:bg-ember-bright"
            >
              Take a trail <ArrowRight size={16} />
            </Link>
            <Link
              to="/treasury#tiers"
              className="btn-lift inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4"
            >
              See the tiers <ArrowRight size={14} />
            </Link>
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
          className="btn-lift mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-8 py-3.5 text-sm font-semibold text-hood-deep hover:bg-ember-bright"
        >
          Enter The Hunt <ArrowRight size={16} />
        </Link>
      </section>

      {/* Loop strip */}
      <section className="bg-ember text-hood-deep">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hood-deep/15">
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

      {/* Tiers */}
      <section className="relative overflow-hidden bg-bone text-black px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-ember/35 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-ember/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
            Ten scent levels
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
            A trading contest usually takes a desk and a licence. Here it takes{' '}
            <span className="bg-black text-ember px-2.5 py-0.5 inline-block">a tier</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-sm md:text-base text-black/60 leading-relaxed">
            Upgrade your tier with Prey. A tier never falls. It multiplies your share of every
            reward payout, and once HOUND graduates it is what lets you enter a hunt.
          </p>

          <div className="mt-16 border-b border-black/10 pb-3">
            <div className="flex items-end gap-1.5 sm:gap-2.5 h-52 sm:h-64">
              {TIERS.map((t, i) => {
                const h = 12 + t.id * 8.5
                const isTop = t.id === 10
                return (
                  <div
                    key={t.id}
                    className="group flex-1 flex flex-col items-center min-w-0 h-full justify-end"
                  >
                    <span
                      className={`mb-2 text-[10px] font-semibold tabular-nums transition-colors ${
                        isTop ? 'text-black' : 'text-black/35 group-hover:text-black/70'
                      }`}
                    >
                      {t.mult}
                    </span>
                    <div
                      className={`relative w-full origin-bottom transition-transform duration-300 group-hover:scale-y-[1.04] ${
                        isTop
                          ? 'rounded-t-md bg-ember shadow-[0_0_28px_rgba(204,255,0,0.55)]'
                          : 'rounded-t-md bg-gradient-to-t from-black via-black to-neutral-700'
                      }`}
                      style={{ height: `${h}%` }}
                    >
                      {isTop ? (
                        <span className="absolute inset-x-0 top-2 text-center text-[9px] font-bold uppercase tracking-wider text-black/70">
                          Max
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-3 w-full text-center">
                      <p className="text-[10px] sm:text-xs font-semibold truncate leading-tight">
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-[9px] sm:text-[10px] text-black/45 truncate">
                        {TIER_AMOUNTS[i]} Prey
                      </p>
                      <p className="mt-1 text-[9px] sm:text-[10px] font-medium text-black/35">
                        T{t.id}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-black/45">
              From Stray to Prey Lord · multipliers lock in, never drop
            </p>
            <Link
              to="/treasury#tiers"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-ember hover:bg-neutral-900"
            >
              Get a tier <ArrowRight size={14} />
            </Link>
          </div>
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

      {/* Nine tenths — salad field + floating P */}
      <section className="relative isolate overflow-hidden border-b border-black/10 bg-salad min-h-[520px] md:min-h-[640px]">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-ember/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-48 w-48 rounded-full bg-white/50 blur-3xl" />

        <div className="relative mx-auto grid min-h-[520px] md:min-h-[640px] max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-black">
              Nine tenths of a payout goes to hunters.
            </h2>
            <p className="mt-5 text-sm md:text-base text-black/65 leading-relaxed">
              They are split by the fees you paid, times your tier. The last tenth goes to whoever
              brought you in, three referrers deep. Trade nothing and you are out of that payout,
              whatever tier you hold.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/20 bg-black text-ember text-lg font-semibold shadow-sm">
                {ECONOMICS.poolTradersPct}%
              </div>
              <span className="text-black/35 tracking-[0.4em]">····→</span>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/20 bg-black text-ember text-lg font-semibold shadow-sm">
                {ECONOMICS.poolReferrersPct}%
              </div>
              <span className="text-black/35 tracking-[0.4em]">····→</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:justify-end">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-ember/30 blur-2xl" />
            <img
              src="/prey-letter-p.png"
              alt="П"
              className="prey-letter-float relative z-10 w-[min(100%,340px)] md:w-[min(100%,420px)] select-none"
              draggable={false}
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
                className="btn-lift inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4"
              >
                How rewards are split <ArrowRight size={14} />
              </Link>
              <Link
                to="/structure"
                className="btn-lift inline-flex items-center gap-1 text-sm text-ember underline underline-offset-4"
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
    </div>
  )
}
