import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <div className="logo">gatsbyLearnr</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
