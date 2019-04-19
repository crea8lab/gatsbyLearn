import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 Error Page" />
      <h2>This page does not exist</h2>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
