import React from "react"
import { OneFeedbackBlock } from "../one-feedback-block"
import { storiesOf } from "@storybook/react"

storiesOf("One feedback block", module).add("One Feedback Block", () => (
  <div id="one-feedback-block">
    <OneFeedbackBlock />
  </div>
))
