import React, { useRef } from "react"
import { TitleWithDescriptionBlock } from "./title-with-description-block"
import { withStyles } from "@material-ui/core"
import useShouldAnimate from "../../hooks/useShouldAnimate"
import useScrollPosition from "../../hooks/useScrollPosition"

function WhatWeDoBlock({ classes, title, description }) {
  const scrollPosition = useScrollPosition()
  const sectionRef = useRef()
  const sectionPosition = sectionRef?.current?.offsetTop
  const shouldAnimate = useShouldAnimate(sectionPosition, scrollPosition)

  return (
    <div ref={sectionRef} className={classes.container}>
      <TitleWithDescriptionBlock
        title={title}
        description={description}
        shouldAnimate={shouldAnimate}
      />
    </div>
  )
}

const styles = theme => ({
  container: {
    height: "652px",
    backgroundColor: theme.palette.background.lightGray,
    clipPath: "polygon(0 0, 100% 0, 100% 47.5%, 0% 100%)",
    "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 47.5%, 0% 100%)",
    ...theme.defaultHorizonContainer,

    "& > div": {
      paddingTop: "70px",
    },
    [theme.breakpoints.down("md")]: {
      height: "570px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "500px",
      clipPath: ({ saas }) =>
        `polygon(0 0, 100% 0, 100% ${saas ? "100%" : "63%"}, 0% 100%)`,
      "-webkit-clip-path": ({ saas }) =>
        `polygon(0 0, 100% 0, 100% ${saas ? "100%" : "63%"}, 0% 100%)`,
    },
    [theme.breakpoints.down("xs")]: {
      height: "492px",
      clipPath: "polygon(0 0, 100% 0, 100% 84%, 0% 100%) !important",
      "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 84%, 0% 100%) !important",

      "& > div": {
        paddingTop: "91px",
      },
    },
  },
})

// eslint-disable-next-line
WhatWeDoBlock = withStyles(styles)(WhatWeDoBlock)

export { WhatWeDoBlock }
