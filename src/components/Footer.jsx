import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand-block">
          <div className="footer-brand-row">
            <div className="brand-mark footer-mark">AI</div>
            <div>
              <h3 className="footer-brand-title">Learn AI with AI</h3>
              <p className="footer-brand-copy">
                Small, practical AI lessons for beginners who want clarity without overwhelm.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div>
            <h4 className="footer-heading">Explore</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/browse">Browse mini-classes</Link>
              <Link to="/path/ai-basics">AI Basics Path</Link>
              <Link to="/dashboard">My Learning</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Start here</h4>
            <div className="footer-links">
              <Link to="/topic/what-is-ai">What is AI?</Link>
              <Link to="/topic/prompting-basics">Prompting Basics</Link>
              <Link to="/topic/ai-safety-basics">AI Safety Basics</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">About</h4>
            <div className="footer-links">
              <a href="mailto:hello@learnaiwithai.com">hello@learnaiwithai.com</a>
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 Learn AI with AI. Built for beginner-friendly AI learning.</p>
      </div>
    </footer>
  )
}

export default Footer