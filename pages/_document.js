import React, { Component } from 'react';
import Document, {
  Main,
  NextScript,
  Head,
} from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

class PlatziMusic extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{
          __html: styleSheet
            .rules()
            .map(rule => rule.cssText)
            .join('\n')
        }}
      />
    );
    return { ...page, styles };
  }
  render() {
    return (
      <html>
        <Head>
          <title>PlatziMusic</title>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default PlatziMusic;
