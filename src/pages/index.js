import * as TXT from "../locals/no.json"

// From here, copy paste to other languages
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

import FrontLogo from "../components/front_logo"
import FrontText from "../components/front_text"
import Trailer from "../components/trailer"
import Skates from "../components/features/skates"
import Windshield from "../components/features/windshield"
import Hooks from "../components/features/hooks"

import ContactForm from "../components/contact_form"

import BackgroundImage from "../images/front_bilde.png"

const Page = () => {
  const txt = TXT
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      maxHeight: 'var(--front-picture_height)',
      backgroundPosition: 'center'
  }}>
    <Layout built_with={txt.built_with} press_link={txt.press_link}>
      <FrontLogo slogan={txt.slogan}/>
      <div className="index_offset">
        <FrontText text_1={txt.index.text_1} text_2={txt.index.text_2}/>
        <Trailer/>
        <Windshield title={txt.windshield.title} text_1={txt.windshield.text_1} text_2={txt.windshield.text_2} alt={txt.windshield.img_alt}/>
        <Skates title={txt.skates.title} text_1={txt.skates.text_1} text_2={txt.skates.text_2} alt={txt.skates.img_alt}/>
        <Hooks title={txt.hooks.title} text_1={txt.hooks.text_1} text_2={txt.hooks.text_2} alt={txt.hooks.img_alt}/>
        <ContactForm title={txt.contact_form.title} text={txt.contact_form.text} name={txt.contact_form.name}  email={txt.contact_form.email}  comment={txt.contact_form.comment}  submit={txt.contact_form.submit} />
        <footer className="footer">
          <div className="footer_left">
            © {new Date().getFullYear()} &middot; {txt.built_with}
          </div>
          <div className="footer_right">
            <Link to="/press"> {txt.press_link}</Link>
          </div>
        </footer>
      </div>
    </Layout>
    </div>
  )
}


export const Head = () => <Seo title="Hjem" />
export default Page
