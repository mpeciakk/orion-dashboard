import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
