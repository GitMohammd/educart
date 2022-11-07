import React from "react";

function TopCatagories6() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden pt-50 js-section-slider"
          data-gap="30"
          data-loop
          data-pagination
          data-slider-cols="base-1 xl-6 lg-4 md-3 sm-2"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-2"
                className="bg-white border-light rounded-8 -featureCard-hover-2"
              >
                <div className="py-30 px-40 text-center">
                  <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                    <i className="icon-architecture text-40"></i>
                  </div>
                  <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                    Design Creative
                  </div>
                  <div className="featureCard__text text-13 lh-1 mt-10">
                    573+ Courses
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-3"
                className="bg-white border-light rounded-8 -featureCard-hover-2"
              >
                <div className="py-30 px-40 text-center">
                  <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                    <i className="icon-megaphone text-40"></i>
                  </div>
                  <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                    Sales Marketing
                  </div>
                  <div className="featureCard__text text-13 lh-1 mt-10">
                    565+ Courses
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-4"
                className="bg-white border-light rounded-8 -featureCard-hover-2"
              >
                <div className="py-30 px-40 text-center">
                  <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                    <i className="icon-save-money text-40"></i>
                  </div>
                  <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                    Development IT
                  </div>
                  <div className="featureCard__text text-13 lh-1 mt-10">
                    126+ Courses
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-5"
                className="bg-white border-light rounded-8 -featureCard-hover-2"
              >
                <div className="py-30 px-40 text-center">
                  <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                    <i className="icon-software text-40"></i>
                  </div>
                  <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                    Engineering Architecture
                  </div>
                  <div className="featureCard__text text-13 lh-1 mt-10">
                    35+ Courses
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-6"
                className="bg-white border-light rounded-8 -featureCard-hover-2"
              >
                <div className="py-30 px-40 text-center">
                  <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                    <i className="icon-tools text-40"></i>
                  </div>
                  <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                    Personal Development
                  </div>
                  <div className="featureCard__text text-13 lh-1 mt-10">
                    908+ Courses
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-7"
                className="bg-white border-light rounded-8 -featureCard-hover-2"
              >
                <div className="py-30 px-40 text-center">
                  <div className="featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3">
                    <i className="icon-person-2 text-40"></i>
                  </div>
                  <div className="featureCard__title text-17 fw-500 text-dark-1 mt-20">
                    Finance Accounting
                  </div>
                  <div className="featureCard__text text-13 lh-1 mt-10">
                    129+ Courses
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex x-gap-15 items-center justify-center pt-50">
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                <i className="icon icon-arrow-left"></i>
              </button>
            </div>
            <div className="col-auto">
              <div className="pagination -arrows js-pagination"></div>
            </div>
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-right-hover js-next">
                <i className="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopCatagories6;
