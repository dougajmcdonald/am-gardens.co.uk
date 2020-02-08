import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import GardenImage2 from "../components/garden-image-2"
import GardenImage from "../components/garden-image"
import CTABanner from "../components/cta-banner"
import HeroImage from "../components/index-hero-image2"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      text="Over ten years of experience creating gardens across Southern Britain."
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
      <h1>About me</h1>
      <p>
        I have over ten years of practical experience working in gardens across
        the south of England, from Bristol, Bath, and Wiltshire, to London and
        Surrey.
      </p>
      <p>
        From expansive, modern gardens of professional footballers to small
        inner-city sanctuaries and large scale commercial sites, I have worked
        to the highest standards for clients who expect the best.
      </p>
      <p>And now I want to work with you!</p>
      <p>
        Based in Bristol, I offer a friendly, positive and personal service with
        a commitment to satisfaction whatever the scale and nature of the work.
      </p>
      <p className="font-bold">
        Please get in touch to find out how I can bring my passion for
        horticultural to your outdoor spaces.
      </p>
      <GardenImage />
      <GardenImage2 />
    </Body>
  </Layout>
)

export default AboutPage
