import React from "react";
import { Outlet } from "react-router-dom";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "./DashboardAside";
import DashboardContent from "./DashboardContent";
import Dashboardleft from "./Dashboardleft";

function Dashboard() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton />
          <div className="content-wrapper  js-content-wrapper">
            <Dashboardleft />
            <Outlet />
            <DashboardAside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
