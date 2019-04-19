import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"

import blogStyles from "../styles/components/blog.module.scss"

const Blog = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               date
  //             }
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  const contentfulBlogPost = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `)

  const sourcedPost = contentfulBlogPost.allContentfulBlogPost.edges.map(
    edge => {
      return (
        <li className={blogStyles.post}>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2>{edge.node.title} - </h2>
            <span>{edge.node.publishedDate}</span>
          </Link>
        </li>
      )
    }
  )

  // const posts = data.allMarkdownRemark.edges.map(edge => {
  //   return (
  //     <li className={blogStyles.post}>
  //       <Link to={`/blog/${edge.node.fields.slug}`}>
  //         <h2>{edge.node.frontmatter.title} - </h2>
  //         <span>{edge.node.frontmatter.date}</span>
  //       </Link>
  //     </li>
  //   )
  // })

  return (
    <Layout>
      <h1>Blog Page</h1>

      {/* <ol className={blogStyles.posts}>{posts}</ol> */}
      <ol className={blogStyles.posts}>{sourcedPost}</ol>
    </Layout>
  )
}

export default Blog
