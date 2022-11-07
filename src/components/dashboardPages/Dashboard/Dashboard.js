import React from "react";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "./DashboardAside";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton />
          <div className="content-wrapper  js-content-wrapper">
            <DashboardContent />
            <DashboardAside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
