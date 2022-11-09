import React from "react";
import Footer from "../../shared/Footer";
import TrustedCompany from "../../shared/TrustedCompany";
import Bannar from "./Bannar";
import BecomeInstructor from "./BecomeInstructor";
import BecomeStudent from "./BecomeStudent";
import LearningPath from "./LearningPath";
import LearningSolutions from "./LearningSolutions";
import Navigation2 from "./Navigation2";
import PopulerCourses from "./PopulerCourses";
import TopCatagories from "./TopCatagories";
import TopStudents from "./TopStudents";
import UpcommingEvents from "./UpcommingEvents";
import Footer2 from "./Footer2";

function Home2() {
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation2 />

          <div className="content-wrapper  js-content-wrapper">
            <Bannar />
            <PopulerCourses />
            <LearningPath />
            <LearningSolutions />
            <UpcommingEvents />
            <TopCatagories />
            <TopStudents />
            <BecomeInstructor />
            <BecomeStudent />
            <TrustedCompany />
            <Footer2 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home2;
