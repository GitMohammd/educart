import React from "react";

import Navigation7 from "../home7/Navigation7";
import Bannar8 from "./Bannar8";
import BecomeInstructor8 from "./BecomeInstructor8";
import BestInstructor8 from "./BestInstructor8";
import Footer8 from "./Footer8";
import GrowCareer from "./GrowCareer";
import PopularCourses8 from "./PopularCourses8";
import StudentsSay from "./StudentsSay";
import TopCategories8 from "./TopCategories8";
import TrustedCompany8 from "./TrustedCompany8";
import UpcomingEvent8 from "./UpcomingEvent8";
import WhatEducrat from "./WhatEducrat";
import WhyLearn8 from "./WhyLearn8";

function Home7() {
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation7 />
          <div class="content-wrapper  js-content-wrapper">
            <Bannar8 />
            <TopCategories8 />
            <PopularCourses8 />

            <WhyLearn8 />
            <WhatEducrat />
            <GrowCareer />
            <BestInstructor8 />
            <UpcomingEvent8 />
            <StudentsSay />
            <TrustedCompany8 />
            <BecomeInstructor8 />
            <BecomeInstructor8 />
            <Footer8 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home7;
