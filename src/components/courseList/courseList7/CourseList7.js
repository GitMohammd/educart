import React from "react";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import SubNav from "../courseList1/SubNav";
import CourseListMain7 from "./CourseListMain7";

function CourseList7() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <CourseListMain7 />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList7;
