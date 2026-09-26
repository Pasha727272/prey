import { Link } from 'react-router-dom'
import { ECONOMICS } from '../config'

const COLORS = [
  'bg-[#6b9bd1]',
  'bg-[#e07a9a]',
  'bg-[#9b7ed9]',
  'bg-[#5cbf8a]',
  'bg-[#e0915c]',
  'bg-[#6ec6c6]',
  'bg-[#d4a017]',
  'bg-[#c45c5c]',
  'bg-[#c4a574]',
  'bg-[#7a8fa0]',
]

const WANTED = [
  { name: 'AviFelman', handle: '@AviFelman', rank: 1, pnl24: '+$396.4K', pnl7: '+$941.4K', vol: '$471.8K', bounty: '0.12 ETH', avatar: '/avatars/avi.png' },
  { name: '0xWhale…88', handle: '@whale88', rank: 2, pnl24: '+$210.1K', pnl7: '+$502.0K', vol: '$318.2K', bounty: '0.08 ETH', avatar: '/avatars/whale.png' },
  { name: 'DipKing', handle: '@dipking', rank: 3, pnl24: '+$88.4K', pnl7: '+$190.2K', vol: '$142.0K', bounty: '0.05 ETH', avatar: '/avatars/dip.png' },
  { name: 'ChartGhost', handle: '@ghost', rank: 4, pnl24: '+$41.2K', pnl7: '+$99.8K', vol: '$87.4K', bounty: '0.03 ETH', avatar: '/avatars/ghost.png' },
  { name: 'SniperNine', handle: '@s9', rank: 5, pnl24: '+$22.0K', pnl7: '+$61.5K', vol: '$54.1K', bounty: '0.02 ETH', avatar: '/avatars/sniper.png' },
]

