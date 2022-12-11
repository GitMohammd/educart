import React, { useEffect } from "react";
import BestInstructors from "./BestInstructors";
import Blog from "./Blog";
import ExpertInstruction from "./ExpertInstruction";
import Footer3 from "./Footer3";
import HowItWorks from "./HowItWorks";
import Navigation3 from "./Navigation3";
import RecentCourses from "./RecentCourses";
import SchoolAchivemets from "./SchoolAchivemets";
import StartLearning from "./StartLearning";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import TopCatagories3 from "./TopCatagories3";
import TopCourses from "./TopCourses";
import Youlearn from "./Youlearn";

function Home3() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation3 />

          <div className="content-wrapper  js-content-wrapper">
            <StartLearning />
            <ExpertInstruction />
            <TopCatagories3 />
            <TopCourses />
            <HowItWorks />
            <div className="line px-50">
              <div className="line__item bg-light-5"></div>
            </div>
            <BestInstructors />
            <Testimonials />
            <RecentCourses />
            <SchoolAchivemets />
            <Youlearn />
            <div className="line px-50">
              <div className="line__item bg-light-5"></div>
            </div>
          </div>
          <Blog />
          <Subscribe />
          <Footer3 />
        </main>
      </div>
    </div>
  );
}

export default Home3;
