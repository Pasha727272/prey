import { Link } from 'react-router-dom'
import { Users, Link2, PieChart } from 'lucide-react'
import { ECONOMICS } from '../config'
import { useWallet } from '../wallet/WalletProvider'

const ofAllRevenue = (
  (ECONOMICS.feePoolPct / 100) *
  (ECONOMICS.poolReferrersPct / 100) *
  100
).toFixed(1)

export default function ReferralsPage() {
  const { address, short, openConnect, connecting } = useWallet()
  const link = address ? `${window.location.origin}/?ref=${address}` : ''

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 lg:px-6 pb-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
        Invite traders. Earn on every fee they pay.
      </h1>
      <p className="mt-4 text-sm md:text-base text-white/55 leading-relaxed max-w-2xl">
        A tenth of every payout goes to referrers, three levels deep. Same split for everyone, paid
        in the same claim as your own rewards.
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 className="text-lg font-semibold">Get your link</h2>
        {address ? (
          <>
            <p className="mt-2 text-sm text-white/45">
              Share this link. Rewards land with the rest of your claim.
            </p>
            <button
              type="button"
              className="mt-4 w-full break-all rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-left font-mono text-sm hover:border-ember/40"
              onClick={() => void navigator.clipboard.writeText(link)}
            >
              {link}
              <span className="mt-1 block text-xs text-ember">Click to copy · {short}</span>
            </button>
          </>
        ) : (
          <>
            <p className="mt-2 text-sm text-white/45">
              Connect a wallet to get your link and see your rewards.
            </p>
            <button
              type="button"
              onClick={openConnect}
              disabled={connecting}
              className="mt-5 w-full rounded-full bg-ember py-3.5 text-sm font-semibold text-black hover:bg-ember-bright disabled:opacity-60"
            >
              {connecting ? 'Connecting…' : 'Connect wallet'}
            </button>
          </>
        )}
      </div>

      <div className="mt-14">
        <h2 className="text-lg font-semibold mb-5">How referrals work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <Users className="text-ember mb-3" size={20} />
            <h3 className="font-semibold">Link your referrer</h3>
            <p className="mt-2 text-sm text-white/45 leading-relaxed">
              A referral link shows who invited you. You confirm your first referrer onchain, and
              after that it can&apos;t be changed, even by another link. Rewards count on trades
              made after you sign up.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <Link2 className="text-ember mb-3" size={20} />
            <h3 className="font-semibold">Earn when they trade</h3>
            <p className="mt-2 text-sm text-white/45 leading-relaxed">
              Every fee they pay, from hunt entries to HOUND trades, earns for three levels of
              referrers. Clicking a link or connecting a wallet doesn&apos;t earn anything by
              itself.
            </p>
          </article>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-2 mb-3">
          <PieChart className="text-ember" size={18} />
          <h2 className="text-lg font-semibold">How the split works</h2>
        </div>
        <p className="text-sm text-white/55 leading-relaxed max-w-2xl">
          Referrers share {ECONOMICS.poolReferrersPct}% of every payout from the{' '}
          {ECONOMICS.feePoolPct}% reward pool, which is{' '}
          <strong className="text-white font-semibold">{ofAllRevenue}% of all revenue</strong>.
          That&apos;s a cut of the fees, not of the trade size.
        </p>
        <p className="mt-6 text-xs text-white/40 mb-3">
          How revenue splits with all three referral levels
        </p>
        <div className="grid grid-cols-3 gap-3">
          {ECONOMICS.referralDepth.map((pct, i) => (
            <div
              key={pct}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center"
            >
              <p className="text-xs text-white/40">Level {i + 1}</p>
              <p className="mt-1 text-2xl font-semibold text-ember">{pct}%</p>
              <p className="mt-1 text-[11px] text-white/35">of the referrer slice</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40">
          Payouts open with the treasury threshold. See{' '}
          <Link to="/treasury" className="text-ember underline underline-offset-2">
            Treasury
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
