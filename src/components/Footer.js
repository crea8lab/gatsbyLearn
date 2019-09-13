import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import footerStyles from "../styles/components/footer.module.scss"
import headerStyles from "../styles/components/header.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.top}>
        <aside className={footerStyles.logo}>
          <h1>
            <Link to="/" className={headerStyles.title}>
              Gatsby<span className={headerStyles.title__span}>Learn</span>
            </Link>
          </h1>
        </aside>
        <aside className={footerStyles.newsLetter}>
          <h2>Newsletter Subscription</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
          />
        </aside>
      </div>

      <div className={footerStyles.metaData}>
        created by {data.site.siteMetadata.author} &copy; 2019
      </div>
    </footer>
  )
}

export default Footer
