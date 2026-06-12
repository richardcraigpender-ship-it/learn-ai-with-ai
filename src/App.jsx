import { Routes, Route, NavLink, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import DashboardPage from './pages/DashboardPage'
import PathPage from './pages/PathPage'
import TopicPage from './pages/TopicPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            <div className="brand-mark">AI</div>
            <div className="brand-text">
              <span className="brand-title">Learn AI with AI</span>
              <span className="brand-subtitle">
                Small lessons you can actually finish
              </span>
            </div>
          </Link>

          <nav className="main-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/browse"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Browse
            </NavLink>

            <NavLink
              to="/path/ai-basics"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              AI Basics Path
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              My Learning
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/path/ai-basics" element={<PathPage />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/topics/:id" element={<TopicPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App