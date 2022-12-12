import React, { useEffect } from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import InstructionV1Content from "./InstructionV1Content";
import InstructorHeader from "./InstructorHeader";

function InstructorV1() {
  useEffect(() => {
    {
      document.exitFullscreen();
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
