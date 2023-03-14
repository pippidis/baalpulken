import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Feature = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "front_bilde.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>My Component</h1>
      <Img fluid={data.myImage.childImageSharp.fluid} alt="My Image" />
    </div>
  )
}

export default Feature