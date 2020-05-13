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
      route: `/contact`,
      text: `Contact`
    }
  ]
  return (
    <footer className="font-body flex mt-24 bg-footer">
      <div className="w-4/5 md:w-2/3 mx-auto text-white flex flex-column justify-start flex-wrap py-16">
        <div className="flex-1 mr-4">
          <p className="text-white font-bold text-base">{siteTitle}</p>
          <p className="text-white">© {new Date().getFullYear()}</p>
        </div>
        <nav className="flex-1 mr-4">
          <p className="text-white font-bold">Site map</p>
          <ul className="m-0">
            {pages.map(page => (
              <li key={page.route} className="text-white m-0">
                <Link to={page.route} className="pt-s">
                  {page.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-1 mr-4 text-white">
          <p className="text-white font-bold">Follow</p>
          <a
            href="https://www.facebook.com/amgardensbristol"
            className="inline-block md:w-full"
          >
            <FacebookLogo className="fill-current w-6 h-6 inline-block mr-4" />
            <span className="hidden md:inline-block">AM Gardens</span>
          </a>
          <a
            href="https://www.instagram.com/am_gardensbristol"
            className="inline-block md:w-full"
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
