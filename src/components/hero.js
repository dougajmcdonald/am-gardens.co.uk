import React from "react"

import Button from "../components/button"

const Hero = ({ text, image, cta }) => (
  <section
    className="bg-cover bg-top"
    style={{
      minHeight: `200px`,
      backgroundImage: `url("./garden-bar.png")`
    }}
  >
    <div
      className="w-full mx-auto flex flex-wrap md:justify-between pt-6 md:pt-16 h-auto"
      style={{ backgroundColor: `rgba(0, 0, 0, 0.375)` }}
    >
      <div className="w-4/5 md:w-2/3 mx-auto">
        <h2
          className="text-white font-bold text-l md:text-2xl md:mr-10 font-body mt-0 md:w-1/2 mb-6 md:mb-10"
          style={{}}
        >
          {text}
        </h2>
        {cta && <Button to={cta.to}>{cta.text}</Button>}
      </div>
      {/* <div
        className="w-full md:w-1/2 flex justify-center"
        style={{ minHeight: `200px`, minWidth: `200px` }}
      >
        {image}
      </div> */}
    </div>
  </section>
)

export default Hero
