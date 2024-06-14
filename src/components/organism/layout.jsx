import React from "react"
import { Header } from "../organism/header"
import { Footer } from "../organism/footer"

const Layout = props => {
  const {
    callToActionButton,
    background,
    callToActionBlock,
    children,
    title,
    description,
    saas = false,
  } = props

  return (
    <>
      <Header
        background={background}
        callToActionButton={callToActionButton}
        title={title}
        description={description}
        saas={saas}
      />
      {children}
      <Footer
        background={background}
        callToActionBlockInfo={callToActionBlock}
      />
    </>
  )
}
export { Layout }
