import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"
import CTABanner from "../components/cta-banner"

import SEO from "../components/seo"
import PhoneIcon from "../svg/md-call.svg"
import EmailIcon from "../svg/md-mail.svg"
import HeroImage from "../components/index-hero-image3"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero
      text="I'm on hand to answers your queries. Get in touch for a consultation."
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
      <h1>Contact Us</h1>
      <p>
        I provide free consultation, so if you want a professional opinion or
        are not sure exactly what you need then please get in touch to discuss
        your requirements on a friendly one to one basis.
      </p>
      <div itemscope itemtype="http://schema.org/LocalBusiness">
        <h2 itemprop="name">AM Gardens</h2>
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
    </Body>
  </Layout>
)

export default IndexPage
