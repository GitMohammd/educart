import React from "react";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "../Dashboard/DashboardAside";
import DicronaryContent from "./DicronaryContent";

function Dictionary() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton />
          <div className="content-wrapper  js-content-wrapper">
            <DicronaryContent />
            <DashboardAside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dictionary;
