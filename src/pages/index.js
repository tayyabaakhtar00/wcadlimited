import Home5Team from "@/components/Team/Home5Team";
import About5 from "@/components/about/About5";
import Award5 from "@/components/award/Award5";
import Bannder5 from "@/components/bannner/Bannder5";
import Home5Blog from "@/components/blog/Home5Blog";
import CaseStudy5 from "@/components/caseStudy/CaseStudy5";
import WhatWeDo5 from "@/components/choose/WhatWeDo5";
import Sidebar from "@/components/common/Sidebar";
import Footer5 from "@/components/footer/Footer5";
import Partner5 from "@/components/partner/Partner5";
import Service5 from "@/components/services/Service5";
import Testimonial5 from "@/components/testimonial/Testimonial5";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

function HomepageThree() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useBodyClass("bg-dark-5");
  return (
    <>
      <Head>
        <title>
          WCAD : Web content Artificial and Design
        </title>
        <meta name="description" content="Website Content Artificial and Design" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="main-container">
        <div className="sidebar-wrapper">
          <div className="header-logo">
            <Link legacyBehavior href="/">
            <a>
                <img src="assets/img/home-5/logo.jpg" alt="" />
              </a>
            </Link>
          </div>
          <div className="sidebar-button mobile-menu-btn" onClick={toggleMenu}>
            <span />
          </div>
          <div className="header-btn">
            <Link legacyBehavior href="/contact">
              <a className="primary-btn6">Get A Quote</a>
            </Link>
          </div>
        </div>
        <div className="main-content">
          <header className="header5 d-lg-none d-flex">
            <div className="header-logo">
              <Link legacyBehavior href="/">
                <a>
                  <img src="assets/img/logo.svg" alt="" />
                </a>
              </Link>
            </div>
            <div
              className="sidebar-button mobile-menu-btn2"
              onClick={toggleMenu}
            >
              <span />
            </div>
          </header>
          <Bannder5 />
          <About5 />
          <Service5 />
          <WhatWeDo5 />
          <Partner5 />
       
          <Testimonial5 />
   
          <Footer5 />
        </div>
      </div>
    </>
  );
}

export default HomepageThree;
