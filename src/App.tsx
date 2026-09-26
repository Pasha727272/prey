import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WalletProvider } from './wallet/WalletProvider'
import { Chrome } from './components/Chrome'
import HomePage from './pages/HomePage'
import HuntPage from './pages/HuntPage'
import TradersPage from './pages/TradersPage'
import FeedPage from './pages/FeedPage'
import TreasuryPage from './pages/TreasuryPage'
import ReferralsPage from './pages/ReferralsPage'
import StructurePage from './pages/StructurePage'
import ListingsPage from './pages/ListingsPage'
import RoadmapPage from './pages/RoadmapPage'

export default function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-black text-white">
          <Chrome />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hunt" element={<HuntPage />} />
              <Route path="/traders" element={<TradersPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/treasury" element={<TreasuryPage />} />
              <Route path="/referrals" element={<ReferralsPage />} />
              <Route path="/structure" element={<StructurePage />} />
              <Route path="/listings" element={<ListingsPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </WalletProvider>
  )
}
