import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEOComponent = (props) => {
  const {siteMetadata} = props

  const {
    description,
    lang,
    meta,
    title,
    titleTemplate = `%s | ${siteMetadata.title}`,
  } = props

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEOComponent.defaultProps = {
  lang: `vi`,
  meta: [],
  description: ``,
}

SEOComponent.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEOComponent
