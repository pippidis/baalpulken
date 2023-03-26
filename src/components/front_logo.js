import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Feature = (props) => {
    const slogan = props.slogan
    const alt = props.alt
  
    return (
        <div className="front_logo_wrapper">
            <div className="front_logo_img">
                <StaticImage
                    src="../images/main_logo.png"
                    loading="eager"
                    height={300}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt={alt}
                    style={{ marginBottom: `var(--space-1)` }}
                    />
            <div className="front_logo_text">{slogan}</div>
            <div style={{height: 100 }}/> 
        </div>
        </div>
    )
  }
  
export default Feature