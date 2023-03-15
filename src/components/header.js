import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-3) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }}
  >
    <Link to="/" style={{fontSize: `var(--font-sm)`, textDecoration: `none` }}>
      <StaticImage
        alt="Bålpulken logo"
        height={30}
        style={{ margin: 0 }}
        src="../images/line_logo.png"/>
    </Link>

    <div className="flags">
      <Link to="/404">
        <span class="flag-icon flag-active fi fi-no"/>
      </Link>
      <Link to="/404">
      <span class="flag-icon fi fi-se"/>
      </Link>
      <Link to="/404">
      <span class="flag-icon fi fi-us"/>
      </Link>
    </div>
  </header>
)

export default Header
