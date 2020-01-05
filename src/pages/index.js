import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"
import SEO from "../components/seo"
import BlogListing from "../components/blog-listing"
import HeroImg from "../svg/undraw_gardening.svg"

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const posts = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date && edge.node.frontmatter.draft === false
    )
    .map(edge => <BlogListing key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        text="Professional, reliable gardening services "
        image={<HeroImg width="500px" height="300px" />}
        cta={{ to: "/services", text: "Find out more" }}
      />
      <Body>
        <h1>Welcome</h1>
        <p>
          With a meticulous eye for detail, my appreciation for the aesthetic
          has developed into an established understanding of the spacial
          structuring of the garden and it's varying components.
        </p>
        <p>
          This allows clients to be confident in the precision of my work and
          thorough approach to a considered outcome for every situation. With
          personal interests ranging from ecological consideration to advanced
          bonsai techniques, I really can offer something for everyone and look
          forward to hearing from you
        </p>
        {/* <h2 className="mt-6">Recent work</h2>
        {posts} */}
      </Body>
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
