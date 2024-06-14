import React from "react"
import { storiesOf } from "@storybook/react"
import { SinglePageApplicationSupport } from "../single-page-application-support"
import { Constants } from "./../../../constants"

storiesOf("Single page application support", module).add(
  "Single page application support",
  () => <SinglePageApplicationSupport {...Constants.singlePageSupport} />
)
