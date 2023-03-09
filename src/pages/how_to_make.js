import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HowToMake = () => (
  <Layout>
    <h1>Hvordan lage en Bålpulk</h1>
    <p>Som du sikkert har fått med deg nå, så er hele bålpulken en dårlig ide som ble en 1. aprils narr. Ikke ta det feil, den funker som bare det, men vi har ingen planer om å komersialisere den per nå. Derfor eksisterer denne siden som lærer deg hvordan du bygger en selv :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default HowToMake
