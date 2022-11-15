import React from "react";

function LessonPageV2Img() {
  return (
    <section className="lesson-image">
      <div className="relative pt-40">
        <img
          className="w-1/1"
          src="/assets/img/lesson-single/1.png"
          alt="image"
        />
        <div className="absolute-full-center d-flex justify-center items-center">
          <a
            href="#"
            className="d-flex justify-center items-center size-60 rounded-full bg-white"
          >
            <div className="icon-play text-18"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LessonPageV2Img;
