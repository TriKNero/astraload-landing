import React from "react"

import { storiesOf } from "@storybook/react"
import { Header } from "../header"

storiesOf("Header", module).add("Header", () => (
  <Header
    background="spaceBackgroundImage"
    callToActionButton
    title={`Astraload perf team`}
    description={`Meet the crew who can scale your single page application
       to handle millions of monthly users.`}
  />
))
