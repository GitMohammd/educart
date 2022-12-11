import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import YouMayLike from "../courseSingle1/YouMayLike";
import SubNav2 from "../courseSingle2/SubNav2";
import BestSeller6 from "./BestSeller6";
import OverView6 from "./OverView6";

function CourseSingle6() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav2 />
            <div className="js-pin-container">
              <BestSeller6 />
              <OverView6 />
            </div>
            <YouMayLike />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseSingle6;
