import React, { useEffect } from "react";
import TopStudents from "../home2/TopStudents";
import Navigation4 from "../home4/Navigation4";
import TopCategories4 from "../home4/TopCategories4";
import BestInstructors5 from "./BestInstructors5";
import Companys from "./Companys";
import ExploreFeaturedCourses from "./ExploreFeaturedCourses";
import Footer5 from "./Footer5";
import LearnForm from "./LearnForm";
import LearningJourney5 from "./LearningJourney5";
import MasterSkills from "./MasterSkills";
import News$Events from "./News$Events";
import PerosonalLearning from "./PerosonalLearning";
import SimplePricing from "./SimplePricing";
import TopCatagories5 from "./TopCatagories5";

function Home5() {
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
            <MasterSkills />
            <Companys />
            <ExploreFeaturedCourses />
            <TopCatagories5 />
            <BestInstructors5 />
            <TopStudents />
            <LearningJourney5 />
            <SimplePricing />
            <LearnForm />
            <News$Events />
            <PerosonalLearning />
            <Footer5 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home5;
