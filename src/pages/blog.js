import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyles from "../styles/components/blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges.map(edge => {
    return (
      <li className={blogStyles.post}>
        <Link to={`/blog/${edge.node.fields.slug}`}>
          <h2>{edge.node.frontmatter.title} - </h2>
          <span>{edge.node.frontmatter.date}</span>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <h1>Blog Page</h1>

      <ol className={blogStyles.posts}>{posts}</ol>
    </Layout>
  )
}

export default Blog
