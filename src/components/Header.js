import React from "react"
import { Link } from "gatsby"

// import styles
import headerStyles from "../styles/components/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className="logo">
        <Link to="/" className={headerStyles.title}>
          Gatsby<span className={headerStyles.title__span}>Learn</span>
        </Link>
      </h1>

      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/docs"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/tutorials"
            >
              Tutorials
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
