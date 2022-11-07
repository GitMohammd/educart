import React from "react";
import Footer from "../../home/home1/Footer";
import Navigation from "../../home/home1/Navigation";
import SubNav from "../courseList1/SubNav";
import UserInterface from "../courseList1/UserInterface";
import CourseListMain3 from "./CourseListMain3";

function CourseList3() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <UserInterface />
            <CourseListMain3 />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList3;
