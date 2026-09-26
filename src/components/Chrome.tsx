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
  return `text-sm whitespace-nowrap transition-colors ${
    isActive ? 'text-white underline underline-offset-4' : 'text-white/55 hover:text-white'
  }`
}

export function Chrome() {
  const { short, walletId, connecting, openConnect, disconnect, error } = useWallet()

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/prey-logo.jpg"
              alt="Prey"
              className="h-8 w-8 rounded-lg object-cover"
            />
            <span className="text-white font-semibold tracking-tight">Prey</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-4 min-w-0 overflow-x-auto">
            {actionLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
                {l.badge ? (
                  <span className="ml-1 rounded-full bg-ember/20 px-1.5 py-0.5 text-[10px] text-ember">
                    {l.badge}
                  </span>
                ) : null}
              </NavLink>
            ))}
            <span className="h-4 w-px bg-white/20" />
            {explainLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 shrink-0">
            <CopyableCa className="hidden sm:inline-flex" />
            {short ? (
              <button
                type="button"
                onClick={disconnect}
                className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white font-mono hover:bg-white/5"
                title={`Disconnect ${walletId ?? 'wallet'}`}
              >
                {short}
              </button>
            ) : (
              <button
                type="button"
                onClick={openConnect}
                disabled={connecting}
                className="rounded-full bg-ember px-4 py-1.5 text-sm font-semibold text-black hover:bg-ember-bright disabled:opacity-60"
              >
                Connect
              </button>
            )}
            <Link
              to="/treasury"
              className="hidden md:inline-flex rounded-full border border-white/25 px-4 py-1.5 text-sm text-white hover:bg-white/5"
            >
              Get rewards
            </Link>
          </div>
        </div>

        <nav className="xl:hidden flex gap-3 overflow-x-auto border-t border-white/5 px-4 py-2">
          {[...actionLinks, ...explainLinks].map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {error && !short ? (
          <p className="border-t border-red-500/30 bg-red-500/10 px-4 py-2 text-xs text-red-300">
            {error}
          </p>
        ) : null}
      </header>
      <ConnectModal />
    </>
  )
}
