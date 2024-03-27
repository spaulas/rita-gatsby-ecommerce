import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const LogoLink = () => {
  return (
    <Link className="logo-link" to="/">
      <StaticImage
        src="../../../images/logo.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </Link>
  )
}

export default LogoLink
