import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page With Picture">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Cows in the paddock"
        src="../images/cows.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage