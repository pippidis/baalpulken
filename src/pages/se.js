import * as TXT from "../locals/sv.json"

// From here, copy paste to other languages
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import FrontLogo from "../components/front_logo"
import Trailer from "../components/trailer"
import Skates from "../components/features/skates"
import Windshield from "../components/features/windshield"
import Hooks from "../components/features/hooks"

import BackgroundImage from "../images/front_bilde.png"

const Page = () => {
  const txt = TXT
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      height: 500,
      backgroundPosition: 'center'
  }}>
    <Layout>
      <FrontLogo slogan={txt.slogan}/>
      

      <Trailer/>
      <Windshield title={txt.windshield.title} text_1={txt.windshield.text_1} text_2={txt.windshield.text_2} alt={txt.windshield.img_alt}/>
      <Skates title={txt.skates.title} text_1={txt.skates.text_1} text_2={txt.skates.text_2} alt={txt.skates.img_alt}/>
      <Hooks title={txt.hooks.title} text_1={txt.hooks.text_1} text_2={txt.hooks.text_2} alt={txt.hooks.img_alt}/>
      
    </Layout>
    </div>
  )
}


export const Head = () => <Seo title="Hem" />
export default Page