import React from "react";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "../Dashboard/DashboardAside";
import AssignmentContent from "./AssignmentContent";

function Assingment() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton />
          <div className="content-wrapper  js-content-wrapper">
            <AssignmentContent />
            <DashboardAside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Assingment;
