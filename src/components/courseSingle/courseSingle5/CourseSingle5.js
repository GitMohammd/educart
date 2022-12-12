import React, { useEffect } from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import Overview from "../courseSingle1/Overview";
import YouMayLike from "../courseSingle1/YouMayLike";
import BestSeller5 from "./BestSeller5";

function CourseSingle5() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <div className="js-pin-container">
              <BestSeller5 />
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

export default CourseSingle5;
