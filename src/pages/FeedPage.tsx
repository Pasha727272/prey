import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type Filter = 'All' | 'Hunts' | 'Trades' | 'Mine'
type Tag = 'Sell' | 'Buy' | 'Hunt'

type FeedRow = {
  id: string
  tag: Tag
  kind: 'Trades' | 'Hunts'
  addr: string
  body: string
  ago: string
  tx: string
  eth: string
  letter: string
  color: string
}

const AVATAR = [
  'bg-[#c4a574]',
  'bg-[#e07a9a]',
  'bg-[#6b9bd1]',
  'bg-[#c45c5c]',
  'bg-[#9b7ed9]',
  'bg-[#5cbf8a]',
  'bg-[#d4a017]',
  'bg-[#7a8fa0]',
  'bg-[#e0915c]',
  'bg-[#6ec6c6]',
]

const FEED: FeedRow[] = [
  { id: '1', tag: 'Sell', kind: 'Trades', addr: '0x0754…306a', body: 'sold 1,527,580.21 HOUND', ago: '1d ago', tx: '0x7b98…1fe1', eth: '0.0022 ETH', letter: '0', color: AVATAR[0] },
  { id: '2', tag: 'Sell', kind: 'Trades', addr: '0x9c21…a4f0', body: 'sold 820,100.44 HOUND', ago: '1d ago', tx: '0x11aa…90bc', eth: '0.0014 ETH', letter: 'C', color: AVATAR[1] },
  { id: '3', tag: 'Sell', kind: 'Trades', addr: '0x6ef0…12ab', body: 'sold 410,055.40 HOUND', ago: '1d ago', tx: '0x88fe…33d1', eth: '0.0009 ETH', letter: '6', color: AVATAR[2] },
  { id: '4', tag: 'Sell', kind: 'Trades', addr: '0x2c91…44ae', body: 'sold 2,104,880.12 HOUND', ago: '1d ago', tx: '0xabcd…ef01', eth: '0.0038 ETH', letter: 'F', color: AVATAR[3] },
  { id: '5', tag: 'Sell', kind: 'Trades', addr: '0x91bf…0c12', body: 'sold 95,220.01 HOUND', ago: '2d ago', tx: '0x55cd…812a', eth: '0.0002 ETH', letter: '9', color: AVATAR[4] },
  { id: '6', tag: 'Sell', kind: 'Trades', addr: '0x414d…3b69', body: 'sold 11,096,817.77 HOUND', ago: '2d ago', tx: '0xe96c…4e4f', eth: '0.0186 ETH', letter: '5', color: AVATAR[5] },
  { id: '7', tag: 'Sell', kind: 'Trades', addr: '0x00bd…0b0e', body: 'sold 3,441,200.50 HOUND', ago: '2d ago', tx: '0x2a11…77c0', eth: '0.0051 ETH', letter: 'C', color: AVATAR[6] },
  { id: '8', tag: 'Sell', kind: 'Trades', addr: '0x9af2…11c0', body: 'sold 188,040.33 HOUND', ago: '2d ago', tx: '0x0ffe…19ab', eth: '0.0003 ETH', letter: 'D', color: AVATAR[7] },
  { id: '9', tag: 'Sell', kind: 'Trades', addr: '0x56f8…8781', body: 'sold 7,220,991.08 HOUND', ago: '2d ago', tx: '0xbba0…c3d2', eth: '0.0120 ETH', letter: '0', color: AVATAR[8] },
  { id: '10', tag: 'Sell', kind: 'Trades', addr: '0x7a3f…9b3d', body: 'sold 44,100.00 HOUND', ago: '2d ago', tx: '0x19de…66f1', eth: '0 ETH', letter: '8', color: AVATAR[9] },
  { id: '11', tag: 'Buy', kind: 'Trades', addr: '0x2c6a…77b4', body: 'bought 2,396,381.80 HOUND', ago: '3d ago', tx: '0xcc12…90ee', eth: '0.0250 ETH', letter: 'B', color: AVATAR[0] },
  { id: '12', tag: 'Sell', kind: 'Trades', addr: '0x4ac4…ed79', body: 'sold 5,880,210.66 HOUND', ago: '3d ago', tx: '0x771a…0b2c', eth: '0.0812 ETH', letter: '4', color: AVATAR[1] },
  { id: '13', tag: 'Sell', kind: 'Trades', addr: '0x8e01…a2f5', body: 'sold 1,102,440.19 HOUND', ago: '3d ago', tx: '0x3f90…aabb', eth: '0.0019 ETH', letter: '8', color: AVATAR[2] },
  { id: '14', tag: 'Sell', kind: 'Trades', addr: '0xa19c…55e0', body: 'sold 990,001.00 HOUND', ago: '3d ago', tx: '0xdde1…4410', eth: '0.0016 ETH', letter: 'A', color: AVATAR[3] },
  { id: '15', tag: 'Buy', kind: 'Trades', addr: '0xb770…12cd', body: 'bought 6,540,000.00 HOUND', ago: '3d ago', tx: '0x90af…17e2', eth: '0.0857 ETH', letter: 'C', color: AVATAR[4] },
  { id: '16', tag: 'Sell', kind: 'Trades', addr: '0xc301…88fa', body: 'sold 250,880.72 HOUND', ago: '3d ago', tx: '0x1212…99cc', eth: '0.0004 ETH', letter: '2', color: AVATAR[5] },
  { id: '17', tag: 'Sell', kind: 'Trades', addr: '0xd44e…0199', body: 'sold 4,770,330.11 HOUND', ago: '4d ago', tx: '0xbeef…cafe', eth: '0.0077 ETH', letter: 'D', color: AVATAR[6] },
  { id: '18', tag: 'Sell', kind: 'Trades', addr: '0xe812…66aa', body: 'sold 33,210.05 HOUND', ago: '4d ago', tx: '0xfeed…1001', eth: '0 ETH', letter: 'E', color: AVATAR[7] },
  { id: '19', tag: 'Hunt', kind: 'Hunts', addr: '0xf091…bb10', body: 'settled trail vs 0xWhale…88 — bounty claimed', ago: '4d ago', tx: '0xhunt…0001', eth: '0.0500 ETH', letter: 'F', color: AVATAR[8] },
  { id: '20', tag: 'Sell', kind: 'Trades', addr: '0x1055…c0de', body: 'sold 8,901,224.90 HOUND', ago: '4d ago', tx: '0x9999…1111', eth: '0.0144 ETH', letter: '1', color: AVATAR[9] },
  { id: '21', tag: 'Buy', kind: 'Trades', addr: '0x22ab…3344', body: 'bought 1,250,000.00 HOUND', ago: '4d ago', tx: '0xaaaa…bbbb', eth: '0.0021 ETH', letter: '2', color: AVATAR[0] },
  { id: '22', tag: 'Sell', kind: 'Trades', addr: '0x33cd…5566', body: 'sold 672,918.45 HOUND', ago: '5d ago', tx: '0xcccc…dddd', eth: '0.0011 ETH', letter: '3', color: AVATAR[1] },
  { id: '23', tag: 'Sell', kind: 'Trades', addr: '0x44ef…7788', body: 'sold 15,440,100.00 HOUND', ago: '5d ago', tx: '0xeeee…ffff', eth: '0.0280 ETH', letter: '4', color: AVATAR[2] },
  { id: '24', tag: 'Hunt', kind: 'Hunts', addr: '0x55aa…99bb', body: 'settled trail vs AviFelman — bounty claimed', ago: '5d ago', tx: '0xhunt…0002', eth: '0.1200 ETH', letter: '5', color: AVATAR[3] },
]

