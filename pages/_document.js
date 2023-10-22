import Document, { Html, Head, Main, NextScript } from "next/document";

class ColdfyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            src="https://kit.fontawesome.com/67e862033b.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ColdfyDocument;
