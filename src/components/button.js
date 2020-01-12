import React from "react"
import { Link } from "gatsby"

const Button = ({ to, children }) => (
  <Link to={to}>
    <button className="bg-tertiary rounded text-white font-bold font-body text-center text-s md:text-base my-6 md:my-10 w-32 md:w-40 h-10 md:h-16 ">
      {children}
    </button>
  </Link>
)

export default Button
