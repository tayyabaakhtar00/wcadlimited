import React from "react";
import Footer3 from "../footer/Footer3";
import Header from "../header/Header4";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
     <Head>
        <title>
        WCAD -Website Content Artificial Intelligence Design
        </title>
        <meta name="description" content="WCAD -Website Content Artificial Intelligence Design" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header/>
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
