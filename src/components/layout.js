/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import * as TXT from "../locals/no.json"

const Layout = ({ children, built_with, press_link}) => {
  const txt = TXT
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          justifyContent: 'center',
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          <div className="footer_left">
            © {new Date().getFullYear()} &middot; {built_with}
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
          <div className="footer_right">
            <Link to="/press"> {press_link}</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
