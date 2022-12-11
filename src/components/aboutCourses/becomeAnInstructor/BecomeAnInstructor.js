import React, { useEffect } from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import BestInstructors from "../../home/home3/BestInstructors";
import BecomeInstructorContent from "./BecomeInstructorContent";
import BeInstroctorHeading from "./BeInstroctorHeading";
import InstructorToday from "./InstructorToday";

function BecomeAnInstructor() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
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
