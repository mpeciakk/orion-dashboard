import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet' />
      <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />

      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
