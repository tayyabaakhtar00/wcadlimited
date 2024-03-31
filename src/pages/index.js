import About4 from "@/components/about/About4";
import Banner4 from "@/components/bannner/Banner4";
import Home4Contact from "@/components/contact/Home4Contact";
import Experts4 from "@/components/expertes/Experts4";
import Feature4 from "@/components/features/Feature4";
import Footer2 from "@/components/footer/Footer2";
import Header4 from "@/components/header/Header4";
import Insight4 from "@/components/insight/Insight4";

import Partnar4 from "@/components/partner/Partnar4";
import Pricing4 from "@/components/pricingplan/Pricing4";
import Service4 from "@/components/services/Service4";
import Testimonial4 from "@/components/testimonial/Testimonial4";
import WorkSection4 from "@/components/wordSection/WorkSection4";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import React from "react";

function Homepage2() {
  useBodyClass("home-dark");
  return (
    <>
      <Head>
        <title>
          WCAD -Website Content Artificial Intelligence Design
        </title>
        <meta name="description" content="WCAD -Website Content Artificial Intelligence Design" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header4 />
      <Banner4 />
      <About4 />
      <Service4 />
      <WorkSection4 />
      <Feature4 />
      <Partnar4 />
      <Testimonial4 />
     
      <Footer2 />
    </>
  );
}

export default Homepage2;
