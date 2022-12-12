import React, { useEffect } from "react";
import TrustedCompany from "../../shared/TrustedCompany";
import Testimonials from "../home3/Testimonials";
import Bannar7 from "./Bannar7";
import CoursesTought7 from "./CoursesTought7";
import Footer7 from "./Footer7";
import HowItWorks from "./HowItWorks";
import LearningJourney7 from "./LearningJourney7";
import Navigation7 from "./Navigation7";
import PopularCourses7 from "./PopularCourses7";
import RightCourses7 from "./RightCourses7";
import SimplePricing7 from "./SimplePricing7";
import TopCategories7 from "./TopCategories7";
import UpcommigEvent7 from "./UpcommigEvent7";
import WeAreProud from "./WeAreProud";

function Home7() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation7 />
          <div class="content-wrapper  js-content-wrapper">
            <Bannar7 />
            <PopularCourses7 />
            <CoursesTought7 />
            <RightCourses7 />
            <HowItWorks />
            <LearningJourney7 />
            <Testimonials />
            <UpcommigEvent7 />
            <SimplePricing7 />
            <TrustedCompany />
            <WeAreProud />
            <TopCategories7 />
            <Footer7 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home7;
