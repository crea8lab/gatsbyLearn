import React from "react"

// Import components
import Header from "./Header"
import Footer from "./Footer"

// Import styles
import "../styles/index.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
