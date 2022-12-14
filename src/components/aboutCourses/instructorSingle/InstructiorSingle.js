import React, { useEffect } from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import DescriptionInstructor from "./DescriptionInstructor";
import InstructionOverview from "./InstructionOverview";

function InstructiorSingle() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
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
