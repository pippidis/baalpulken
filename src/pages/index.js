import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import Trailer from "../components/trailer"
import Skates from "../components/features/skates"
import Windshield from "../components/features/windshied"
import Hooks from "../components/features/hooks"

const IndexPage = () => (
  <Layout>
    <Trailer/>
    <Skates title='Laget for hastighet' text='Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper. Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.' alt='This is an image'/>
    <Windshield title='Laget for hastighet' text='Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper. Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.' alt='This is an image'/>
    <Hooks title='Laget for hastighet' text='Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper. Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.' alt='This is an image'/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
