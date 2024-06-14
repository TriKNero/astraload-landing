import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

function useImagesQuery() {
  const data = useStaticQuery(graphql`
    query {
      saasBG: file(relativePath: { eq: "SaaS-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      saasDesktop0: file(relativePath: { eq: "saas-desktop0.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasDesktop1: file(relativePath: { eq: "saas-desktop1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasDesktop2: file(relativePath: { eq: "saas-desktop2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasDesktop3: file(relativePath: { eq: "saas-desktop3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasDesktop4: file(relativePath: { eq: "saas-desktop4.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasDesktop5: file(relativePath: { eq: "saas-desktop5.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasTablet0: file(relativePath: { eq: "saas-tablet0.png" }) {
        childImageSharp {
          fluid(maxWidth: 1076, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasTablet1: file(relativePath: { eq: "saas-tablet1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1076, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasTablet2: file(relativePath: { eq: "saas-tablet2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1076, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasMobile0: file(relativePath: { eq: "saas-mobile0.png" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasMobile1: file(relativePath: { eq: "saas-mobile1.png" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasMobile2: file(relativePath: { eq: "saas-mobile2.png" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasMobile3: file(relativePath: { eq: "saas-mobile3.png" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasMobile4: file(relativePath: { eq: "saas-mobile4.png" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      saasMobile5: file(relativePath: { eq: "saas-mobile5.png" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      spaceBackgroundImage: file(relativePath: { eq: "space-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      astraload: file(relativePath: { eq: "astraload.png" }) {
        childImageSharp {
          fluid(maxWidth: 90, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      dashboardDesktop: file(relativePath: { eq: "dashboard-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 827, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      dashboardTablet: file(relativePath: { eq: "dashboard-tablet.png" }) {
        childImageSharp {
          fluid(maxWidth: 615, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      dashboardMobile: file(relativePath: { eq: "dashboard-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 291, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      techGC: file(relativePath: { eq: "techgc.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1100, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      knotel: file(relativePath: { eq: "knotel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1100, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      knotable: file(relativePath: { eq: "knotable.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1100, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      selfleaders: file(relativePath: { eq: "selfleaders.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      rabbit: file(relativePath: { eq: "rabbit.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      tgc: file(relativePath: { eq: "tgc.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      domenic: file(relativePath: { eq: "domenic.png" }) {
        childImageSharp {
          fixed(width: 265, height: 177) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      tool1: file(relativePath: { eq: "tool-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool2: file(relativePath: { eq: "tool-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool3: file(relativePath: { eq: "tool-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool4: file(relativePath: { eq: "tool-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool5: file(relativePath: { eq: "tool-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool6: file(relativePath: { eq: "tool-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool7: file(relativePath: { eq: "tool-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool8: file(relativePath: { eq: "tool-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool9: file(relativePath: { eq: "tool-9.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool10: file(relativePath: { eq: "tool-10.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool11: file(relativePath: { eq: "tool-11.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      tool12: file(relativePath: { eq: "tool-12.png" }) {
        childImageSharp {
          fluid(maxWidth: 810, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      earthSvg: file(relativePath: { eq: "earth.svg" }) {
        extension
        publicURL
      }
      moonSvg: file(relativePath: { eq: "moon.svg" }) {
        extension
        publicURL
      }

      astronaut: file(relativePath: { eq: "astronaut.svg" }) {
        extension
        publicURL
      }
    }
  `)

  return data
}

function GatsbyImage({
  alt,
  name,
  width = "",
  customStyle = {},
  customClassName = "",
}) {
  const image = useImagesQuery()

  const style = width ? { style: { width, ...customStyle } } : {}

  return (
    <Img
      fluid={image[name].childImageSharp.fluid}
      alt={alt}
      objectFit="cover"
      className={customClassName}
      {...style}
    />
  )
}

function GatsbyImageFixed({ alt, name, className = null }) {
  const image = useImagesQuery()
  return (
    <Img
      className={className}
      fixed={image[name].childImageSharp.fixed}
      alt={alt}
      objectFit="cover"
      objectPosition="50% 50%"
    />
  )
}

function GatsbyImageBackground({ alt, name = "", children, className }) {
  const image = useImagesQuery()
  return (
    <BackgroundImage
      className={className}
      fluid={image[name].childImageSharp.fluid}
      alt={alt}
      fadeIn={false}
      critical={false}
    >
      {children}
    </BackgroundImage>
  )
}

function useGatsbyImagePath(name, type) {
  const image = useImagesQuery()
  return image[name].childImageSharp[type].src
}

function usePublicUrl(name) {
  const images = useImagesQuery()
  return images && images[name] && images[name].publicURL
}

export {
  GatsbyImage,
  GatsbyImageFixed,
  GatsbyImageBackground,
  useGatsbyImagePath,
  usePublicUrl,
}
