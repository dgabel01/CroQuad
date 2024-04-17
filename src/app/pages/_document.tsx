import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import ReactGA from "react-ga4";

class MyDocument extends Document {
  componentDidMount() {
    ReactGA.initialize("G-D93226M9FT");
  }


  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
          <link rel="icon" type='image/png' href="/public/android-chrome-512x512.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
          <link rel="icon" type='image/png' href="/src/app/favicon.ico"/>
          <link rel="icon" type ="image/png" href="/public/android-chrome-192x192.png" />
          <link rel="manifest" href="/src/app/manifest.ts" />
          <meta name='description' content='CroQuad Hvar official website. Book the best quad ride on the island of Hvar.'/>

          <Script strategy='lazyOnload' async src="https://www.googletagmanager.com/gtag/js?id=G-D93226M9FT"></Script>
          <Script id='ga-script' strategy='lazyOnload'>
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D93226M9FT');`}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
