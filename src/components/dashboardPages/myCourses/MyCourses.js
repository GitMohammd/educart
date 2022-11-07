import React from "react";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "../Dashboard/DashboardAside";
import MyCoursesContent from "./MyCoursesContent";

function MyCourses() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton />
          <div className="content-wrapper  js-content-wrapper">
            <MyCoursesContent />
            <DashboardAside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyCourses;
