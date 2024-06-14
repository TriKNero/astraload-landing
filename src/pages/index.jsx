import React from "react"
import Seo from "../components/seo"
import { WhatWeDoBlock } from "../components/moleculs/what-we-do-block"
import { OurDifferents } from "../components/moleculs/our-differents"

import { Advantages } from "../components/organism/advantages"
import { OneFeedbackBlock } from "../components/moleculs/one-feedback-block"
import { OurToolsSection } from "../components/organism/our-tools-section"
import { graphql, useStaticQuery } from "gatsby"
import { Constants } from "../constants"
import { Layout } from "../components/organism/layout"

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const { whatWeDoSection, callToActionBlock } = Constants
  return (
    <Layout
      background="spaceBackgroundImage"
      callToActionButton
      callToActionBlock={callToActionBlock}
      {...site.siteMetadata}
    >
      <Seo title="Astraload" />

      <main>
        <WhatWeDoBlock {...whatWeDoSection} />
        <OurDifferents />
        <Advantages />
        <OurToolsSection />
        <OneFeedbackBlock />
      </main>
    </Layout>
  )
}
export default IndexPage
