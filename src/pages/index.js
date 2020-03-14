import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import QuoteBanner from "../components/quote-banner"
import Body from "../components/body"
import SEO from "../components/seo"
// import QuoteImg from "../images/ali.png"
import ServiceList from "../components/service-list"
import CTABanner from "../components/cta-banner"
import QuoteImage from "../components/ali-image"
import HeroImage from "../components/index-hero-image"

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  // const posts = edges
  //   .filter(
  //     edge =>
  //       !!edge.node.frontmatter.date && edge.node.frontmatter.draft === false
  //   )
  //   .map(edge => <BlogListing key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        text="Tailored, professional and affordable garden care and maintenance."
        image={<HeroImage />}
      />
      <CTABanner>
        Call{" "}
        <a href="tel:07423 754535" className="font-bold">
          07423 754535
        </a>{" "}
        to arrange a consultation
      </CTABanner>
      <Body>
        <h1>Welcome</h1>
        <p>
          Your garden should be a space tailored and maintained for your
          enjoyment. But finding the time, skills and patience to nurture it can
          create more stress than happiness! A.M Gardens was established to
          remove the hassle from creating and managing a garden.
        </p>
        <p>
          I’m Alistair, and whether you need occasional weeding, lawn care,
          expert pruning, want to convert a wilderness into a utopia or require
          help with plant cultivation and wildlife habitat creation. Small or
          large scale. I can tailor an affordable service for you.
        </p>
        <p className="font-bold">
          My goal is to ensure you spend your time enjoying your outdoor space,
          instead of working in it.
        </p>
      </Body>
      <QuoteBanner
        text="Ecological considerations and habitat construction are things which I pride myself on
        and I would always encourage others to consider in their own space"
        image={<QuoteImage />}
      />
      <Body>
        <p>
          Find out more about me on the <Link to="/about">About</Link> page and
          visit <Link to="/services">Services</Link> for more detail on what I
          can offer
        </p>
        <ServiceList />
      </Body>
      {/* <Body>
        <h2 className="mt-6">Recent work</h2>
        {posts}
      </Body> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            draft
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 220, webpQuality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
