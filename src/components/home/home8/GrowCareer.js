import React from "react";
import { Link } from "react-router-dom";

function GrowCareer() {
  return (
    <section className="section-bg pt-90 pb-90 lg:pt-50 lg:pb-50">
      <div className="section-bg__item -full">
        <div
          className="bg-image js-lazy"
          data-bg="img/home-8/grow/bg.png"
          style={{ backgroundImage: `url("assets/img/home-8/grow/bg.png")` }}
        ></div>
      </div>

      <div className="container">
        <div
          data-anim-wrap
          className="row y-gap-30 justify-between items-center"
        >
          <div
            data-anim-child="slide-up delay-3"
            className="col-xl-4 col-lg-5 col-md-8"
          >
            <h2 className="text-30 lh-15 text-white">
              Grow your career today with the Education courses
            </h2>
            <p className="text-white mt-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="d-inline-block mt-25">
              <Link
                to={`/courseList1`}
                className="button -md -green-1 text-dark-1"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          <div data-anim-child="slide-up delay-1" className="col-lg-auto">
            <div className="composition -type-6">
              <div className="-el-1">
                <div className="bg-white rounded-16 px-60 py-50 sm:px-30 sm:py-40 text-center">
                  <div className="text-55 fw-700 text-dark-1">9/10</div>
                  <div className="mt-10">
                    Overall courses satisfaction score
                  </div>
                </div>
              </div>

              <div className="-el-2">
                <div className="bg-white rounded-16 px-60 py-50 sm:px-30 sm:py-40 text-center">
                  <div className="text-55 fw-700 text-dark-1">10K+</div>
                  <div className="mt-10">Happy Students Worldwide</div>
                </div>
              </div>

              <div className="-el-3">
                <div className="bg-white rounded-16 px-60 py-50 sm:px-30 sm:py-40 text-center">
                  <div className="text-55 fw-700 text-dark-1">96%</div>
                  <div className="mt-10">Completition Rate On All Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowCareer;
