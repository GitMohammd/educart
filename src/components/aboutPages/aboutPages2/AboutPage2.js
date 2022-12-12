import React, { useEffect } from "react";
import BecomeInstructor from "../../home/home2/BecomeInstructor";
import BecomeStudent from "../../home/home2/BecomeStudent";
import HowItWorks from "../../home/home3/HowItWorks";
import Testimonials from "../../home/home3/Testimonials";
import LearningJourney from "../../home/home4/LearningJourney";
import LearningJourney5 from "../../home/home5/LearningJourney5";
import LearnNewSkill6 from "../../home/home6/LearnNewSkill6";
import LearningJourney7 from "../../home/home7/LearningJourney7";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import TrustedCompany from "../../shared/TrustedCompany";
import AboutPageContent from "../aboutPages1/AboutPageContent";
import AboutPageHeader from "../aboutPages1/AboutPageHeader";

function AboutPage2() {
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
            <AboutPageHeader />
            <AboutPageContent />
            <HowItWorks />
            <LearningJourney7 />
            <Testimonials />
            <LearnNewSkill6 />
            <BecomeInstructor />
            <BecomeStudent />
            <TrustedCompany />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutPage2;
