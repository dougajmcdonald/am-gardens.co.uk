import React from "react"

import Button from "../components/button"

const Hero = ({ text, image, cta }) => (
  <section
    className="bg-cover bg-center"
    style={{ minHeight: `300px`, backgroundImage: `url("./garden-bar.png")` }}
  >
    <div
      className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between pt-6 md:pt-16"
      style={{}}
    >
      <div className="w-full md:w-1/2">
        <h2
          className="text-white font-bold text-l md:text-2xl md:mr-10 font-body mt-0 p-2"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.3)` }}
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
