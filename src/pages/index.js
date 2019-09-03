import React from 'react';
import HaveIBeenPwned from '../components/HaveIBeenPwned';
import MainForm from '../components/MainForm';
import {
  PasswordContext,
  PasswordProvider,
} from '../contexts/PasswordContext';
import { GlobalStyle } from '../theme/globalStyle';

// import { theme } from '../theme/globalStyle';
export default () => (
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
          <MainForm
            password={password}
            selected={selected}
            handlePasswordChange={handlePasswordChange}
            handleSelectedChange={handleSelectedChange}
          />
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
