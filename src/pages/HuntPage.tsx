import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ECONOMICS } from '../config'
import { useWallet } from '../wallet/WalletProvider'

const TABS = ['Open', 'Running', 'Finished'] as const
type Tab = (typeof TABS)[number]

const DURATIONS = ['1', '3', '5', '10', '15'] as const

const OPEN_EXAMPLES = [
  {
    letter: '7',
    color: 'bg-[#5cbf8a]',
    addr: '0x7a3f…9b3d',
    id: 42,
    bet: '0.05 ETH',
    betSub: 'Bet in ETH',
    dur: '15 min',
  },
  {
    letter: '2',
    color: 'bg-[#9b7ed9]',
    addr: '0x2c91…44ae',
    id: 41,
    bet: '4,200 HOUND',
    betSub: '≈ 0.021 ETH',
    dur: '5 min',
  },
  {
    letter: '9',
    color: 'bg-[#6b9bd1]',
    addr: '0x91bf…0c12',
    id: 40,
    bet: '0.02 ETH',
    betSub: 'Bet in ETH',
    dur: '1 min',
  },
  {
    letter: 'C',
    color: 'bg-[#e07a9a]',
    addr: '0xc301…88fa',
    id: 39,
    bet: '0.08 ETH',
    betSub: 'Bet in ETH',
    dur: '10 min',
  },
]

const RUNNING_EXAMPLES = [
  {
    id: 37,
    dur: '15 min',
    left: '6:12',
    progress: 58,
    a: {
      letter: '9',
      color: 'bg-[#6b9bd1]',
      addr: '0x91c5…d6c9',
      pnl: '+3.12%',
      pos: true,
      bet: '0.05 ETH',
      trades: '9',
      vol: '$1,284',
      role: 'Hunter',
    },
    b: {
      letter: '3',
      color: 'bg-[#e0915c]',
      addr: '0x3b7e…1e75',
      pnl: '−1.45%',
      pos: false,
      bet: '9,800 HOUND',
      trades: '6',
      vol: '$986',
      role: 'Mark',
    },
  },
  {
    id: 36,
    dur: '5 min',
    left: '1:48',
    progress: 64,
    a: {
      letter: 'A',
      color: 'bg-[#5cbf8a]',
      addr: '0xa19c…55e0',
      pnl: '−0.38%',
      pos: false,
      bet: '0.03 ETH',
      trades: '4',
      vol: '$612',
      role: 'Hunter',
    },
    b: {
      letter: 'F',
      color: 'bg-[#9b7ed9]',
      addr: '0xf091…bb10',
      pnl: '+1.02%',
      pos: true,
      bet: '0.03 ETH',
      trades: '7',
      vol: '$890',
      role: 'Mark',
    },
  },
]

const FINISHED_EXAMPLES = [
  {
    id: 1,
    dur: '15 min',
    status: 'Withdrawn' as const,
    note: 'The creator withdrew this trail before anyone accepted.',
    creator: {
      letter: '0',
      color: 'bg-[#e07a9a]',
      addr: '0x00bd…0b0e',
      bet: '0.001 ETH',
      trades: '—',
      vol: '—',
    },
    opponent: null,
    feeLine: `Entry fee ${ECONOMICS.entryFeeEth} ETH from the creator, — from the opponent.`,
  },
  {
    id: 2,
    dur: '10 min',
    status: 'Settled' as const,
    note: 'Hunter beat the mark’s PnL. Bounty paid to 0x7a3f…9b3d.',
    creator: {
      letter: '7',
      color: 'bg-[#5cbf8a]',
      addr: '0x7a3f…9b3d',
      bet: '0.05 ETH',
      trades: '11',
      vol: '$2,140',
    },
    opponent: {
      letter: 'W',
      color: 'bg-[#c45c5c]',
      addr: '0xWhale…88',
      bet: '—',
      trades: '8',
      vol: '$1,902',
    },
    feeLine: `Entry fee ${ECONOMICS.entryFeeEth} ETH from the hunter, ${ECONOMICS.entryFeeEth} ETH from the mark side.`,
  },
]

