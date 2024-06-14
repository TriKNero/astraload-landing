import React from "react"

import { storiesOf } from "@storybook/react"
import { Advantages } from "../advantages"

storiesOf("Advantages", module).add("Advantages", () => (
  <div style={{ paddingTop: "150px" }}>
    <Advantages />
  </div>
))
