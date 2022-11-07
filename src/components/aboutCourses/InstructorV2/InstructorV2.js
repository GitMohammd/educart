import React from "react";
import SubNav from "../../courseList/courseList1/SubNav";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import InstructorHeader from "../instructiorV1/InstructorHeader";
import InstructorV2Content from "./InstructorV2Content";

function InstructorV2() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <InstructorHeader />
            <InstructorV2Content />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default InstructorV2;
