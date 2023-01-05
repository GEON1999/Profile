import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:description" content="About Geon" />
          <meta property="author" content="Geon" />
          <meta property="og:title" content="Resume" />
          <meta
            property="og:image"
            content="https://imagedelivery.net/xE6X7mlbIExkQau-XHoj-A/b018655f-68ca-4df4-47c6-33d8f6da2600/public"
          />
          <link
            rel="shortcut icon"
            sizes="16x16 32x32 64x64"
            href="https://imagedelivery.net/xE6X7mlbIExkQau-XHoj-A/da86e014-02bf-4628-0f97-fb27d37c0f00/public"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
