import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FrontImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "front_bilde.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="image-with-text">
      <div className="image-with-text__image">
        <div className=".full-width-image-container">
        <Img fluid={data.image.childImageSharp.fluid} style={{ width: '100%' }} alt="My Image" />
        </div>
      </div>
      <div className="image-with-text__content">
        <h2>My Heading</h2>
        <p>Some text about the image goes here.</p>
      </div>
    </div>
  )
}

export default FrontImage