import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import UserInterface from "../courseList1/UserInterface";
import CourseListMain2 from "./CourseListMain2";

function CourseList2() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <UserInterface />
            <CourseListMain2 />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList2;