export default function FeedPage() {
  const [filter, setFilter] = useState<Filter>('All')
  const rows = useMemo(() => {
    if (filter === 'All') return FEED
    if (filter === 'Mine') return []
    return FEED.filter((r) => r.kind === filter)
  }, [filter])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Feed</h1>
          <p className="mt-2 text-sm text-white/55">Every hunt and every HOUND trade, as it settles.</p>
        </div>
        <div className="flex gap-1 rounded-full border border-white/10 p-1">
          {(['All', 'Hunts', 'Trades', 'Mine'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1.5 text-xs ${
                filter === f ? 'bg-ember text-black font-semibold' : 'text-white/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-3 max-w-xl">
        {[
          ['Running now', '0'],
          ['Open trails', '0'],
          ['Hunts settled', '0'],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl border border-white/10 px-3 py-3">
            <p className="text-xs text-white/40">{l}</p>
            <p className="text-xl font-semibold">{v}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8">
        <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {rows.length === 0 ? (
            <li className="px-4 py-10 text-center text-sm text-white/40">No activity in this filter.</li>
          ) : (
            rows.map((r) => (
              <li key={r.id} className="flex items-center gap-3 px-4 py-3.5 text-sm">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-black ${r.color}`}
                >
                  {r.letter}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                        r.tag === 'Buy'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : r.tag === 'Hunt'
                            ? 'bg-ember/20 text-ember'
                            : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {r.tag}
                    </span>
                    <span className="font-mono text-white">{r.addr}</span>
                    <span className="text-white/55">{r.body}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-white/35">
                    {r.ago} <span className="text-white/20">—</span>{' '}
                    <span className="font-mono">{r.tx}</span>
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm text-white tabular-nums">{r.eth}</span>
              </li>
            ))
          )}
        </ul>

        <aside className="rounded-2xl border border-ember/25 bg-white/[0.02] p-5 h-fit">
          <h3 className="font-semibold">Running now</h3>
          <p className="mt-2 text-sm text-white/45">No hunts are running.</p>
          <Link
            to="/hunt"
            className="mt-5 block w-full rounded-full bg-ember py-3 text-center text-sm font-semibold text-black"
          >
            Start a hunt
          </Link>
        </aside>
      </div>
    </div>
  )
}
