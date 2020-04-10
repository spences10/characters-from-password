import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/layout'
import { A } from './src/components/page-elements/a'
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  a: props => {
    return <A {...props} />
  },
}

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </ThemeProvider>
)
