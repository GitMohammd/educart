import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import Overview from "../courseSingle1/Overview";
import YouMayLike from "../courseSingle1/YouMayLike";
import DemoBestSeller from "./DemoBestSeller";
// import SubNav from "../../shared/SubNav";
// import Footer from "../../shared/Footer";
// import Navigation from "../../shared/Navigation";
// import Overview from "./Overview";
// import YouMayLike from "./YouMayLike";

function DemoSingle1() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper js-content-wrapper">
            <SubNav />
            <div className="js-pin-container">
              <DemoBestSeller />
              <Overview />
            </div>
            <YouMayLike />

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DemoSingle1;
