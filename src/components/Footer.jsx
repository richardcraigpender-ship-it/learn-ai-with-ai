import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="footer">
  <div class="footer-grid">
    <div class="footer-section">
      <h4>About</h4>
      <a href="#">Our Story</a>
      <a href="#">Team</a>
    </div>
    <div class="footer-section">
      <h4>Resources</h4>
      <a href="#">Docs</a>
      <a href="#">Blog</a>
    </div>
    <div class="footer-section">
      <h4>Community</h4>
      <a href="#">Forum</a>
      <a href="#">Events</a>
    </div>
    <div class="footer-section">
      <h4>Contact</h4>
      <a href="#">Email</a>
      <a href="#">Support</a>
    </div>
  </div>
</footer>
  )
}

export default Footer