function CreatePanel() {
  const [feePay, setFeePay] = useState<'HOUND' | 'ETH'>('HOUND')
  const [duration, setDuration] = useState('15')
  const { address, openConnect, connecting } = useWallet()

  return (
    <aside
      id="create-hunt"
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 h-fit sticky top-24"
    >
      <h2 className="text-lg font-semibold">Create trail</h2>

      <div className="mt-5">
        <p className="text-xs text-white/40 mb-2">Your bet</p>
        <div className="mb-2 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#627eea] text-[10px] font-bold text-white">
            ◆
          </span>
          <div>
            <p className="text-sm font-medium">ETH</p>
            <p className="text-[11px] text-white/40">Priced at face value</p>
          </div>
        </div>

        {address ? (
          <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-3">
            <input
              className="w-full bg-transparent text-3xl font-semibold outline-none"
              defaultValue="0"
              inputMode="decimal"
            />
            <span className="pb-1 text-sm text-white/50 shrink-0">ETH</span>
          </div>
        ) : (
          <button
            type="button"
            onClick={openConnect}
            disabled={connecting}
            className="w-full rounded-xl border border-dashed border-white/20 px-3 py-8 text-sm text-white/45 hover:border-ember/40 hover:text-white/70"
          >
            Connect a wallet to pick from the coins it holds.
          </button>
        )}
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs text-white/40">Entry fee</p>
          <p className="text-sm text-white/50">—</p>
        </div>
        <div className="flex gap-2">
          {(['HOUND', 'ETH'] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setFeePay(p)}
              className={`flex-1 rounded-lg py-2 text-sm ${
                feePay === p
                  ? 'bg-ember text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              Pay in {p}
            </button>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-white/35 leading-relaxed">
          A set fee for every trail, paid on top of your bet. It is not part of what you win or lose.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs text-white/40 mb-2">Duration</p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDuration(d)}
              className={`rounded-lg px-3 py-2 text-sm ${
                duration === d
                  ? 'bg-ember text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {d} min
            </button>
          ))}
        </div>
      </div>

      <dl className="mt-5 space-y-2 text-xs text-white/45">
        <div className="flex justify-between gap-2">
          <dt>Opponent&apos;s bet</dt>
          <dd className="text-white/70">Within 10% of yours</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt>Offer stands</dt>
          <dd className="text-white/70">Until accepted or cancelled</dd>
        </div>
      </dl>

      <p className="mt-4 text-[11px] text-white/35 leading-relaxed">
        Entry fees are what trails pay out: {ECONOMICS.feePoolPct}% to the reward pool.{' '}
        {ECONOMICS.feeProjectPct}% to the project.
      </p>

      <button
        type="button"
        disabled={!address}
        onClick={address ? undefined : openConnect}
        className="mt-5 w-full rounded-full bg-white/10 py-3 text-sm font-semibold text-white/40 disabled:cursor-not-allowed enabled:bg-ember enabled:text-black enabled:hover:bg-ember-bright"
      >
        Create trail
      </button>
      {!address ? (
        <button
          type="button"
          onClick={openConnect}
          className="mt-2 w-full text-center text-xs text-ember hover:underline"
        >
          Connect a wallet
        </button>
      ) : (
        <p className="mt-3 text-center text-[11px] text-white/35">
          Needs a scent tier ·{' '}
          <Link to="/treasury#tiers" className="text-ember underline">
            Get a tier
          </Link>
        </p>
      )}
    </aside>
  )
}

