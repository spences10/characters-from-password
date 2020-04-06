import React from 'react'
import SEO from 'react-seo-component'
import { CharacterPicker } from '../components/character-picker'
import { useSiteMetadata } from '../hooks/use-site-metadata'

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
      <CharacterPicker />
    </>
  )
}
