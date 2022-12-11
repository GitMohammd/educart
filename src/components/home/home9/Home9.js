import React, { useEffect } from "react";
import Left from "./Left";
import Navigation9 from "./Navigation9";
import Right from "./Right";

function Home9() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation9 />
          <Left />
          <Right />
        </main>
      </div>
    </div>
  );
}

export default Home9;
