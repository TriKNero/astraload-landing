import React from "react"
import { Constants } from "../../constants"

import { Header } from "../organism/header"
import { WhatWeDoBlock } from "../moleculs/what-we-do-block"
import { Footer } from "../organism/footer"
import { DifferentFromCompetitorsSaas } from "../moleculs/different-from-competitors-saas"
import { SinglePageApplicationSupport } from "../moleculs/single-page-application-support"
import { IntelligentAssistantBlock } from "../moleculs/intelligent-assistant-block"

import { storiesOf } from "@storybook/react"

const {
  saasHeader,
  saasWhatItDoes,
  saasCallToActionBlock,
  singlePageSupport,
  saasIntelligantAssiatant,
} = Constants

storiesOf("SaaS", module).add("SaaS", () => (
  <>
    <Header background="saasBG" renderButton={false} {...saasHeader} />
    <main>
      <WhatWeDoBlock {...saasWhatItDoes} />
      <DifferentFromCompetitorsSaas />
      <SinglePageApplicationSupport {...singlePageSupport} />
      <IntelligentAssistantBlock {...saasIntelligantAssiatant} />
    </main>
    <Footer
      background="saasBG"
      disabled={false}
      callToActionBlockInfo={saasCallToActionBlock}
    />
  </>
))
