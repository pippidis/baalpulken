import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


import * as TXT_INDEX from "../locals/no.json"


import * as TXT from "../locals/press.json"

const txt_index = TXT_INDEX
const txt = TXT

const Press = () => (
  <Layout built_with={txt_index.built_with} press_link={txt_index.press_link}>
    <h1>{txt.header}</h1>
    <p>{txt.text_1}</p>
    
    <div className="press">
      <h2>Norsk</h2>
        <a href={txt.no.press_link} download>{txt.no.press_text}</a>{` `}
        <a href={txt.no.review_link} download>{txt.no.review_text}</a>{` `}
      <h2>English</h2>
        <a href={txt.en.press_link} download>{txt.en.press_text}</a>{` `}
        <a href={txt.en.review_link} download>{txt.en.review_text}</a>{` `}

      <h2>Images</h2>

    </div>




    <p> </p>
    <Link to="/">{txt.back_to_homepage}</Link>
  </Layout>
)

export const Head = () => <Seo title="Press information" />

export default Press
