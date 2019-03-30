import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { } from "styled-components"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "none",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#28587B`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <button>add post</button>
    </div>
    <hr />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
