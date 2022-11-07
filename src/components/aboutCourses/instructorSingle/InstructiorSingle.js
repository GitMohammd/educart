import React from "react";
import SubNav from "../../courseList/courseList1/SubNav";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import DescriptionInstructor from "./DescriptionInstructor";
import InstructionOverview from "./InstructionOverview";

function InstructiorSingle() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <DescriptionInstructor />
            <InstructionOverview />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default InstructiorSingle;
