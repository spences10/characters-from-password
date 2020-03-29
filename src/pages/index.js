import React from 'react';
import SEO from 'react-seo-component';
import HaveIBeenPwned from '../components/HaveIBeenPwned';
import { HIBPHashList } from '../components/hibp-hash-list';
import MainForm from '../components/main-form';
import {
  PasswordContext,
  PasswordProvider,
} from '../contexts/PasswordContext';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { GlobalStyle } from '../theme/global-style';

export default () => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <PasswordProvider>
      <PasswordContext.Consumer>
        {({
          password,
          selected,
          handlePasswordChange,
          handleSelectedChange,
          passwordHash,
          sha1,
          firstFiveHashChars,
          restHashChars,
          hibpHashes,
          getHash,
        }) => (
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
            <MainForm
              password={password}
              selected={selected}
              handlePasswordChange={handlePasswordChange}
              handleSelectedChange={handleSelectedChange}
            />
            <HIBPHashList />
            <HaveIBeenPwned
              password={password}
              passwordHash={passwordHash}
              sha1={sha1}
              firstFiveHashChars={firstFiveHashChars}
              restHashChars={restHashChars}
              hibpHashes={hibpHashes}
              getHash={getHash}
            />
          </>
        )}
      </PasswordContext.Consumer>
    </PasswordProvider>
  );
};
