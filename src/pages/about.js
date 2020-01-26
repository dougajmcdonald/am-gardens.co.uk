import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import GardenImage2 from "../components/garden-image-2"
import AliImage from "../components/ali-image"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero text="Over ten years experience creating gardens across southern Britain." />
    <Body>
      <h1>About me</h1>
      <p>
        I have over ten years of practical experience working in gardens across
        the south of the England, Bristol and Bath. Wales and Wiltshire. London
        and Surrey.
      </p>
      <p>
        From expansive, modern gardens of professional footballers to small
        inner city sanctuaries and large scale commercial sites, I have worked
        to the highest standards for clients who expect the best.
      </p>
      <p>And now I want to work with you!</p>
      <p>
        Based in Bristol, I offer a friendly positive and personal service with
        a commitment to satisfaction whatever the scale and nature of the work.
      </p>
      <p>
        I love to get out in nature as much as possible and cultivate bonsai in
        my spare time.
      </p>
      <p className="font-bold">
        Please get in touch to find out how I can bring my passion for
        horticultural to your outdoor spaces.
      </p>
      <GardenImage2 />
      <AliImage />
    </Body>
  </Layout>
)

export default AboutPage
