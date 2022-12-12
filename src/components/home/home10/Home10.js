import React, { useEffect } from "react";
import Left10 from "./Left10";
import Navigation10 from "./Navigation10";
import Right10 from "./Right10";

function Home9() {
  useEffect(() => {
    {
      document.exitFullscreen();
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation10 />
          <Left10 />
          <Right10 />
        </main>
      </div>
    </div>
  );
}

export default Home9;
