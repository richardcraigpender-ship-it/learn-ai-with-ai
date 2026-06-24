import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <Link to="#" className="footer-link">About</Link>
        <Link to="#" className="footer-link">Resources</Link>
        <Link to="#" className="footer-link">Community</Link>
        <Link to="#" className="footer-link">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;