const YET = [
  { addr: '0x414d…3b69', letter: '4', last: 'Sep 18, 3:32 PM', pnl: '+0.2321 ETH', pct: '+7.34%', trades: 42, vol: '6.5566 ETH', pos: true },
  { addr: '0x00bd…0b0e', letter: 'C', last: 'Sep 19, 1:10 PM', pnl: '+0.0011 ETH', pct: '+2.39%', trades: 8, vol: '0.4120 ETH', pos: true },
  { addr: '0x9af2…11c0', letter: 'E', last: 'Sep 17, 9:04 AM', pnl: '−0.1266 ETH', pct: '−14.40%', trades: 19, vol: '2.1001 ETH', pos: false },
  { addr: '0x2c6a…77b4', letter: 'B', last: 'Sep 18, 11:20 AM', pnl: '+0.0884 ETH', pct: '+4.12%', trades: 27, vol: '3.2100 ETH', pos: true },
  { addr: '0x7a3f…9b3d', letter: '0', last: 'Sep 18, 4:01 PM', pnl: '−0.0540 ETH', pct: '−3.20%', trades: 11, vol: '1.4500 ETH', pos: false },
  { addr: '0x1c66…b4ea', letter: '1', last: 'Sep 18, 7:37 PM', pnl: '−0.3249 ETH', pct: '−18.20%', trades: 8, vol: '1.0610 ETH', pos: false },
  { addr: '0xa19c…55e0', letter: '0', last: 'Sep 18, 6:12 PM', pnl: '+0.6337 ETH', pct: '+22.10%', trades: 18, vol: '4.8800 ETH', pos: true },
  { addr: '0xd44e…0199', letter: 'D', last: 'Sep 17, 8:44 PM', pnl: '−0.0174 ETH', pct: '−4.51%', trades: 4, vol: '0.9914 ETH', pos: false },
  { addr: '0x2132…3a2f', letter: '2', last: 'Sep 17, 7:57 PM', pnl: '+0.5389 ETH', pct: '+538.92%', trades: 5, vol: '0.7548 ETH', pos: true },
  { addr: '0x33cd…5566', letter: '3', last: 'Sep 17, 5:30 PM', pnl: '+0.0912 ETH', pct: '+6.80%', trades: 14, vol: '2.2200 ETH', pos: true },
  { addr: '0x44ef…7788', letter: '2', last: 'Sep 17, 2:11 PM', pnl: '−0.2100 ETH', pct: '−9.40%', trades: 22, vol: '5.1000 ETH', pos: false },
  { addr: '0x55aa…99bb', letter: '2', last: 'Sep 16, 9:48 PM', pnl: '+0.0440 ETH', pct: '+1.90%', trades: 9, vol: '1.3300 ETH', pos: true },
  { addr: '0x66bb…aacc', letter: '1', last: 'Sep 16, 4:22 PM', pnl: '+0.1805 ETH', pct: '+11.20%', trades: 31, vol: '3.9000 ETH', pos: true },
  { addr: '0x77cc…bbdd', letter: 'F', last: 'Sep 16, 1:05 PM', pnl: '−0.0888 ETH', pct: '−5.60%', trades: 7, vol: '0.8800 ETH', pos: false },
  { addr: '0x88dd…ccee', letter: '4', last: 'Sep 15, 10:19 PM', pnl: '+0.0122 ETH', pct: '+0.80%', trades: 3, vol: '0.5400 ETH', pos: true },
  { addr: '0x99ee…ddff', letter: '0', last: 'Sep 15, 6:40 PM', pnl: '−0.4011 ETH', pct: '−21.00%', trades: 16, vol: '2.7700 ETH', pos: false },
  { addr: '0xaa01…1122', letter: '6', last: 'Sep 15, 3:14 PM', pnl: '+0.2750 ETH', pct: '+15.40%', trades: 28, vol: '4.1200 ETH', pos: true },
  { addr: '0xbb23…3344', letter: 'C', last: 'Sep 14, 11:58 AM', pnl: '+0.0099 ETH', pct: '+1.10%', trades: 6, vol: '0.6200 ETH', pos: true },
  { addr: '0xcc45…5566', letter: '8', last: 'Sep 14, 8:02 AM', pnl: '−0.1555 ETH', pct: '−8.90%', trades: 13, vol: '1.9800 ETH', pos: false },
  { addr: '0xdd67…7788', letter: 'B', last: 'Sep 13, 9:33 PM', pnl: '+0.9200 ETH', pct: '+41.00%', trades: 55, vol: '8.4400 ETH', pos: true },
  { addr: '0xee89…99aa', letter: '9', last: 'Sep 13, 5:17 PM', pnl: '−0.0022 ETH', pct: '−0.30%', trades: 2, vol: '0.3100 ETH', pos: false },
  { addr: '0xffab…bbcc', letter: '5', last: 'Sep 12, 2:49 PM', pnl: '+0.0677 ETH', pct: '+3.50%', trades: 17, vol: '2.0500 ETH', pos: true },
  { addr: '0x1020…3040', letter: '7', last: 'Sep 12, 12:01 PM', pnl: '+0.1444 ETH', pct: '+9.10%', trades: 24, vol: '3.5600 ETH', pos: true },
  { addr: '0x2030…4050', letter: 'A', last: 'Sep 11, 8:28 PM', pnl: '−0.5000 ETH', pct: '−27.50%', trades: 33, vol: '4.0100 ETH', pos: false },
  { addr: '0x3040…5060', letter: '3', last: 'Sep 11, 4:55 PM', pnl: '+0.0333 ETH', pct: '+2.00%', trades: 10, vol: '1.1200 ETH', pos: true },
  { addr: '0x4050…6070', letter: 'E', last: 'Sep 10, 7:07 PM', pnl: '+1.1020 ETH', pct: '+62.00%', trades: 71, vol: '12.300 ETH', pos: true },
  { addr: '0x5060…7080', letter: '2', last: 'Sep 10, 1:41 PM', pnl: '−0.0777 ETH', pct: '−6.20%', trades: 15, vol: '1.6700 ETH', pos: false },
  { addr: '0x6070…8090', letter: 'D', last: 'Sep 9, 10:10 AM', pnl: '+0.0190 ETH', pct: '+1.40%', trades: 4, vol: '0.4800 ETH', pos: true },
]

function callOutHref(addr: string) {
  return `https://x.com/intent/tweet?text=${encodeURIComponent(`Calling out ${addr} on Prey. Take the trail.`)}`
}

