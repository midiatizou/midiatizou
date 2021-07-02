import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Midiatizou</title>
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
        <meta
          name="description"
          content="Midiatizou - agencia de marketing com foco em google ads"
        />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
