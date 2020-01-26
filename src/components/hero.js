import React from "react"
import Image from "../components/image"

const Hero = ({ text }) => (
  <section className="bg-footer flex justify-center">
    <div className="w-1/2 flex flex-wrap md:justify-between py-6 md:py-8 h-auto">
      <div className="w-full flex items-center" style={{ marginLeft: `33.3%` }}>
        <h2 className="text-white align-middle inline-block font-bold text-l md:text-2xl md:mr-10 font-body mt-0 border-l-8 border-tertiary pl-4">
          {text}
        </h2>
      </div>
    </div>
    <div className="bg-tertiary w-1/2 h-full float-right">
      <Image />
    </div>
  </section>
)

export default Hero
