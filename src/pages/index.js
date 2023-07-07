import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

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

export const Head = () => <Seo title="Home" />

export default IndexPage