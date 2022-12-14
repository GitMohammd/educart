import React, { useEffect, useState } from "react";
import DashboardAside from "../../dashboardPages/Dashboard/DashboardAside";
import Left from "./Left";
import Navigation9 from "./Navigation9";
import Right from "./Right";

function Home9() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  const [isLeftBar, setLeftBarOpen] = useState(true);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isDark, setDark] = useState(true);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation9
            isLeftBar={isLeftBar}
            setLeftBarOpen={setLeftBarOpen}
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
            isDark={isDark}
            setDark={setDark}
          />
          <Left isLeftBar={isLeftBar} />
          {/* <Right /> */}
          <DashboardAside
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
        </main>
      </div>
    </div>
  );
}

export default Home9;
