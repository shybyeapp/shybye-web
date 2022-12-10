import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Complete challenges, collect rewards, reduce social anxiety!" />

        {/* Google Fonts (variable): "Inter", "Josefin Sans" */}
        {/** @todo ensure compatibility with older browsers */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans" />

        {/** @todo create app manifest and icons via RealFaviconGenerator.net (when final app branding is decided) */}
        <link rel="icon" id="favicon" href="images/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}