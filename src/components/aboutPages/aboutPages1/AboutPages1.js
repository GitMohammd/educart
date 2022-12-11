import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import AboutPageContent from "./AboutPageContent";
import AboutPageHeader from "./AboutPageHeader";
import WhyLearn from "../../home/home1/WhyLearn";
import WhatPeopleSay from "../../home/home1/WhatPeopleSay";

import TrustedCompany from "../../shared/TrustedCompany";
import BestInstructors from "../../home/home3/BestInstructors";

function AboutPages1() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <AboutPageHeader />
            <AboutPageContent />
            <WhyLearn />
            <WhatPeopleSay />
            <BestInstructors />
            <TrustedCompany />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutPages1;
