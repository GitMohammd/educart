import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function StudentsSay() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    centerMode: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-4 col-lg-5 col-md-9">
            <h2 className="text-30 lh-13">
              What Our Students
              <br />
              Have To <span className="text-orange-1">Say</span>
            </h2>
            <p className="mt-15">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliquam id dolor.
            </p>

            <div
              className="pt-60 lg:pt-50 pr-5 overflow-hidden js-section-slider"
              data-gap="30"
              data-pagination
              data-slider-cols="xl-1"
              data-anim-wrap
            >
              <div className="">
                <Slider {...settings} ref={sliderRef}>
                  <div className="swiper-slide">
                    <div
                      data-anim="slide-left"
                      className="pt-40 pb-30 px-40 border-light rounded-8"
                      style={{
                        // height: "295px",
                        width: "400px",
                      }}
                    >
                      <div className="testimonials__content">
                        <h4 className="text-18 fw-500 text-orange-1">
                          Great Work
                        </h4>
                        <p className="lh-2 fw-500 mt-15 mb-30">
                          {" "}
                          “I think Educrat is the best theme I ever seen this
                          year. Amazing design, easy to customize and a design
                          quality superlative account on its cloud platform for
                          the optimized performance”
                        </p>

                        <div className="row x-gap-20 y-gap-20 items-center border-top-light pt-15">
                          <div className="col-auto">
                            <img
                              src="/assets/img/testimonials/1.png"
                              alt="image"
                            />
                          </div>

                          <div className="col-auto">
                            <div className="lh-12 fw-500 text-dark-1">
                              Courtney Henry
                            </div>
                            <div className="text-13 lh-1 mt-5">
                              Web Designer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div
                      data-anim="slide-left"
                      className="pt-40 pb-30 px-40 border-light rounded-8"
                      style={{
                        // height: "295px",
                        width: "400px",
                      }}
                    >
                      <div className="testimonials__content">
                        <h4 className="text-18 fw-500 text-orange-1">
                          Great Work
                        </h4>
                        <p className="lh-2 fw-500 mt-15 mb-30">
                          {" "}
                          “I think Educrat is the best theme I ever seen this
                          year. Amazing design, easy to customize and a design
                          quality superlative account on its cloud platform for
                          the optimized performance”
                        </p>

                        <div className="row x-gap-20 y-gap-20 items-center border-top-light pt-15">
                          <div className="col-auto">
                            <img
                              src="/assets/img/testimonials/2.png"
                              alt="image"
                            />
                          </div>

                          <div className="col-auto">
                            <div className="lh-12 fw-500 text-dark-1">
                              Ronald Richards
                            </div>
                            <div className="text-13 lh-1 mt-5">
                              President of Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div
                      data-anim="slide-left"
                      className="pt-40 pb-30 px-40 border-light rounded-8"
                      style={{
                        // height: "295px",
                        width: "400px",
                      }}
                    >
                      <div className="testimonials__content">
                        <h4 className="text-18 fw-500 text-orange-1">
                          Great Work
                        </h4>
                        <p className="lh-2 fw-500 mt-15 mb-30">
                          {" "}
                          “I think Educrat is the best theme I ever seen this
                          year. Amazing design, easy to customize and a design
                          quality superlative account on its cloud platform for
                          the optimized performance”
                        </p>

                        <div className="row x-gap-20 y-gap-20 items-center border-top-light pt-15">
                          <div className="col-auto">
                            <img
                              src="/assets/img/testimonials/3.png"
                              alt="image"
                            />
                          </div>

                          <div className="col-auto">
                            <div className="lh-12 fw-500 text-dark-1">
                              Annette Black
                            </div>
                            <div className="text-13 lh-1 mt-5">
                              Nursing Assistant
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="d-flex x-gap-15 items-center pt-30">
                <div className="col-auto">
                  <button
                    className="d-flex items-center text-24 arrow-left-hover js-prev"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <i className="icon icon-arrow-left"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <div className="pagination -arrows js-pagination"></div>
                </div>
                <div className="col-auto">
                  <button
                    className="d-flex items-center text-24 arrow-right-hover js-next"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="composition -type-7">
              <div className="-el-1">
                <img
                  className="w-1/1"
                  src="/assets/img/home-8/testimonials/1.png"
                  alt="image"
                />
              </div>

              <div className="-el-2">
                <button className="d-flex items-center justify-center bg-white size-90 rounded-full">
                  <div className="icon-play text-30"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentsSay;
