import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import UserInterface from "../courseList1/UserInterface";
import CourseListMain6 from "./CourseListMain6";
import GetYouStarted from "./GetYouStarted";
import PopulerInstructorList6 from "./PopulerInstructorList6";
import PupulerInstructotLi6 from "./PupulerInstructotLi6";

function CourseList6() {
  useEffect(() => {
    {
      document.exitFullscreen();
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
            <UserInterface />
            <GetYouStarted />
            <PopulerInstructorList6 />
            <PupulerInstructotLi6 />
            <CourseListMain6 />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList6;
