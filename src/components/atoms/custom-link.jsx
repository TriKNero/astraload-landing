import { Link } from "gatsby"
import React from "react"
import { withStyles } from "@material-ui/core"

function CustomLink({ classes, to, children, isGatsbyLink }) {
  if (isGatsbyLink)
    return (
      <Link
        to={to}
        className={classes.link}
        activeClassName={classes.activeLinkStyle}
      >
        {children}
      </Link>
    )

  return (
    <a href={to} className={classes.link}>
      {children}
    </a>
  )
}

const styles = theme => ({
  link: {
    color: ({ linkColor }) =>
      linkColor ? linkColor : theme.palette.text.white,
    fontSize: "18px",
    fontFamily: "Europa, sans-serif",
    textDecoration: "none",
    fontWeight: "400",
    margin: "0 20px",
    opacity: "0.8",
    "&:hover": {
      opacity: "1",
    },
    "&:first-child": {
      margin: "0 20px 0 0",
    },
  },
  activeLinkStyle: {
    position: "relative",
    opacity: "1",
    "&:before": {
      content: "''",
      display: "inline-block",
      position: "absolute",
      bottom: "-1px",
      left: 0,
      width: "100%",
      height: "2px",
      background: "#ffab13",
    },
    "&:hover": {
      opacity: "1",
    },
  },
})

// eslint-disable-next-line
CustomLink = withStyles(styles)(CustomLink)

export { CustomLink }
