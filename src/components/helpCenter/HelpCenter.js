import React, { useEffect } from "react";

import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import SubNav from "../shared/SubNav";
import HelpCenterContent from "./HelpCenterContent";
import HelpCenterTitle from "./HelpCenterTitle";

function HelpCenter() {
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
            <HelpCenterTitle />
            <HelpCenterContent />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default HelpCenter;
