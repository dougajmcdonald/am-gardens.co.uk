import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"

import SEO from "../components/seo"
import PhoneIcon from "../svg/md-call.svg"
import EmailIcon from "../svg/md-mail.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      text="We're on hand to answers your queries. Get in touch for a free quote."
      cta={{ to: "/contact-us", text: "Get a quote" }}
    />
    <Body>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you, whether it's a question about your
        needs, or a request for a quote.
      </p>
      <h3>Contact info</h3>

      <div itemscope itemtype="http://schema.org/LocalBusiness">
        <h1 itemprop="name">AM Gardens</h1>
        <span class="mt-6 text-tertiary block" itemprop="telephone">
          <a href="tel:07423 754535">
            {" "}
            <PhoneIcon className="inline-block fill-current w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-6" />
            07423 754535
          </a>
        </span>
        <a
          className="mt-4 inline-block text-tertiary"
          href="mailto:info@am-gardens.co.uk"
        >
          <EmailIcon className="inline-block fill-current w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-6" />
          info@am-gardens.co.uk
        </a>
      </div>

      <h3>Address</h3>
      <p className="mt-4 mb-0">6a Kellaway Avenue,</p>
      <p className="mt-0 mb-0">Bristol,</p>
      <p className="mt-0 mb-0">BS6 7XR</p>
    </Body>
  </Layout>
)

export default IndexPage
