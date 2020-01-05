import React from "react"

import Button from "../components/button"

const Hero = ({ text, image }) => (
  <section className="bg-primary mt-16 mb-10 py-6 md:py-10">
    <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between">
      <div className="w-full md:w-1/2">
        <h2 className="text-white text-l md:text-xl md:mr-10 font-body mt-0">
          <span className="font-6xl">"</span> {text}
        </h2>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">{image}</div>
    </div>
  </section>
)

export default Hero
