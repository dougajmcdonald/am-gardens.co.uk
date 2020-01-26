import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import ServiceItem from "../components/service-item"

const ServicesPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero text="Professional results from a friendly personalised service." />
    <Body>
      <h1>Let me do the hard work</h1>
      <p>
        At the end of a long day the last thing on most peoples mind’s is
        pulling on their boots to spend a few hours toiling in the garden for
        mixed results. You should be enjoying your free time not working in it!
      </p>
      <p>
        I offer a full range of personalised services designed to produce
        professional results. Whether you have a grand vision you need help
        implementing, a one-off problem to solve, or want regular weekly,
        fortnightly or monthly visits. I can flexibly tailor the perfect
        solution.
      </p>
      <p>
        I provide free consultation, so if you want a professional opinion or
        are not sure exactly what you need then please get in touch to discuss
        your requirements on a friendly one to one basis.
      </p>
      <h2>Garden maintenance</h2>
      <ServiceItem>
        <h3>Grass Cutting</h3>
        <p>
          Often the first thing we notice when entering a garden is the lawn,
          and understandably many people take great pride in it. Allowing for
          the lawn to be cut regularly throughout the growing season keeps the
          lawn healthy and removes debris before it can accumulate, and also
          encourages the lawn to thicken by encouraging horizontal growth.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Lawn Care</h3>
        <p>
          A healthy lawn is about more than just regular cutting. Lawns must be
          fertilised to encourage growth. It is also important to scarify to
          remove moss and thatch from the base of the stems, as well as aerating
          the soil at the same time. After scarifying, it may also be necessary
          to top-dress the lawn to aid the repair of severely affected areas.
          Edging a lawn is also imperative to keep it looking neat and defining
          its perimeter.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Hedge Cutting and Topiary</h3>
        <p>
          It's easy for hedges to become overgrown, either through neglect or a
          fear of taking off too much at the wrong time. By allowing me to take
          this on for you, you can rest assured your hedges will be tidy all
          year round and we can restructure anything that has got out of hand
          and bring it back down to a manageable size.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Pruning</h3>
        <p>
          This is an aspect I take great pride in and a technique that I have
          directly transferred from work on my collection of bonsai trees.
          Accurate pruning and at the correct time of year helps the plant
          maintain healthy growth and structure, as well as often encouraging
          more blooms, and helping to irradicate diseased limbs.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Planting</h3>
        <p>
          As simple as this sounds, poorly planted plants inhibit growth more
          than anything else you might see with new stock. By allowing me to do
          this, we can pick the correct location for new plants and make sure
          its planted at the correct depth and with the correct nutrients and
          soil to give it a helping hand as it establishes itself in your
          garden.
        </p>
      </ServiceItem>
      <h2>Garden design</h2>
      <ServiceItem>
        <h3>Garden design and planning</h3>
        <p>
          Everybody deserves to have the garden of their dreams, but
          unfortunately few houses come with these pre-made. If you have grand
          plans or just want to repurpose a certain feature in your garden, we
          can work something to get the best from your garden for you. I can
          also create structured plans to get the best from your existing garden
          as well.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Soft landscaping</h3>
        <p>
          As peoples lives change whether it be due to new additions to the
          family or restricted mobility, or anything else for that matter, so
          can the requirements of their garden. Whether you need a new path
          added for easier access or more productive use of your space by adding
          raised beds to grow veg, or even a new pond to encourage wildlife, we
          can discuss your needs and create a solution to best fit.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Cultivation</h3>
        <p>
          Often buying new stock from garden centres can be an expensive game
          and does not offer the variety you may hope for. Where people want
          bespoke solutions I am happy growing from seed, from bedding plants to
          trees, as long as you are happy to wait a little longer, this can be
          an effective way to keep costs down and get the plants you desire.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Habitat Construction and Ecological Consideration</h3>
        <p>
          With Mother Nature struggling with our input, many of us are now
          trying to offer a helping hand in our gardens and this is an approach
          that I thoroughly encourage. Habitat construction such as log piles
          and specific insect habitats, as well as bird feeders and specific
          plant choices, can all help to encourage wildlife back into our
          gardens by creating safe havens and abundant food supplies. most of
          these environments can be created with existing sources in your garden
          and I will happily talk through any options with you.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Turfing and Seeding</h3>
        <p>
          When a new patch of grass is required, turfing is the obvious option
          and can create magnificent results in shorter periods. The only issue
          is the cost. Where cost is of concern, the next alternative is to seed
          from scratch or to repair areas. Of course, this takes longer to take,
          but the results can be just as beautiful. I can offer both and the
          aftercare to keep them in tip-top shape.
        </p>
      </ServiceItem>

      <h2>Garden clearing</h2>
      <ServiceItem>
        <h3>Weeding and Bed Preparation</h3>
        <p>
          Let's face it, weeding is the last thing most people want to do in
          their gardens, so why not let me take the strain. By keeping your beds
          weed-free it avoids the spread of unwanted growth and helps create
          space for your desired plants to grow into. Keeping the soil turned
          stops the soil from compacting too much and keeps it easy to work. At
          this stage mulching or adding manure to the soil can help to improve
          the quality of your soil giving a more fertile environment for your
          plants to thrive in.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Spraying</h3>
        <p>
          I have PA1 and PA6 spraying certification, which means that if you do
          choose to use chemicals in your garden, you can rest assured that they
          are being used safely and professionally without overuse or fear of
          contamination of other plants or water sources.
        </p>
      </ServiceItem>
      <ServiceItem>
        <h3>Green Waste Removal</h3>
        <p>
          Even if you simply have an excess of garden waste that you can't fit
          in your green bin. As a registered waste carrier, I can arrange to
          remove this for you for an agreed fee.
        </p>
      </ServiceItem>
    </Body>
  </Layout>
)

export default ServicesPage
