import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"

import SEO from "../components/seo"
import HeroImg from "../svg/undraw_contactus.svg"
import PhoneIcon from "../svg/md-call.svg"
import EmailIcon from "../svg/md-mail.svg"
import Map from "../images/google-maps.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      text="We're on hand to answers your queries. Get in touch for a free quote."
      image={<HeroImg width="500px" height="300px" />}
      cta={{ to: "/contact-us", text: "Get a quote" }}
    />
    <Body>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you, whether it's a question about your
        needs, or a request for a quote.
      </p>
      <p>
        We will endeavour to get back to you within 48 hours though emails
        usually get answered sooner.
      </p>
      <h3>Contact info</h3>
      <a className="mt-4 inline-block" href="mailto:info@am-gardens.co.uk">
        <EmailIcon className="inline-block fill-current w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-10" />
        info@am-gardens.co.uk
      </a>
      <p class="text-tertiary mt-6">
        <PhoneIcon className="inline-block fill-current w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-10" />{" "}
        0898 505050 - Priest chat
      </p>
      <h3>Address</h3>
      <p className="mt-4 mb-0">6a Kellaway Avenue,</p>
      <p className="mt-0 mb-0">Bristol,</p>
      <p className="mt-0 mb-0">BS6 7XR</p>
      <h2>Where to find us</h2>
      <img alt="our location on google maps" src={Map} />
    </Body>
  </Layout>
)

export default IndexPage
