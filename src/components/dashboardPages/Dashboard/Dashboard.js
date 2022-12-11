import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "./DashboardAside";
import DashboardContent from "./DashboardContent";
import Dashboardleft from "./Dashboardleft";

function Dashboard() {
  const [isLeftBar, setLeftBarOpen] = useState(true);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton
            isLeftBar={isLeftBar}
            setLeftBarOpen={setLeftBarOpen}
          />
          <div className="content-wrapper  js-content-wrapper">
            {isLeftBar ? <Dashboardleft /> : ""}
            <Outlet context={[isLeftBar, setLeftBarOpen]} />
            <DashboardAside />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
