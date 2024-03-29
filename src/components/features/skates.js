import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const img_path =  "../../images/skates.jpg"


const Feature = (props) => {
  const title = props.title
  const text_1 = props.text_1
  const text_2 = props.text_2
  const alt = props.alt

  return (
    <div className='feture_right'>
        <div className='feature_text_right'>
            <h2>{title}</h2>
            <p>{text_1}</p>
            <p>{text_2}</p>
        </div>
        <div className="feature_img">
            <StaticImage
                src={img_path}
                loading="eager"
                width={1300}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt={alt}
                />
        </div>

    </div>
  )
}

export default Feature