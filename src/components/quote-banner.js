import React from "react"

const QuoteBanner = ({ text, image }) => (
  <div className="w-4/5 md:w-2/3 mx-auto flex md:justify-start flex-wrap my-4 md:my-8">
    <div className="w-full md:w-2/3">{image}</div>
    <div className="w-full md:w-2/3 mt-4">
      <h2 className="text-secondary font-normal mt-0 italic text-l md:text-l lg:text-xl font-body border-tertiary border-l-8 pl-4">
        <span className="font-6xl">"</span>
        {text}
        <span className="font-6xl">"</span>
      </h2>
    </div>
  </div>
)

export default QuoteBanner
