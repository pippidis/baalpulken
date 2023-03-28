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
    
    <div className="press">
      <h2>Norsk</h2>
    <a href="https://docs.google.com/document/d/1gBjc1oypYtqLaP8T0fplWbPfg7Erclv5/edit?usp=share_link&ouid=112273596005722745529&rtpof=true&sd=true" download>Download the directly imported file</a>{` `}

      <h2>English</h2>
    
    </div>
    <Link to="/">{txt.back_to_homepage}</Link>
  </Layout>
)

export const Head = () => <Seo title="Press information" />

export default Press
