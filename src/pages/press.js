import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as TXT from "../locals/press.json"
const txt = TXT

const Press = () => (
  <Layout>
    <h1>{txt.header}</h1>
    <p>{txt.text_1}</p>
    
    
    
    <Link to="/">{txt.back_to_homepage}</Link>
  </Layout>
)

export const Head = () => <Seo title="Press information" />

export default Press
