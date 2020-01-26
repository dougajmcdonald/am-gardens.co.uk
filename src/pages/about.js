import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero text="Over ten years practical experience working in gardens across the south of England, from Bristol, Bath and Wiltshire." />
    <Body>
      <h1>About</h1>
      <p>
        I have over ten years practical experience working in gardens across the
        south of England, from Bristol, Bath and Wiltshire and as far afield as
        London and Surrey.
      </p>
      <p>
        With vast experience operating in private residential gardens (including
        those of Premier League footballers), I have worked to the highest
        standards for clients who expect the best.
      </p>
      <p>
        I confidently work on large scale gardens and am happy to create work
        plans that not only fit the seasons, but also the your requirements.
      </p>
      <p>
        I'm also experienced running large scale commercial sites around
        deadlines and developments, whilst liaising with management structuring.
        An ability to prioritise when time is tight whilst still working to the
        highest standard is second nature to the way I work.
      </p>
      <p>I hold the following professional certifications</p>
      <ul>
        <li>PA1 and PA6 certification</li>
      </ul>
    </Body>
  </Layout>
)

export default AboutPage
