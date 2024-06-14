import React from "react"
import { Constants } from "../constants"
import Seo from "../components/seo"
import { WhatWeDoBlock } from "../components/moleculs/what-we-do-block"
import { DifferentFromCompetitorsSaas } from "../components/moleculs/different-from-competitors-saas"
import { SinglePageApplicationSupport } from "../components/moleculs/single-page-application-support"
import { IntelligentAssistantBlock } from "../components/moleculs/intelligent-assistant-block"
import { Layout } from "../components/organism/layout"

const IndexPage = () => {
  const {
    saasHeader,
    saasWhatItDoes,
    singlePageSupport,
    saasIntelligantAssiatant,
    callToActionBlock,
  } = Constants

  return (
    <Layout
      background="saasBG"
      renderButton={false}
      callToActionBlock={callToActionBlock}
      {...saasHeader}
      saas
    >
      <Seo title="SaaS" description={saasHeader.description} />
      <main>
        <WhatWeDoBlock {...saasWhatItDoes} saas />
        <DifferentFromCompetitorsSaas />
        <SinglePageApplicationSupport {...singlePageSupport} />
        <IntelligentAssistantBlock {...saasIntelligantAssiatant} />
      </main>
    </Layout>
  )
}
export default IndexPage
