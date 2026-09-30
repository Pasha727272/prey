import { Link } from 'react-router-dom'
import { ECONOMICS, ROBINHOOD_CHAIN, TIERS, HOUND_CA } from '../config'
import { CopyableCa } from '../components/CopyableCa'

export default function TreasuryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Treasury</h1>
      <p className="mt-3 max-w-2xl text-sm text-white/55 leading-relaxed">
        Where every fee goes. {ECONOMICS.feePoolPct}% fills the reward pool,{' '}
        {ECONOMICS.feeProjectPct}% goes to the project. Every line links toward the contract. No
        HOUND trade in the payout window — you are out of that payout.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-white/40">Next payout</p>
        <div className="mt-4 flex flex-wrap gap-10">
          <div>
            <p className="text-xs text-white/40">Reward pool</p>
            <p className="text-3xl font-semibold">0 ETH</p>
          </div>
          <div>
            <p className="text-xs text-white/40">Pays out at</p>
            <p className="text-3xl font-semibold">{ECONOMICS.payoutThresholdEth} ETH</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/45 max-w-xl leading-relaxed">
          A payout opens as soon as the pool passes the threshold. {ECONOMICS.poolTradersPct}% go
          to hunters by the fees they paid times their scent tier; {ECONOMICS.poolReferrersPct}% to
          the referrers who brought them.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-xs text-white/40">Paid to hunters</p>
          <p className="text-xl font-semibold">0 ETH</p>
          <p className="text-xs text-white/35">across 0 payouts</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-xs text-white/40">Referrals</p>
          <p className="text-xl font-semibold">{ECONOMICS.poolReferrersPct}%</p>
          <p className="text-xs text-white/35">
            Of every payout, {ECONOMICS.referralDepth.join(' / ')} three deep
          </p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-xs text-white/40">Tier holders</p>
          <p className="text-xl font-semibold">0</p>
          <p className="text-xs text-white/35">Wallets holding a scent tier</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">Latest payout</h2>
        <p className="mt-2 text-sm text-white/40">No payouts yet.</p>
      </div>

      <div id="tiers" className="mt-12 scroll-mt-28">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-semibold">Scent tiers</h2>
            <p className="text-sm text-white/50 mt-1 max-w-xl">
              Hold Prey to upgrade your nose. A tier never falls. Higher scent → larger % of take
              and access to fatter Most Wanted targets. After HOUND graduates, tier is the ticket
              into the hunt.
            </p>
          </div>
          <p className="text-xs text-white/40">
            Upgraded with Prey, never refunded ·{' '}
            <span className="text-ember">Get a tier</span>
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 border-b border-white/10">
              <tr>
                <th className="px-4 py-3">Tier</th>
                <th className="px-4 py-3">Prey</th>
                <th className="px-4 py-3">Reward multiplier</th>
                <th className="px-4 py-3">Target access</th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((t) => (
                <tr key={t.id} className="border-b border-white/5">
                  <td className="px-4 py-3">
                    {t.id} — {t.name}
                  </td>
                  <td className="px-4 py-3">{t.prey}</td>
                  <td className="px-4 py-3 text-ember">{t.mult}</td>
                  <td className="px-4 py-3 text-white/55">{t.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">Contracts</h2>
          <p className="text-xs text-white/40">{ROBINHOOD_CHAIN.name}</p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-white/40">HOUND</span>
            <CopyableCa />
          </div>
          <code className="font-mono text-xs text-white/30 break-all">{HOUND_CA}</code>
        </div>
      </div>

      <p className="mt-8 text-xs text-white/35">
        See also{' '}
        <Link to="/referrals" className="text-ember underline">
          Referrals
        </Link>
        .
      </p>
    </div>
  )
}
