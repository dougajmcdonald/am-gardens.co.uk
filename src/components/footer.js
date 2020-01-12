import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const pages = [
    {
      route: `/`,
      text: `Home`
    },
    {
      route: `/services`,
      text: `Services`
    },
    {
      route: `/about`,
      text: `About`
    },
    {
      route: `/contact-us`,
      text: `Contact Us`
    }
  ]
  return (
    <footer className="font-body flex mt-24 bg-footer">
      <div className="w-4/5 md:w-2/3 mx-auto text-white flex flex-column justify-start flex-wrap py-16">
        <nav className="flex-1">
          <ul>
            {pages.map(page => (
              <li className="text-white">
                <Link to={page.route}>{page.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1">
          <p className="mt-4 mb-0 text-white">6a Kellaway Avenue,</p>
          <p className="mt-0 mb-0 text-white">Bristol,</p>
          <p className="mt-0 mb-0 text-white">BS6 7XR</p>
        </div>
        <div className="flex-1">
          <p className="text-white">{siteTitle}</p>
          <p className="text-white mt-8">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
