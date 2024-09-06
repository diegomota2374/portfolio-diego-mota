import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Portfólio Diego Mota Cavalcante</title>
        <meta name="description" content="Portfólio Diego Mota Cavalcante" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
