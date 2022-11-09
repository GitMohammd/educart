import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import CourseListMain1 from "./CourseListMain1";
import SubNav from "../../shared/SubNav";
import UserInterface from "./UserInterface";

function CourseList1() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <UserInterface />
            <CourseListMain1 />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList1;
