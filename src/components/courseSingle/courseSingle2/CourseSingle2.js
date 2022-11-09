import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import Overview from "../courseSingle1/Overview";
import YouMayLike from "../courseSingle1/YouMayLike";
import BestSeller2 from "./BestSeller2";
import SubNav2 from "./SubNav2";

function CourseSingle2() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav2 />
            <div classname="js-pin-container">
              <BestSeller2 />
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

export default CourseSingle2;
