import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Layout } from './src/components/layout'
import {
  A,
  H1,
  H2,
  H3,
  Hr,
  Li,
  P,
  Ul,
} from './src/components/page-elements'
import { AnalyticsProvider } from './src/contexts/event-tracking'
import { GlobalStyle, theme } from './src/theme/global-style'

const components = {
  a: props => <A {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  hr: props => <Hr {...props} />,
  li: props => <Li {...props} />,
  p: props => <P {...props} />,
  ul: props => <Ul {...props} />,
}

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <script
        src={`${process.env.GATSBY_FATHOM_TRACKING_URL_CFROMP}/script.js`}
        spa='auto'
        site={process.env.GATSBY_FATHOM_TRACKING_ID_CFROMP}
        defer
      ></script>
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
