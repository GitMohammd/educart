import React from "react";
import SubNav from "../../courseList/courseList1/SubNav";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import InstructionV1Content from "./InstructionV1Content";
import InstructorHeader from "./InstructorHeader";

function InstructorV1() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <InstructorHeader />
            <InstructionV1Content />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default InstructorV1;
