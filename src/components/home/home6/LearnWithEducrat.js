import React, { useRef } from "react";
import Slider from "react-slick";

function LearnWithEducrat() {
  const sliderRef = useRef(null);
  const settings = {
    // centerMode: true,
    arrows: false,
    infinite: true,
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
          slidesToShow: 1,
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
    <section className="layout-pt-lg bg-dark-2">
      <div data-anim-wrap className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-lg-6 col-md-10">
            <h2 className="text-30 lh-15 text-white">
              People Love To Learn With Educrat
            </h2>
            <p className="text-white mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <div className="row x-gap-50 y-gap-30 pt-60 lg:pt-40 pr-40 md:pr-0">
              <div className="col-sm-6 text-white">
                <div className="text-45 lh-11 fw-700">9/10</div>
                <div className="mt-10">
                  9/10 users reported better learning outcomes.
                </div>
              </div>

              <div className="col-sm-6 text-white">
                <div className="text-45 lh-11 fw-700">85%</div>
                <div className="mt-10">
                  85% of students see their course through to completion
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1">
            <div className="testimonials-slider-2 js-testimonials-slider-2">
              <div className="">
                <Slider {...settings} ref={sliderRef}>
                  <div className=" shadow-2">
                    <div
                      style={{ marginRight: "15px", marginLeft: "15px" }}
                      className="testimonials -type-1"
                    >
                      <div className="testimonials__content">
                        <h4 className="testimonials__title">Great Work</h4>
                        <p className="testimonials__text">
                          {" "}
                          “I think Educrat is the best theme I ever seen this
                          year. Amazing design, easy to customize and a design
                          quality superlative account on its cloud platform for
                          the optimized performance”
                        </p>

                        <div className="testimonials-footer">
                          <div className="testimonials-footer__image">
                            <img
                              src="/assets/img/testimonials/1.png"
                              alt="image"
                            />
                          </div>

                          <div className="testimonials-footer__content">
                            <div className="testimonials-footer__title">
                              Courtney Henry
                            </div>
                            <div className="testimonials-footer__text">
                              Web Designer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" shadow-2">
                    <div
                      style={{ marginRight: "15px", marginLeft: "15px" }}
                      className="testimonials -type-1"
                    >
                      <div className="testimonials__content">
                        <h4 className="testimonials__title">Great Work</h4>
                        <p className="testimonials__text">
                          {" "}
                          “I think Educrat is the best theme I ever seen this
                          year. Amazing design, easy to customize and a design
                          quality superlative account on its cloud platform for
                          the optimized performance”
                        </p>

                        <div className="testimonials-footer">
                          <div className="testimonials-footer__image">
                            <img
                              src="/assets/img/testimonials/2.png"
                              alt="image"
                            />
                          </div>

                          <div className="testimonials-footer__content">
                            <div className="testimonials-footer__title">
                              Ronald Richards
                            </div>
                            <div className="testimonials-footer__text">
                              President of Sales
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" shadow-2">
                    <div
                      style={{ marginRight: "15px", marginLeft: "15px" }}
                      className="testimonials -type-1"
                    >
                      <div className="testimonials__content">
                        <h4 className="testimonials__title">Great Work</h4>
                        <p className="testimonials__text">
                          {" "}
                          “I think Educrat is the best theme I ever seen this
                          year. Amazing design, easy to customize and a design
                          quality superlative account on its cloud platform for
                          the optimized performance”
                        </p>

                        <div className="testimonials-footer">
                          <div className="testimonials-footer__image">
                            <img
                              src="/assets/img/testimonials/3.png"
                              alt="image"
                            />
                          </div>

                          <div className="testimonials-footer__content">
                            <div className="testimonials-footer__title">
                              Annette Black
                            </div>
                            <div className="testimonials-footer__text">
                              Nursing Assistant
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="d-flex x-gap-15 items-center justify-center pt-30">
                <div className="col-auto">
                  <button
                    className="d-flex items-center text-24 arrow-left-hover text-white js-prev"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <i className="icon icon-arrow-left"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <div className="pagination -arrows text-white js-pagination"></div>
                </div>
                <div className="col-auto">
                  <button
                    className="d-flex items-center text-24 arrow-right-hover text-white js-next"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnWithEducrat;
