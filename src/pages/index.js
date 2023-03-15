import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import FrontLogo from "../components/front_logo"
import Trailer from "../components/trailer"
import Skates from "../components/features/skates"
import Windshield from "../components/features/windshied"
import Hooks from "../components/features/hooks"

import BackgroundImage from "../images/front_bilde.jpg"


const IndexPage = () => (
  <div style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    height: 500,
    backgroundPosition: 'center'
}}>
  <Layout>
    <FrontLogo slogan='Ikke bare sitt der'/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus lectus nisl, sit amet consectetur libero blandit vel. Morbi id quam at leo auctor egestas sit amet blandit est. Nulla porta gravida venenatis. Suspendisse at nisl congue, tempus dolor at, molestie erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tempus quis metus eget suscipit. Suspendisse lacinia hendrerit nunc quis egestas. Etiam suscipit iaculis luctus. Maecenas velit nulla, lobortis sit amet faucibus vitae, semper ut arcu. Nunc hendrerit dictum diam. Etiam sagittis, ipsum vitae laoreet pellentesque, odio massa tincidunt sapien, sed maximus diam nisl sit amet leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vulputate massa ac diam facilisis ullamcorper. Cras sit amet porttitor lacus. Aenean egestas tincidunt sagittis.


    <Trailer/>
    <Skates title='Laget for hastighet' text='Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper. Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.' alt='This is an image'/>
    <Windshield title='Laget for hastighet' text='Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper. Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.' alt='This is an image'/>
    <Hooks title='Laget for hastighet' text='Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper. Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.Det inoative vinskjoldet skjermer bålet mot vinden og sikrer gode aerodynamiske egenskaper.' alt='This is an image'/>
    
  </Layout>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
