import { Link } from "gatsby"
import React from "react"
import { withStyles } from "@material-ui/core"

function DrawerLink({ classes, to, children, isGatsbyLink }) {
  if (isGatsbyLink)
    return (
      <div className={classes.drawerLinkContainer}>
        <Link
          to={to}
          className={classes.link}
          activeClassName={classes.activeLinkStyle}
        >
          {children}
        </Link>
      </div>
    )

  return (
    <div className={classes.drawerLinkContainer}>
      <a
        href={to}
        className={classes.link}
        activeClassName={classes.activeLinkStyle}
      >
        {children}
      </a>
    </div>
  )
}

const styles = theme => ({
  link: {
    color: theme.palette.text.white,
    fontSize: "15px",
    textDecoration: "none",
    fontWeight: "400",
    marginBottom: "20px",
  },
  drawerLinkContainer: {
    marginBottom: "20px",
  },
  activeLinkStyle: {
    position: "relative",
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
  },
})

// eslint-disable-next-line
DrawerLink = withStyles(styles)(DrawerLink)

export { DrawerLink }
