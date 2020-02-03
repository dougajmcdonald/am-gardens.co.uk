import React from "react"

const Hero = ({ text, image }) => (
  <div className="w-4/5 md:w-2/3 mx-auto flex md:justify-start flex-wrap md:flex-no-wrap my-8 md:my-16">
    <div className="h-full">{image}</div>
    <div className="w-full md:w-1/2 mt-4 md:mt-0">
      <h2 className="text-secondary font-normal text-l italic md:text-l lg:text-xl md:mx-10 font-body mt-0 border-tertiary border-l-8 pl-4">
        <span className="font-6xl">"</span>
        {text}
        <span className="font-6xl">"</span>
      </h2>
    </div>
  </div>
)

export default Hero
