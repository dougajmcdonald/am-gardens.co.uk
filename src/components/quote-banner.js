import React from "react"

import Button from "../components/button"

const Hero = ({ text, image }) => (
  <div className="w-4/5 md:w-2/3 mx-auto flex flex-wrap md:justify-between my-16">
    <div className="w-full md:w-1/2">
      <h2 className="text-secondary font-bold text-l md:text-xl md:mr-10 font-body mt-0">
        <span className="font-6xl">"</span>
        {text}
      </h2>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">{image}</div>
  </div>
)

export default Hero
