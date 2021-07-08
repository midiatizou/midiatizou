import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import { theme } from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="shortcut icon"
          type="image/svg+xml"
          href="/images/logo.svg"
        />
        <link
          rel="apple-touch-icon"
          type="image/svg+xml"
          href="/images/logo.svg"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
