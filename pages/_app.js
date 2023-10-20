import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Coldfy" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Sua Agência de Desenvolvimento de Softwares de confiança. Criamos soluções web personalizadas para atender às suas necessidades."
        />
        <link rel="shortcut icon" href="/assets/logo/brackets.png" />

        <title>Coldfy</title>

        <meta
          property="og:title"
          content="Sua Agência de Desenvolvimento de Sites e Programação - Coldfy"
        />
        <meta
          property="og:description"
          content="Criamos soluções web personalizadas para atender às suas necessidades."
        />
        <meta property="og:url" content="https://coldfy.com.br" />
        <meta property="og:type" content="website" />

        <meta name="copyright" content="Copyright © Coldfy 2023" />

        <meta
          name="keywords"
          content="agência de desenvolvimento web, programação, sites personalizados, soluções web, desenvolvimento de aplicativos"
        />

        <link rel="canonical" href="https://coldfy.com.br" />

        <meta name="robots" content="index,follow" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossorigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
