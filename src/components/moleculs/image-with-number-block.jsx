import React from "react"
import { withStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { PerformanceImage } from "../atoms/performance-image"
import Typography from "@material-ui/core/Typography"
import { Constants } from "../../constants"

function ImageWithNumberBlock({ classes }) {
  const { performanceImage } = Constants
  const renderImages = performanceImage.map(renderImage)
  return (
    <Grid
      container
      spacing={4}
    >
      {renderImages}
    </Grid>
  )

  function renderImage(item, index) {
    const { title, description } = item
    return (
      <Grid
        item
        xs={12}
        sm={4}
        key={index}
        className={classes.imageContainer}
      >
        <PerformanceImage
          index={index}
        />
        <Typography
          variant='h4'
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant='h5'
          className={classes.description}
        >
          {description}
        </Typography>

      </Grid>
    )
  }
}

const styles = (theme) => ({
  imageContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 8px 40px 8px !important",
      "&:last-child": {
        padding: "0 8px 60px 8px !important",
        paddingBottom: "60px",
      },
    },
  },
  title: {
    color: theme.palette.text.secondary,
    paddingTop: "38px",
    lineHeight: "28px",
    paddingBottom: "10px",
    fontSize: "25px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      paddingTop: "22px",
    },
  },
  description: {
    color: theme.palette.text.primary,
    whiteSpace: "pre-line",
    fontSize: "20px",
    paddingTop: "12px",
    lineHeight: "1.7",
    letterSpacing: "0.3px",
    fontWeight: "400",
  },
})


// eslint-disable-next-line
ImageWithNumberBlock = withStyles(styles)(ImageWithNumberBlock)

export { ImageWithNumberBlock }
