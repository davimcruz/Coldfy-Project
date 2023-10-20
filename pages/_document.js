import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://kit.fontawesome.com/67e862033b.js"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64f9d08222b88a4459b544bb"
            type="text/javascript"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://coldfy.com.br/javascript/animations.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;