function OpenTab() {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-ember/35 bg-ember/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/80 leading-relaxed max-w-xl">
          No open trails yet. Open the first challenge. It sits here for anyone to accept, and the
          better HOUND PnL takes the bounty.
        </p>
        <button
          type="button"
          className="shrink-0 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-black hover:bg-ember-bright"
          onClick={() =>
            document.getElementById('create-hunt')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Create the first trail
        </button>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/35">Example</p>
        <ul className="space-y-2 opacity-60">
          {OPEN_EXAMPLES.map((row) => (
            <li
              key={row.id}
              className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-black ${row.color}`}
              >
                {row.letter}
              </span>
              <div className="min-w-[7.5rem]">
                <p className="font-mono text-white">{row.addr}</p>
                <p className="text-xs text-white/40">Trail {row.id}</p>
              </div>
              <div className="ml-auto text-right sm:ml-0 sm:min-w-[7rem]">
                <p className="font-medium">{row.bet}</p>
                <p className="text-xs text-white/40">{row.betSub}</p>
              </div>
              <p className="w-16 text-white/60">{row.dur}</p>
              <button
                type="button"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/70"
              >
                Accept
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function RunningTab() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-ember/30 bg-ember/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/80">No trails running.</p>
        <button
          type="button"
          className="shrink-0 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-black"
          onClick={() =>
            document.getElementById('create-hunt')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Create a trail
        </button>
      </div>

      <p className="mb-3 text-xs uppercase tracking-widest text-white/35">Example</p>
      <div className="space-y-4 opacity-80">
        {RUNNING_EXAMPLES.map((b) => (
          <article
            key={b.id}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">
                Trail {b.id} <span className="text-white/40 font-normal">· {b.dur}</span>
              </h3>
              <span className="rounded-full bg-ember/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-ember">
                Running
              </span>
              <span className="ml-auto font-mono text-sm text-ember">{b.left} left</span>
            </div>
            <div className="mb-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-ember" style={{ width: `${b.progress}%` }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[b.a, b.b].map((side) => (
                <div key={side.addr}>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-black ${side.color}`}
                    >
                      {side.letter}
                    </span>
                    <div>
                      <p className="font-mono text-sm">{side.addr}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/35">
                        {side.role}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-3xl font-semibold tabular-nums ${
                      side.pos ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {side.pnl}
                  </p>
                  <dl className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <dt className="text-white/35">Bet</dt>
                      <dd>{side.bet}</dd>
                    </div>
                    <div>
                      <dt className="text-white/35">Trades</dt>
                      <dd>{side.trades}</dd>
                    </div>
                    <div>
                      <dt className="text-white/35">Volume</dt>
                      <dd>{side.vol}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function FinishedTab() {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-widest text-white/35">Example</p>
      <div className="space-y-4">
        {FINISHED_EXAMPLES.map((b) => (
          <article
            key={b.id}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="mb-2 flex flex-wrap items-start gap-2">
              <div>
                <h3 className="font-semibold">
                  Trail {b.id} <span className="text-white/40 font-normal">· {b.dur}</span>
                </h3>
                <span className="mt-1 inline-block rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/50">
                  {b.status}
                </span>
              </div>
              <button
                type="button"
                className="ml-auto rounded-lg border border-white/15 px-3 py-1 text-xs text-white/60 hover:text-white"
              >
                Share
              </button>
            </div>
            <p className="mb-5 text-sm text-white/45">{b.note}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-wider text-white/35">Creator</p>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-black ${b.creator.color}`}
                  >
                    {b.creator.letter}
                  </span>
                  <p className="font-mono text-sm">{b.creator.addr}</p>
                </div>
                <dl className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <dt className="text-white/35">Bet</dt>
                    <dd>{b.creator.bet}</dd>
                  </div>
                  <div>
                    <dt className="text-white/35">Trades</dt>
                    <dd>{b.creator.trades}</dd>
                  </div>
                  <div>
                    <dt className="text-white/35">Volume</dt>
                    <dd>{b.creator.vol}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-wider text-white/35">Opponent</p>
                {b.opponent ? (
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-black ${b.opponent.color}`}
                      >
                        {b.opponent.letter}
                      </span>
                      <p className="font-mono text-sm">{b.opponent.addr}</p>
                    </div>
                    <dl className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <dt className="text-white/35">Bet</dt>
                        <dd>{b.opponent.bet}</dd>
                      </div>
                      <div>
                        <dt className="text-white/35">Trades</dt>
                        <dd>{b.opponent.trades}</dd>
                      </div>
                      <div>
                        <dt className="text-white/35">Volume</dt>
                        <dd>{b.opponent.vol}</dd>
                      </div>
                    </dl>
                  </>
                ) : (
                  <p className="text-sm text-white/40 py-2">No opponent yet</p>
                )}
              </div>
            </div>

            <p className="mt-5 border-t border-white/10 pt-3 text-xs text-white/35">{b.feeLine}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function HuntPage() {
  const [tab, setTab] = useState<Tab>('Open')

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">The Hunt</h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/55 leading-relaxed">
          One-on-one HOUND trading trails. Both sides bet ETH or a coin of matching value, trade
          their own wallet for 1 to 15 minutes, and the better PnL takes the bounty.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm ${
              tab === t
                ? 'bg-ember text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { k: 'Open challenges', v: '0', s: '' },
          { k: 'Running now', v: '0', s: '' },
          {
            k: 'Entry fee',
            v: `${ECONOMICS.entryFeeEth} ETH`,
            s: 'In HOUND or ETH, each side',
          },
          {
            k: 'Trading',
            v: ECONOMICS.huntAsset,
            s: "From each trader's own wallet",
          },
        ].map((cell) => (
          <div
            key={cell.k}
            className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
          >
            <p className="text-xs text-white/40">{cell.k}</p>
            <p className="mt-1 text-lg font-semibold">{cell.v}</p>
            {cell.s ? <p className="mt-0.5 text-[11px] text-white/35">{cell.s}</p> : null}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div>
          {tab === 'Open' ? <OpenTab /> : null}
          {tab === 'Running' ? <RunningTab /> : null}
          {tab === 'Finished' ? <FinishedTab /> : null}
        </div>
        <CreatePanel />
      </div>
    </div>
  )
}
