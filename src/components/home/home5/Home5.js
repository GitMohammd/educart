import React, { useEffect } from "react";
import Navigation4 from "../home4/Navigation4";
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
import TopStudent5 from "./TopStudent5";

function Home5() {
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
          <Navigation4 />

          <div className="content-wrapper  js-content-wrapper">
            <MasterSkills />
            <Companys />
            <ExploreFeaturedCourses />
            <TopCatagories5 />
            <BestInstructors5 />
            <TopStudent5 />
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
