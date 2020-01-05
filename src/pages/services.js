import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_outdoors.svg"

const ServicesPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      text="I offer a range of gardening services to allow you to enjoy your garden space, hassle free"
      image={<HeroImg width="500px" height="300px" />}
      cta={{ to: "/contact-us", text: "Get a quote" }}
    />
    <Body>
      <h1>Services</h1>
      <p>
        With a meticulous eye for detail, my appreciation for the aesthetic has
        developed into an established understanding of the spacial structuring
        of the garden and it's varying components. This allows clients to be
        confident in the precision of my work and thorough approach to a
        considered outcome for every situation.
      </p>
      <p>
        With personal interests ranging from ecological consideration to
        advanced bonsai techniques, I really can offer something for everyone
        and look forward to hearing from you
      </p>
      <h2>Garden maintenance</h2>
      <ul>
        <li>Grass cutting</li>
        <li>Lawn care</li>
        <li>Hedge cutting</li>
        <li>Pruning</li>
        <li>Planting</li>
      </ul>
      <h2>Garden design</h2>
      <ul>
        <li>Garden design and planning</li>
        <li>Soft landscaping</li>
        <li>Cultivation</li>
        <li>Habitat Construction</li>
        <li>Turfing</li>
      </ul>
      <h2>Garden clearing</h2>
      <ul>
        <li>Weeding</li>
        <li>Spraying (PA1 and PA6 certification)</li>
        <li>Green waste removal</li>
      </ul>
    </Body>
  </Layout>
)

export default ServicesPage
