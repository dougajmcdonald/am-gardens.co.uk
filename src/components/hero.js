import React from "react"

const Hero = ({ text, image }) => (
  <section className="bg-footer md:flex justify-center">
    <div className="md:w-1/2 w-4/5 flex flex-wrap md:justify-between py-6 md:py-8 h-auto">
      <div className="w-full flex items-center hero-text">
        <h2 className="text-white align-middle inline-block text-l md:text-xl md:mr-10 font-body my-0 border-l-8 border-tertiary pl-4">
          {text}
        </h2>
      </div>
    </div>
    <div className="bg-tertiary md:w-1/2 w-full hidden md:block self-stretch">
      {image}
    </div>
  </section>
)

export default Hero
