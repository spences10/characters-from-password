import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/layout'
import { A } from './src/components/page-elements/a'
import { AnalyticsProvider } from './src/contexts/event-tracking'
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  a: props => {
    return <A {...props} />
  },
}

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <script
        src={`${process.env.FATHOM_TRACKING_URL_CFROMP}/script.js`}
        spa='auto'
        site={process.env.FATHOM_TRACKING_ID_CFROMP}
        defer
      ></script>
      <meta
        name='monetization'
        content='$ilp.uphold.com/bzPBWkMBzLmN'
      />
    </Helmet>
    <AnalyticsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MDXProvider components={components}>
          <Layout>{element}</Layout>
        </MDXProvider>
      </ThemeProvider>
    </AnalyticsProvider>
  </>
)
