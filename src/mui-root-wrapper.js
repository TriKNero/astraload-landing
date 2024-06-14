import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./mui-theme"

const ThemeWrapper = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

export default ThemeWrapper
