import React, { useState } from 'react'
import headerNav from '../assets/data/header-nav.json'

const Header = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow)
  }

  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <div className="header-logo">
          <a href="/">
            BAEKCHANGHYEON'S<em>Portfolio</em>
          </a>
        </div>
        <nav
          className={`header-nav ${show ? 'show' : ''}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="header-nav-mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? 'true' : 'false'}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
