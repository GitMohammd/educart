import React, { useEffect } from "react";
import TrustedCompany from "../../shared/TrustedCompany";
import Community from "./Community";
import CoursesTaught from "./CoursesTaught";
import DreamJob from "./DreamJob";
import FeaturedCourses from "./FeaturedCourses";
import Footer4 from "./Footer4";
import LearningJourney from "./LearningJourney";
import Navigation4 from "./Navigation4";
import PeopleSay from "./PeopleSay";
import PopulerCourses from "./PopulerCourses";
import PreferredCourses from "./PreferredCourses";
import Recommendation from "./Recommendation";
import TopCategories4 from "./TopCategories4";
import UpcomingEvents from "./UpcomingEvents";

function Home4() {
  useEffect(() => {
    {
      document.exitFullscreen();
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation4 />

          <div className="content-wrapper  js-content-wrapper">
            <PreferredCourses />
            <TrustedCompany />
            <TopCategories4 />
            <PopulerCourses />
            <LearningJourney />
            <FeaturedCourses />
            <DreamJob />
            <PeopleSay />
            <Community />
            <CoursesTaught />
            <UpcomingEvents />
            <Recommendation />
            <Footer4 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home4;
