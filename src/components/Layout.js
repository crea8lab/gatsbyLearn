import React from "react"

// Import components
import Header from "./Header"
import Footer from "./Footer"

// Import styles
import "../styles/index.scss"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container__main}>
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.container}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
