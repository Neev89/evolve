import React from 'react'
import Link from 'gatsby-link'
import Logo from "../../images/ic_logo.svg"


const Header = () => (
  <header className="header">
    <div className="header__inner">
        <div className="header__logo">
            <Link className="site-logo" to="/">
                <img src={Logo} alt="Logo" />
            </Link>
        </div>
    </div>
  </header>
)

export default Header
