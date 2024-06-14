import React from "react"
import { storiesOf } from "@storybook/react"
import { WhatWeDoBlock } from "../what-we-do-block"
import { Constants } from "./../../../constants"

storiesOf("What we do block", module).add("What we do block", () => (
  <div style={{ paddingTop: "100px" }}>
    <WhatWeDoBlock {...Constants.whatWeDoSection} />
  </div>
))
