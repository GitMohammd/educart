import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DahsboardNavigaton from "../../shared/DahsboardNavigaton";
import DashboardAside from "./DashboardAside";
import Dashboardleft from "./Dashboardleft";

function Dashboard() {
  useEffect(() => {
    {
      document.exitFullscreen();
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  const [isLeftBar, setLeftBarOpen] = useState(true);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="preloader-visible -dark-mode" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <DahsboardNavigaton
            isLeftBar={isLeftBar}
            setLeftBarOpen={setLeftBarOpen}
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
          <div className="content-wrapper  js-content-wrapper">
            {/* {isLeftBar ? <Dashboardleft /> : ""} */}
            <Dashboardleft isLeftBar={isLeftBar} />

            <Outlet context={[isLeftBar, setLeftBarOpen]} />
            <DashboardAside
              isSideBarOpen={isSideBarOpen}
              setSideBarOpen={setSideBarOpen}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
