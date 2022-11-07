import React from "react";
import SubNav from "../../courseList/courseList1/SubNav";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import Overview from "../courseSingle1/Overview";
import YouMayLike from "../courseSingle1/YouMayLike";
import BestSeller3 from "./BestSeller3";

function CourseSingle3() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <div class="js-pin-container">
              <BestSeller3 />
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

export default CourseSingle3;
