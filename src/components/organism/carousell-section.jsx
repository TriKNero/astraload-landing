import React, { useState, useRef, useEffect } from "react"
import { withStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Slider from "react-slick"
import { UsersFeedbackBlock } from "../moleculs/users-feedback-block"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"


function CarouselSection({ classes }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    autoplay: true,
    swipeToSlide: true,
    beforeChange: (prev, current) => setCurrentSlider(current),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
    arrows: false,
  }

  const [currentSlider, setCurrentSlider] = useState(0)
  const [slickHandlers, setSlickHandlers] = useState({})
  const userFeedBackData = [
    {
      name: "Raphtalia",
      company: "CEO Microsoft",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFPcjxeU1CIS2oAIrXxmpSSEHD7F607SCeo5SokjeSdDqvLAa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }, {
      name: "Jotaro Kujo",
      company: "CEO Facebook",
      avatar: "https://img1.ak.crunchyroll.com/i/spire4/19031a464288de24bd03fc2f3a987de71488994234_large.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Raphtalia",
      company: "CEO Microsoft",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFPcjxeU1CIS2oAIrXxmpSSEHD7F607SCeo5SokjeSdDqvLAa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Jotaro Kujo",
      company: "CEO Facebook",
      avatar: "https://img1.ak.crunchyroll.com/i/spire4/19031a464288de24bd03fc2f3a987de71488994234_large.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ]

  const sliderRef = useRef(null)

  useEffect(() => {
    if (!sliderRef) return
    const { slickPrev, slickNext } = sliderRef.current
    setSlickHandlers({ slickPrev, slickNext })
  }, [sliderRef])


  return (
    <>
      <div className={classes.sectionContainer}>
        <Typography
          variant='h3'
          className={classes.sectionTitle}
        >
          What our client say
        </Typography>
        <Typography
          variant='h5'
          className={classes.sectionDescription}
        >
          Long-standing relationships with our customers — this is what we strive for.
          Your success is our motivation.
        </Typography>
      </div>

      <div className={classes.carouselPaddingContainer}>
        <div className={classes.carouselContainer}>


          <div
            className={classes.arrowLeftContainer}
            onClick={slickHandlers.slickPrev}
          >
            <KeyboardArrowLeft className={classes.arrowStyleLeft}/>
          </div>
          <div
            className={classes.arrowRightContainer}
            onClick={slickHandlers.slickNext}
          >
            <KeyboardArrowRight className={classes.arrowStyleRight}/>
          </div>


          <Slider {...settings} ref={sliderRef}>
            {
              userFeedBackData.map((item, index) => <UsersFeedbackBlock
                key={index}
                index={index}
                currentSlider={currentSlider}
                {...item}
              />)
            }
          </Slider>

        </div>
      </div>
    </>
  )
}

const arrowContainerStyle = {
  position: "absolute",
  height: "100%",
  color: "#000",
  zIndex: 2,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  width: "300px",
}

const styles = (theme) => ({
  sectionTitle: {
    color: theme.palette.text.secondary,
    width: "680px",
    textAlign: "center",
    whiteSpace: "pre-line",
    marginBottom: "18px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "600",
      width: "100%",
      marginBottom: "40px",
    },
  },
  sectionDescription: {
    width: "680px",
    color: theme.palette.text.primary,
    whiteSpace: "pre-line",
    textAlign: "center",
    marginBottom: "44px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "60px",
      width: "100%",
    },
  },
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "60px",
    ...theme.defaultHorizonContainer,
    [theme.breakpoints.down("sm")]: {
      top: "32px",
    },
  },
  arrowLeftContainer: {
    ...arrowContainerStyle,
    backgroundImage: "linear-gradient(to right, #fff 35%, rgba(255,255,255,0) 100%)",
    left: "-1px",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      width: "10px",
    },
  },
  arrowRightContainer: {
    ...arrowContainerStyle,
    right: "-1px",
    backgroundImage: "linear-gradient(to left, #fff 35%, rgba(255,255,255,0) 100%)",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      width: "10px",
    },
  },
  arrowStyleLeft: {
    width: "50px",
    height: "50px",
    color: "#808080",
    position: "absolute",
    left: "0px",
    [theme.breakpoints.down("sm")]: {
      left: "-19px",
    },
  },
  arrowStyleRight: {
    width: "50px",
    height: "50px",
    color: "#808080",
    position: "absolute",
    right: "0px",
    [theme.breakpoints.down("sm")]: {
      right: "-19px",
    },
  },
  carouselContainer: {
    position: "relative",
    maxHeight: "330px",
  },
  carouselPaddingContainer: {
    padding: "0 100px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 33px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
  },
})

CarouselSection = withStyles(styles)(CarouselSection)

export { CarouselSection }
