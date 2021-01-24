import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="An amazing Game Store, made for you!"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
