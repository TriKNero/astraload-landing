import React from "react"

import { storiesOf } from "@storybook/react"
import { Footer } from "../footer"
import "./styles-for-footer-mock.css"
import { Constants } from "./../../../constants"

const { callToActionBlock } = Constants

storiesOf("Footer", module).add("Footer", () => (
  <Footer
    background="spaceBackgroundImage"
    callToActionBlockInfo={callToActionBlock}
  />
))
