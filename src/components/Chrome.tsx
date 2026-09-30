import { Link, NavLink } from 'react-router-dom'
import { CopyableCa } from './CopyableCa'
import { ConnectModal } from './ConnectModal'
import { useWallet } from '../wallet/WalletProvider'

type NavItem = { to: string; label: string; end?: boolean; badge?: string }

const actionLinks: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/feed', label: 'Feed' },
  { to: '/traders', label: 'Traders' },
  { to: '/hunt', label: 'The Hunt', badge: 'New' },
  { to: '/treasury', label: 'Treasury' },
  { to: '/referrals', label: 'Referrals' },
]

const explainLinks: NavItem[] = [
  { to: '/structure', label: 'Structure' },
  { to: '/listings', label: 'Listings' },
  { to: '/roadmap', label: 'Roadmap' },
]

function linkClass({ isActive }: { isActive: boolean }) {
  return `btn-lift text-sm font-semibold whitespace-nowrap transition-colors ${
    isActive ? 'text-black underline underline-offset-4' : 'text-black/80 hover:text-black'
  }`
}

export function Chrome() {
  const { short, walletId, connecting, openConnect, disconnect, error } = useWallet()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hood-deep/10 bg-hood">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
          <Link to="/" className="btn-lift flex shrink-0 items-center gap-2.5">
            <img
              src="/prey-logo.png"
              alt="Prey"
              className="h-11 w-11 object-contain"
            />
            <span className="text-black font-bold tracking-tight text-lg">Prey</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-4 min-w-0">
            {actionLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
                {l.badge ? (
                  <span className="ml-1 rounded-full bg-hood-deep px-1.5 py-0.5 text-[10px] font-semibold text-ember">
                    {l.badge}
                  </span>
                ) : null}
              </NavLink>
            ))}
            <span className="h-4 w-px bg-hood-deep/25" />
            {explainLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <CopyableCa className="btn-lift hidden sm:inline-flex !border-black/30 !bg-black/10 !text-black hover:!bg-black/20 hover:!text-black [&_span]:!text-black/60" />
            {short ? (
              <button
                type="button"
                onClick={disconnect}
                className="btn-lift rounded-full border border-black/35 bg-black/10 px-3 py-1.5 text-sm text-black font-mono font-semibold hover:bg-black/20"
                title={`Disconnect ${walletId ?? 'wallet'}`}
              >
                {short}
              </button>
            ) : (
              <button
                type="button"
                onClick={openConnect}
                disabled={connecting}
                className="btn-lift rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-ember hover:bg-neutral-950 disabled:opacity-60"
              >
                Connect
              </button>
            )}
            <Link
              to="/treasury"
              className="btn-lift hidden md:inline-flex rounded-full border-2 border-black bg-transparent px-4 py-1.5 text-sm font-semibold text-black hover:bg-black hover:text-ember"
            >
              Get rewards
            </Link>
          </div>
        </div>

        <nav className="xl:hidden flex gap-3 overflow-x-auto border-t border-hood-deep/10 px-4 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[...actionLinks, ...explainLinks].map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {error && !short ? (
          <p className="border-t border-red-500/30 bg-red-500/15 px-4 py-2 text-xs text-red-800">
            {error}
          </p>
        ) : null}
      </header>
      <ConnectModal />
    </>
  )
}
