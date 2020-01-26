import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import FacebookLogo from "../svg/logo-facebook.svg"
import InstagramLogo from "../svg/logo-instagram.svg"

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
        <div className="flex-1 mr-4">
          <p className="text-white font-bold text-base md:text-l">
            {siteTitle}
          </p>
          <p className="mt-4 mb-0 text-white">6a Kellaway Avenue,</p>
          <p className="mt-0 mb-0 text-white">Bristol,</p>
          <p className="mt-0 mb-0 text-white">BS6 7XR</p>
          <p className="text-white mt-8">© {new Date().getFullYear()}</p>
        </div>
        <nav className="flex-1 mr-4">
          <p className="text-white font-bold">Site map</p>
          <ul className="m-0">
            {pages.map(page => (
              <li className="text-white m-0">
                <Link to={page.route} className="pt-s">
                  {page.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 mr-4 text-white">
          <p className="text-white font-bold">Follow us</p>
          <a
            href="https://www.facebook.com/amgardensbristol"
            className="inline-block md:w-full my-2"
          >
            <FacebookLogo className="fill-current w-6 h-6 inline-block mr-4" />
            <span className="hidden md:inline-block">AM Gardens</span>
          </a>
          <a
            href="https://www.instagram.com/am-gardens"
            className="inline-block md:w-full my-2"
          >
            <InstagramLogo className="fill-current w-6 h-6 inline-block mr-4" />
            <span className="hidden md:inline-block">@AM Gardens</span>
          </a>
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
