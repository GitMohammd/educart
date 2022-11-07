import React from "react";
import SubNav from "../../courseList/courseList1/SubNav";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import BestInstructors from "../../home/home3/BestInstructors";
import BecomeInstructorContent from "./BecomeInstructorContent";
import BeInstroctorHeading from "./BeInstroctorHeading";
import InstructorToday from "./InstructorToday";

function BecomeAnInstructor() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <BeInstroctorHeading />
            <BecomeInstructorContent />
            <InstructorToday />
            <BestInstructors />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default BecomeAnInstructor;
