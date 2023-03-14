import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Feature = (props) => {
  const title = props.title
  const text = props.text
  const alt = props.alt

  return (
    <div className='feature'>
        <div>
            <StaticImage
                src="../../images/skates.jpg"
                loading="eager"
                width={1300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt={alt}
                style={{ marginBottom: `var(--space-3)` }}
                />
        </div>
        <div className='feature_text'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature