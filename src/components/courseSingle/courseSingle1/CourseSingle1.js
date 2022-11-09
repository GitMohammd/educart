import React from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import BestSeller from "./BestSeller";
import Overview from "./Overview";
import YouMayLike from "./YouMayLike";

function CourseSingle1() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <div class="js-pin-container">
              <BestSeller />
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

export default CourseSingle1;
