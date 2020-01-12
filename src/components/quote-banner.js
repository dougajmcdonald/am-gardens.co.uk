import React from "react"

import Button from "../components/button"

const Hero = ({ text, image }) => (
  <div className="w-4/5 md:w-2/3 mx-auto flex md:justify-start flex-wrap md:flex-no-wrap my-16">
    <div >{image}</div>
    <div className="w-full md:w-1/2">
      <h2 className="text-secondary font-semibold text-l md:text-xl md:mx-10 font-body mt-0">
        <span className="font-6xl">"</span>
        {text}
        <span className="font-6xl">"</span>
      </h2>
    </div>
  </div>
)

export default Hero
