import React from 'react'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const PageSEO = () => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <>
      <SEO
        title={`Characters from Password`}
        titleTemplate={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
    </>
  )
}
