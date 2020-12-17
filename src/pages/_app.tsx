import React, { useEffect } from 'react';
import Head from 'next/head';
import 'styles/globals.scss';
import 'markdown-navbar/dist/navbar.css';
import 'styles/markdown.scss';
import 'styles/theme.scss';
import 'highlight.js/styles/rainbow.css';
import Zooming from 'zooming';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Main from 'components/main/main';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const zooming = new Zooming({
      enableGrab: false,
      bgColor: 'rgb(0, 0, 0)',
      bgOpacity: '0.5',
    });
    zooming.listen('.zoom');
  }, []);
  return (
    <>
      <Head>
        <title>zzf</title>
      </Head>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
}

export default MyApp;
