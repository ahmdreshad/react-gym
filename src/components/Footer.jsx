import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            quidem veniam. Nihil sapiente placeat beatae numquam, magnam
            accusantium rem fugiat.
          </p>
          <div className="footer__icons">
            <Link to="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </Link>
            <Link to="https://facebook.com" target="_blank">
              <FaFacebook />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <FaInstagram />
            </Link>
            <Link to="https://twitter.com" target="_blank">
              <FaTwitter />
            </Link>
          </div>
        </article>
        <article className="links">
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article className="links">
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article className="links">
          <h4>Get in Touch</h4>
          <Link to="/contact">Contact us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Copyright at &copy; MrReact, All Rights Reserved</small>
      </div>
    </footer>
  )
}
export default Footer
