import React from "react"

import Button from "../components/button"

const Hero = ({ text, cta }) => (
  <section
    className="bg-cover bg-top"
    style={{
      backgroundImage: `url("./garden-bar.png")`
    }}
  >
    <div
      className="w-full mx-auto flex flex-wrap md:justify-between py-6 md:py-16 h-auto"
      style={{ backgroundColor: `rgba(0, 0, 0, 0.4)` }}
    >
      <div className="w-4/5 md:w-2/3 mx-auto">
        <h2
          className="text-white font-bold text-l md:text-2xl md:mr-10 font-body mt-0 md:w-1/2"
          style={{}}
        >
          {text}
        </h2>
        {cta && <Button to={cta.to}>{cta.text}</Button>}
      </div>
    </div>
  </section>
)

export default Hero
