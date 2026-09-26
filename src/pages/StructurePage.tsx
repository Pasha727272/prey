import { Link } from 'react-router-dom'
import {
  GitBranch,
  Users,
  Shield,
  FileCheck,
  Vault,
  ScrollText,
} from 'lucide-react'
import { ECONOMICS, HOUND_CA, ROBINHOOD_CHAIN } from '../config'
import { truncateAddress } from '../lib/wallet'

function Box({
  title,
  sub,
  dashed,
  accent,
}: {
  title: string
  sub: string
  dashed?: boolean
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl px-4 py-3 min-w-[140px] ${
        dashed
          ? 'border border-dashed border-white/25 bg-transparent'
          : accent
            ? 'border border-ember/40 bg-ember/10'
            : 'border border-white/15 bg-white/[0.04]'
      }`}
    >
      <p className="font-semibold text-sm text-white">{title}</p>
      <p className="text-[11px] text-white/40 mt-0.5">{sub}</p>
    </div>
  )
}

function ArrowLabel({ children }: { children: string }) {
  return <span className="text-[10px] uppercase tracking-wider text-white/35 px-1">{children}</span>
}

const ELSEWHERE = [
  ['Limited partnership', 'Limited partners fund it, the general partner runs it and keeps carried interest'],
  ['Buffett Partnership, 1956–69', 'Buffett ran it and kept 25% of the profit above a hurdle'],
  ['Separately managed account', 'The investor keeps the account and the manager can only trade it'],
  ['PAMM and MAM accounts', "Followers' money is pooled under one manager, split by share, plus a performance fee"],
  ['Proprietary trading firms', 'The firm puts up the money and the trader keeps most of the profit'],
  ['Onchain vaults', 'Hyperliquid vaults, dHEDGE and Enzyme run the same deal in smart contracts'],
]

const RISKS = [
  { stage: '1', form: 'Stake Prey behind a hunter and seasons pay out', risk: 'None', none: true },
  { stage: '2', form: 'Backing sets the rankings', risk: 'None', none: true },
  { stage: '3', form: 'A vault the hunter trades with', risk: 'Yes', none: false },
]

const WRITTEN = [
  ['HoundModule', 'the pool hook that charges the trading fee on buys and sells'],
  ['TaxAllocation', "splits one verified trade's fee share into exact integer amounts"],
  ['TaxSettlement', 'pays out those amounts against onchain receipts'],
  ['StockRewardVault', 'holds and pays out the coin a buyer picked'],
  ['ReferralRewardVault', 'tracks the ETH three referral levels can claim'],
  ['BuybackVault', 'holds bought-back Prey and releases it only as season rewards'],
  ['StakingVault', "holds a backer's Prey and weighs it by how long it is staked"],
  ['PartnershipDistributor', 'publishes one Merkle root per season, claimable once'],
  ['BurnVault', 'burns tokens sent to it and buys or holds nothing'],
  ['UserRegistry', 'records referral sign-ups and the coins buyers picked'],
  ['ProtocolConfig', 'holds policy versions, allowed assets and thresholds'],
  ['TreasuryGasReserve', 'holds the project share that pays for gas and running costs'],
]

const STILL_NEED = [
  ['Trader vault', 'the money backers fund, with its own record of shares'],
  ['Trade permission', 'lets the hunter trade the vault and nothing else'],
  ['Withdrawal path', 'lets backers withdraw, with no route out for the hunter'],
  ['Venue and asset allowlist', 'sets where and what a vault may trade'],
  ['Drawdown limit', 'stops a vault at a set loss, before backers are wiped out'],
  ['Performance split', 'pays the hunter their cut once, and only on profit'],
]

const LIVE = [
  {
    name: 'TheHunt',
    addr: '0x20E0…a4Ec',
    does: 'holds bounty stakes and entry fees, and pays the winning hunter',
  },
  {
    name: 'ScentTiers',
    addr: '0x056b…5644',
    does: 'upgrades a wallet scent tier for Prey; a tier never falls',
  },
  {
    name: 'RewardPool',
    addr: '0x0d8b…529e',
    does: `splits every fee ${ECONOMICS.feePoolPct} / ${ECONOMICS.feeProjectPct} and pays each payout by claim`,
  },
  {
    name: 'UserRegistry',
    addr: '0x91bf…0c12',
    does: 'records who referred whom, fixed at sign-up',
  },
  {
    name: 'AttestedPriceFeed',
    addr: '0x4ac4…ed79',
    does: 'the HOUND price an entry fee paid in HOUND converts at',
  },
  {
    name: 'HOUND',
    addr: truncateAddress(HOUND_CA),
    does: 'hunt asset on Robinhood Chain',
  },
]

export default function StructurePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6 pb-20">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Where this model comes from
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-white/55 leading-relaxed">
        Classic limited partnership: limited partners put up capital, a general partner runs the
        book, and the GP takes carry. Buffett&apos;s 1956–69 partnership kept 25% of profits above a
        hurdle. Prey runs the same setup onchain — keep 25% carry, drop accreditation theater. The
        wedge today is a public hunt on trader PnL, not a private desk.
      </p>

      <div className="mt-12 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember/20 text-ember">
          <GitBranch size={14} />
        </span>
        <h2 className="text-lg font-semibold">How it fits together</h2>
      </div>

      {/* TODAY */}
      <div className="mt-6 rounded-2xl border border-white/15 p-5 md:p-8 overflow-x-auto">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">Today</p>
        <div className="flex flex-col gap-6 min-w-[640px]">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex flex-col gap-2">
              <Box title="fomo" sub="7-day records" />
              <Box title="HOUND trades" sub="volume, return" />
            </div>
            <ArrowLabel>→</ArrowLabel>
            <div className="flex flex-col items-center gap-2">
              <Box title="Trader board" sub="who is worth hunting" />
              <div className="flex flex-col items-center">
                <ArrowLabel>backs</ArrowLabel>
                <span className="text-white/30">↓</span>
              </div>
              <Box title="Backers" sub="stake Prey" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowLabel>stake</ArrowLabel>
              <span className="text-white/30">→</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Box title="Season pool" sub="Prey from sell fees" />
              <div className="flex flex-col items-center">
                <span className="text-white/30">↑</span>
                <ArrowLabel>scores</ArrowLabel>
              </div>
              <Box title="Hunter" sub="general partner" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowLabel>splits</ArrowLabel>
              <span className="text-white/30">→</span>
            </div>
            <Box title="75% backers" sub="25% carry" accent />
          </div>
        </div>
      </div>

      {/* NEXT */}
      <div className="mt-6 rounded-2xl border border-dashed border-white/20 p-5 md:p-8 overflow-x-auto">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/40">Next</p>
        <div className="flex flex-wrap items-center gap-4 min-w-[520px]">
          <Box title="Backers" sub="fund the vault" dashed />
          <div className="flex flex-col items-center">
            <ArrowLabel>capital</ArrowLabel>
            <span className="text-white/30">⇢</span>
          </div>
          <Box title="Vault" sub="capital at risk" dashed />
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <span className="text-white/30">⇠</span>
              <ArrowLabel>may trade</ArrowLabel>
            </div>
            <div className="flex items-center gap-2 text-red-400/80">
              <span className="text-xs">✕</span>
              <span className="text-[10px] uppercase tracking-wider">never withdraws</span>
            </div>
          </div>
          <Box title="Hunter" sub="trades it" dashed />
        </div>
      </div>

      {/* Elsewhere */}
      <div className="mt-14">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember/20 text-ember">
            <Users size={14} />
          </span>
          <h2 className="text-lg font-semibold">The same setup elsewhere</h2>
        </div>
        <p className="text-sm text-white/45 mb-6">
          Setups that already put someone else&apos;s money behind a trader
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 border-b border-white/10">
              <tr>
                <th className="px-4 py-3 font-medium">Structure</th>
                <th className="px-4 py-3 font-medium">How it works</th>
              </tr>
            </thead>
            <tbody>
              {ELSEWHERE.map(([a, b]) => (
                <tr key={a} className="border-b border-white/5">
                  <td className="px-4 py-3 font-medium text-white/90 whitespace-nowrap">{a}</td>
                  <td className="px-4 py-3 text-white/50">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-3xl">
          None of this is new. Becoming a limited partner takes accreditation and six figures.
          Running a fund takes seed money, a prime broker, an audit and a minimum size. Here, your
          onchain record is the only credential and a wallet is the only account.
        </p>
      </div>

      {/* Risks */}
      <div className="mt-14">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember/20 text-ember">
            <Shield size={14} />
          </span>
          <h2 className="text-lg font-semibold">What you risk at each stage</h2>
        </div>
        <p className="text-sm text-white/45 mb-6">What each stage puts at risk</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 border-b border-white/10">
              <tr>
                <th className="px-4 py-3 font-medium">Stage</th>
                <th className="px-4 py-3 font-medium">Form</th>
                <th className="px-4 py-3 font-medium text-right">Principal at risk</th>
              </tr>
            </thead>
            <tbody>
              {RISKS.map((r) => (
                <tr key={r.stage} className="border-b border-white/5">
                  <td className="px-4 py-3 font-semibold">{r.stage}</td>
                  <td className="px-4 py-3 text-white/70">{r.form}</td>
                  <td className="px-4 py-3 text-right">
                    {r.none ? (
                      <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/60">
                        None
                      </span>
                    ) : (
                      <span className="text-white">Yes</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-3xl">
          The first two stages show who can hunt, and backing the wrong person costs you nothing but
          your stake. By the time real money can follow a hunter, their record is already public.
        </p>
      </div>

      {/* Contracts */}
      <div className="mt-14">
        <h2 className="text-lg font-semibold mb-6">The contracts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 p-5">
            <div className="flex items-center gap-2 mb-4 text-ember">
              <FileCheck size={18} />
              <h3 className="font-semibold">Written and tested</h3>
            </div>
            <ul className="space-y-3">
              {WRITTEN.map(([name, desc]) => (
                <li key={name}>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 h-fit">
            <div className="flex items-center gap-2 mb-4 text-ember">
              <Vault size={18} />
              <h3 className="font-semibold">What vaults still need</h3>
            </div>
            <ul className="space-y-3">
              {STILL_NEED.map(([name, desc]) => (
                <li key={name}>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-sm text-white/40 leading-relaxed max-w-3xl">
          The second list names the jobs these contracts would do. It is not a design. Holding other
          people&apos;s money is regulated, so lawyers settle how it works before anyone writes the
          code.
        </p>
      </div>

      {/* Live */}
      <div className="mt-14">
        <div className="flex items-center gap-2 mb-6">
          <ScrollText className="text-ember" size={18} />
          <h2 className="text-lg font-semibold">Live on {ROBINHOOD_CHAIN.name}</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 border-b border-white/10">
              <tr>
                <th className="px-4 py-3 font-medium">Contract</th>
                <th className="px-4 py-3 font-medium">Address</th>
                <th className="px-4 py-3 font-medium">What it does</th>
              </tr>
            </thead>
            <tbody>
              {LIVE.map((c) => (
                <tr key={c.name} className="border-b border-white/5">
                  <td className="px-4 py-3 font-mono text-white/90 whitespace-nowrap">{c.name}</td>
                  <td className="px-4 py-3 font-mono text-white/50 whitespace-nowrap">{c.addr}</td>
                  <td className="px-4 py-3 text-white/50">{c.does}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/40">
        <p>
          © 2026 Prey. Asymmetric HOUND bounty hunts. {ECONOMICS.feePoolPct}% of every fee pays the
          hunters. Built on {ROBINHOOD_CHAIN.name}.
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
            ['/roadmap', 'Roadmap'],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className={
                to === '/structure' ? 'text-white underline underline-offset-4' : 'hover:text-ember'
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  )
}
