import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/">
            <p>BAEKCHANGHYEON</p>
          </NavLink>
          <p>FRONTEND DEVELOPER</p>
        </div>
      </div>
    </header>
  )
}

export default Header
