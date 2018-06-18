import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../colors'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Performance Demo</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:400" rel="stylesheet"/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    outline: none;
  }
  html {
    background-color: #f4f4f4;
  }
  body {
    background-color: ${backgroundgrey};
    max-width: 510px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  div.divider {
    max-width: 510px;
    padding: 20px;
    width: 100%;
    &::after {
      content:'';
      width: 100%;
      display: block;
      border-bottom: 1px solid ${lightgrey};
    }
  }
`
