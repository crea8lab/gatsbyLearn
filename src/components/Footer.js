import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "../styles/components/footer.module.scss"

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
      created by {data.site.siteMetadata.author} &copy; 2019
    </footer>
  )
}

export default Footer
