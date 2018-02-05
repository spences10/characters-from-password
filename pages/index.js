import React from 'react'
import { ThemeProvider } from 'styled-components'

import MainForm from '../components/MainForm'
import { theme } from '../theme/globalStyle'

export default () => (
  <ThemeProvider theme={theme}>
    <MainForm />
  </ThemeProvider>
)