export default function TradersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Traders</h1>
          <p className="mt-3 max-w-xl text-sm text-white/55">
            PnL, volume, and open bounties. Most Wanted carries the prize pool. Take the trail, do
            not ask permission.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            ['Traders', '577', '576 yet to hunt'],
            ['Open bounties', '0', ''],
            ['Entry fee', `${ECONOMICS.entryFeeEth} ETH`, 'Prey or ETH'],
          ].map(([l, v, s]) => (
            <div
              key={l}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 min-w-[140px]"
            >
              <p className="text-xs text-white/40">{l}</p>
              <p className="text-xl font-semibold">{v}</p>
              {s ? <p className="text-xs text-white/35">{s}</p> : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Most Wanted</h2>
          <p className="text-xs text-white/40">Updated hourly · 24h / 7d</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {WANTED.map((t) => (
            <article
              key={t.rank}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 relative"
            >
              <span className="absolute right-3 top-3 text-xs text-white/35">#{t.rank}</span>
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="mt-3 font-medium">{t.name}</p>
              <p className="text-xs text-white/40">{t.handle}</p>
              <dl className="mt-3 space-y-1 text-xs">
                <div className="flex justify-between">
                  <dt className="text-white/40">24h</dt>
                  <dd className="text-emerald-400">{t.pnl24}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/40">7d</dt>
                  <dd className="text-emerald-400">{t.pnl7}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/40">Vol</dt>
                  <dd>{t.vol}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-white/40">Bounty</dt>
                  <dd className="text-ember">{t.bounty}</dd>
                </div>
              </dl>
              <Link
                to="/hunt"
                className="mt-4 block w-full rounded-full bg-ember py-2 text-center text-xs font-semibold text-black"
              >
                Take trail
              </Link>
              <a
                href={callOutHref(t.handle)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block w-full rounded-full border border-white/15 py-2 text-center text-xs text-white/60 hover:text-white"
              >
                Call out on X
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        <div>
          <h2 className="text-xl font-semibold">Yet to hunt</h2>
          <p className="mt-1 text-xs text-white/40 mb-4">
            Trading HOUND, no trail yet. Most volume first.
          </p>
          <ul className="rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden">
            {YET.map((r, i) => (
              <li
                key={r.addr}
                className="flex flex-wrap items-center gap-3 px-4 py-3.5 text-sm bg-white/[0.01]"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-black ${COLORS[i % COLORS.length]}`}
                >
                  {r.letter}
                </span>
                <div className="min-w-[9rem] flex-1">
                  <p className="font-mono font-medium text-white">{r.addr}</p>
                  <p className="text-xs text-white/35">Last trade {r.last}</p>
                </div>
                <div
                  className={`min-w-[6.5rem] ${r.pos ? 'text-emerald-400' : 'text-red-400'}`}
                >
                  <p className="font-medium tabular-nums">{r.pnl}</p>
                  <p className="text-xs opacity-80 tabular-nums">{r.pct}</p>
                </div>
                <p className="w-10 text-center text-white/80 tabular-nums">{r.trades}</p>
                <p className="min-w-[6rem] text-white/80 tabular-nums">{r.vol}</p>
                <div className="ml-auto flex gap-2">
                  <Link
                    to="/hunt"
                    className="rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white hover:bg-white/5"
                  >
                    Challenge
                  </Link>
                  <a
                    href={callOutHref(r.addr)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/5"
                  >
                    <span className="font-bold text-[10px]">𝕏</span>
                    Call out
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 h-fit sticky top-24">
          <h3 className="font-semibold">Propose a hunt</h3>
          <p className="mt-2 text-xs text-white/45 leading-relaxed">
            Pick a trader to challenge. Everyone can see the proposal, and only the trader you name
            can accept it.
          </p>
          <Link
            to="/hunt"
            className="mt-5 block w-full rounded-full border border-white/20 py-3 text-center text-sm font-medium text-white hover:bg-white/5"
          >
            Open The Hunt
          </Link>
          <p className="mt-3 text-xs text-white/35">
            A hunt needs a tier.{' '}
            <Link to="/treasury#tiers" className="text-ember underline">
              Get a tier
            </Link>
          </p>
        </aside>
      </div>
    </div>
  )
}
