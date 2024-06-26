import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { muiTheme } from "storybook-addon-material-ui"
import theme from "../src/mui-theme"
import "../src/css/main.css"
import "normalize.css/normalize.css"

addParameters({
  options: {
    isFullscreen: true,
    showPanel: false,
    isToolshown: false,
  },
})

addDecorator(muiTheme([theme]))

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
