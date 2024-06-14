import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Constants } from "../constants"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const { keyWords } = Constants
  const htmlAttributes = { lang }
  const metaAttribute = [
    {
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
    },
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `keywords`,
      content: keyWords,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `telegram:link`,
      content: `summary`,
    },
  ].concat(meta)

  return (
    <Helmet
      htmlAttributes={htmlAttributes}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaAttribute}
    >

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: "Astraload",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
