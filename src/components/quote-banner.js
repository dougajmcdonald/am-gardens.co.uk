import React from "react"

const Hero = ({ text, image }) => (
  <div className="w-4/5 md:w-2/3 mx-auto flex md:justify-start flex-wrap md:flex-no-wrap my-8 md:my-16">
    <div className="h-full">{image}</div>
    <div className="w-full md:w-2/3 mt-4 md:mt-0" style={{ height: `300px` }}>
      <h2
        className="text-secondary h-full font-normal italic text-l md:text-l lg:text-xl md:mx-10 font-body mt-0 border-tertiary border-l-8 pl-4"
        style={{ maxHeight: `300px` }}
      >
        <span className="font-6xl">"</span>
        {text}
        <span className="font-6xl">"</span>
      </h2>
    </div>
  </div>
)

export default Hero
