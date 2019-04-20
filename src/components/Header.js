import React from "react"
import { Link } from "gatsby"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"

// import styles
import headerStyles from "../styles/components/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Gatsby<span className={headerStyles.title__span}>Learn</span>
        </Link>
      </h1>

      <nav>
        <div className={headerStyles.xs__nav}>
          <div className={headerStyles.menu__cover}>
            <Icon
              path={mdiMenu}
              size={1.5}
              horizontal
              vertical
              className={headerStyles.menu}
              color="grey"
              onClick={() => alert("Hi there")} /* TODO */
            />
          </div>
        </div>
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
