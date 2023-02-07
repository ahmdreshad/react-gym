import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { links } from '../data'
import Logo from '../../src/images/logo.png'
import './Navbar.css'

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false)

  function navHandler() {
    setIsNavShowing((prev) => !prev)
  }

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  onClick={navHandler}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <button className="nav__toggle-btn" onClick={navHandler}>
          {isNavShowing ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
