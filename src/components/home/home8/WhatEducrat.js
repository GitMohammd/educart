import React from "react";

function WhatEducrat() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-7">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">What is Educrat?</h2>

              <p className="sectionTitle__text ">
                Learn the data skills you need online at your own pace—from
                non-coding essentials to data science and machine learning.
              </p>
            </div>
          </div>
        </div>

        <div
          data-anim-wrap
          className="row y-gap-30 justify-between items-center pt-60 lg:pt-40"
        >
          <div data-anim-child="slide-up" className="col-lg-6">
            <img
              className="w-1/1"
              src="assets/img/home-8/what/1.png"
              alt="image"
            />
          </div>

          <div className="col-xl-5 col-lg-6 col-md-9">
            <div className="d-flex flex-column y-gap-30">
              <div data-anim-child="slide-up delay-2" className="d-flex">
                <div className="d-flex justify-center items-center size-70 bg-orange-5 rounded-full">
                  <img src="assets/img/home-8/what/icons/1.svg" alt="icon" />
                </div>
                <div className="ml-20">
                  <h5 className="text-18 lh-11 text-dark-1 fw-500">
                    Industry expert teachers
                  </h5>
                  <p className="text-dark-1 mt-5">
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliquam id dolor .
                  </p>
                </div>
              </div>

              <div data-anim-child="slide-up delay-3" className="d-flex">
                <div className="d-flex justify-center items-center size-70 bg-orange-5 rounded-full">
                  <img src="assets/img/home-8/what/icons/2.svg" alt="icon" />
                </div>
                <div className="ml-20">
                  <h5 className="text-18 lh-11 text-dark-1 fw-500">
                    Up-to-date course content
                  </h5>
                  <p className="text-dark-1 mt-5">
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliquam id dolor .
                  </p>
                </div>
              </div>

              <div data-anim-child="slide-up delay-4" className="d-flex">
                <div className="d-flex justify-center items-center size-70 bg-orange-5 rounded-full">
                  <img src="assets/img/home-8/what/icons/3.svg" alt="icon" />
                </div>
                <div className="ml-20">
                  <h5 className="text-18 lh-11 text-dark-1 fw-500">
                    Students community
                  </h5>
                  <p className="text-dark-1 mt-5">
                    Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                    elit. Felis donec massa aliquam id dolor .
                  </p>
                </div>
              </div>
            </div>

            <div
              data-anim-child="slide-up delay-5"
              className="d-inline-block mt-30"
            >
              <a href="#" className="button -md -orange-1 text-white">
                Start Learning For Free{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatEducrat;
