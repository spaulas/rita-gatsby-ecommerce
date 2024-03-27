import React from "react"
import "./styles.scss"
import { Link } from "gatsby"
import LogoLink from "../common/LogoLink"

const NavigationBar = () => {
  return (
    <header id="header" className="site-header header-style-1">
      <nav className="navigation navbar navbar-default">
        <div
          id="navbar"
          className="navbar-collapse collapse navigation-holder "
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to="/paintings" activeClassName="current-menu-item">
                Paintings
              </Link>
            </li>

            <LogoLink />
            <li>
              <Link to="/nails" activeClassName="current-menu-item">
                Nails
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar
