import Document, { Html, Head, Main, NextScript } from 'next/document'
const { publicRuntimeConfig } = getConfig();
import getConfig from 'next/config';
import React from 'react';
class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-K4V13194B8');
        `
      };
    }
  }


  render() {
    return (
      <Html lang="eng">
        <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"/>
        
         <link rel="stylesheet" href="/static/css/styles.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K4V13194B8"></script>
         <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument