import React from "react"

const CTABanner = ({ children }) => (
  <div className="bg-tertiary w-full text-white py-2">
    <span className="cta-text">{children}</span>
  </div>
)

export default CTABanner
