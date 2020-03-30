import React from 'react'
import SEO from 'react-seo-component'
import { HIBPHashList } from '../components/hibp-hash-list'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { GlobalStyle } from '../theme/global-style'

export default () => {
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
      <GlobalStyle />
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
      <HIBPHashList />
    </>
  )
}
