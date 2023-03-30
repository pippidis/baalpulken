import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"


import * as TXT_INDEX from "../locals/no.json"


import * as TXT from "../locals/press.json"

const txt_index = TXT_INDEX
const txt = TXT

const Press = () => (
  <Layout built_with={txt_index.built_with} press_link={txt_index.press_link}>
    
    <div className="press">       
      <h1>{txt.header}</h1>
      <p>{txt.text_1} <a href={txt.onedrive_link} download>{txt.onedrive_text}</a>{` `}</p>

      

      <h2>Norsk</h2>
        <a href={txt.no.press_link} download>{txt.no.press_text}</a>{` `}
        <a href={txt.no.review_link} download>{txt.no.review_text}</a>{` `}
      <h2>English</h2>
        <a href={txt.en.press_link} download>{txt.en.press_text}</a>{` `}
        <a href={txt.en.review_link} download>{txt.en.review_text}</a>{` `}

      <h2>Media</h2>
      <a href={txt.media.product_link} download>{txt.media.product_text}</a>{` `}
      <a href={txt.media.instagram_link} download>{txt.media.instagram_text}</a>{` `}
      <a href={txt.media.video_link} download>{txt.media.video_text}</a>{` `}

      <p> </p>
      <StaticImage
                src="../images/using_baalpulken.jpg"
                loading="eager"
                width={1300}
                quality={100}
                formats={["auto", "jpg"]}
                alt="Picture of girls using Bålpulken"
                />

      <p> </p>
      <Link to="/">{txt.back_to_homepage}</Link>
    </div>




    
    <footer className="footer">
          <div className="footer_left">
            © {new Date().getFullYear()} &middot; {txt_index.built_with}
          </div>
          <div className="footer_right">
          </div>
        </footer>
  </Layout>
)

export const Head = () => <Seo title="Press information" />

export default Press
