import React from "react";
import LessonNavigation from "../lessonPagev1/LessonNavigation";
import LessonPageAsideV2 from "./LessonPageAsideV2";
import LessonPageV2Description from "./LessonPageV2Description";
import LessonPageV2Img from "./LessonPageV2Img";

function LessonPagev2() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <LessonNavigation />
          <div className="content-wrapper  js-content-wrapper">
            <LessonPageV2Img />
            <div class="d-flex flex-column">
              <LessonPageV2Description />
              <LessonPageAsideV2 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LessonPagev2;
