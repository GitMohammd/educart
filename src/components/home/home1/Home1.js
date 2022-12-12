import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import TrustedCompany from "../../shared/TrustedCompany";
import JoinLearners from "./JoinLearners";
import LearnForm from "./LearnForm";
import LearnNewSkill from "./LearnNewSkill";
import Masthead from "./Masthead";
import Navigation from "../../shared/Navigation";
import PopulerCourses from "./PopulerCourses";
import ReSources from "./ReSources";
import TopCotegories from "./TopCotegories";
import WhatPeopleSay from "./WhatPeopleSay";
import WhyLearn from "./WhyLearn";
import BestInstructors from "../home3/BestInstructors";

function Home1() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
      // document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />

          <div className="content-wrapper  js-content-wrapper">
            <Masthead />
            <TrustedCompany />
            <TopCotegories />
            <PopulerCourses />
            <WhatPeopleSay />
            <LearnNewSkill />
            <WhyLearn />
            <BestInstructors />
            <LearnForm />
            <ReSources />
            <JoinLearners />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home1;
