import React, { useEffect } from "react";
import LessonAside from "./LessonAside";
import LessonContent1 from "./LessonContent1";
import LessonNavigation from "./LessonNavigation";

function LessonPagev1() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <LessonNavigation />
          <div className="content-wrapper  js-content-wrapper">
            <LessonAside />
            <LessonContent1 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default LessonPagev1;
