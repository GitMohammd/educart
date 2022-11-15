import React from "react";

function PeopleSay() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-5">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title text-white">
                People Say About Educrat
              </h2>

              <p className="sectionTitle__text text-white">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-60 lg:pt-50 js-section-slider"
          data-gap="30"
          data-pagination
          data-slider-cols="xl-2"
          data-anim-wrap
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-1"
                className="testimonials -type-3 sm:px-20 sm:py-40 bg-white"
              >
                <div className="row y-gap-30 md:text-center md:justify-center">
                  <div className="col-md-auto">
                    <div className="testimonials__image">
                      <img
                        src="/assets/img/home-4/testimonials/1.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="d-flex items-center md:justify-center">
                      <span className="text-14 lh-1 text-yellow-1">4.5</span>
                      <div className="x-gap-5 px-10">
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                      </div>
                      <span className="text-13 lh-1">(1991)</span>
                    </div>

                    <p className="testimonials__text text-16 lh-17 fw-500 mt-15">
                      “I think Educrat is the best theme I ever seen this year.
                      Amazing design, easy to customize and a design.”
                    </p>

                    <div className="mt-15">
                      <div className="text-15 lh-1 text-dark-1 fw-500">
                        Courtney Henry
                      </div>
                      <div className="text-13 lh-1 mt-10">Web Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-2"
                className="testimonials -type-3 sm:px-20 sm:py-40 bg-white"
              >
                <div className="row y-gap-30 md:text-center md:justify-center">
                  <div className="col-md-auto">
                    <div className="testimonials__image">
                      <img
                        src="/assets/img/home-4/testimonials/2.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="d-flex items-center md:justify-center">
                      <span className="text-14 lh-1 text-yellow-1">4.5</span>
                      <div className="x-gap-5 px-10">
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                      </div>
                      <span className="text-13 lh-1">(1991)</span>
                    </div>

                    <p className="testimonials__text text-16 lh-17 fw-500 mt-15">
                      “I think Educrat is the best theme I ever seen this year.
                      Amazing design, easy to customize and a design.”
                    </p>

                    <div className="mt-15">
                      <div className="text-15 lh-1 text-dark-1 fw-500">
                        Courtney Henry
                      </div>
                      <div className="text-13 lh-1 mt-10">Web Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                data-anim-child="slide-left delay-3"
                className="testimonials -type-3 sm:px-20 sm:py-40 bg-white"
              >
                <div className="row y-gap-30 md:text-center md:justify-center">
                  <div className="col-md-auto">
                    <div className="testimonials__image">
                      <img
                        src="/assets/img/home-4/testimonials/3.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-md">
                    <div className="d-flex items-center md:justify-center">
                      <span className="text-14 lh-1 text-yellow-1">4.5</span>
                      <div className="x-gap-5 px-10">
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                        <i className="text-11 icon-star text-yellow-1"></i>
                      </div>
                      <span className="text-13 lh-1">(1991)</span>
                    </div>

                    <p className="testimonials__text text-16 lh-17 fw-500 mt-15">
                      “I think Educrat is the best theme I ever seen this year.
                      Amazing design, easy to customize and a design.”
                    </p>

                    <div className="mt-15">
                      <div className="text-15 lh-1 text-dark-1 fw-500">
                        Courtney Henry
                      </div>
                      <div className="text-13 lh-1 mt-10">Web Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                <i className="icon text-white icon-arrow-left"></i>
              </button>
            </div>
            <div className="col-auto">
              <div className="pagination -arrows js-pagination"></div>
            </div>
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-right-hover js-next">
                <i className="icon text-white icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleSay;
