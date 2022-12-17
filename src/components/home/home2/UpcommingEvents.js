import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function UpcommingEvents() {
  const sliderRef = useRef(null);
  const settings = {
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row y-gap-15 justify-between items-end">
          <div className="col-lg-6">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title">Upcoming Events</h2>

              <p className="sectionTitle__text">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex justify-center x-gap-15 items-center">
              <div className="col-auto">
                <button
                  className="d-flex items-center text-24 arrow-left-hover js-events-slider-prev"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-events-slider-pagination"></div>
              </div>
              <div className="col-auto">
                <button
                  className="d-flex items-center text-24 arrow-right-hover js-events-slider-next"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-60 lg:pt-40 js-section-slider"
          data-gap="30"
          data-pagination="js-events-slider-pagination"
          data-nav-prev="js-events-slider-prev"
          data-nav-next="js-events-slider-next"
          data-slider-cols="xl-3 lg-2"
        >
          <div>
            <Slider {...settings} ref={sliderRef}>
              <Link to={"/eventSingle"}>
                <div
                  data-anim="slide-left delay-2"
                  className="eventCard -type-1"
                  style={{ marginRight: "30px" }}
                >
                  <div className="eventCard__img">
                    <img src="/assets/img/home-2/events/1.png" alt="image" />
                  </div>

                  <div className="eventCard__bg bg-white">
                    <div className="eventCard__content y-gap-10">
                      <div className="eventCard__inner">
                        <h4 className="eventCard__title text-17 fw-500">
                          Summer School 2022
                        </h4>
                        <div className="d-flex x-gap-15 pt-10">
                          <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                          </div>
                        </div>
                      </div>

                      <div className="eventCard__button">
                        <a
                          href="#"
                          className="button -sm -rounded -purple-1 text-white px-25"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/eventSingle"}>
                <div
                  data-anim="slide-left delay-3"
                  className="eventCard -type-1"
                  style={{ marginRight: "30px" }}
                >
                  <div className="eventCard__img">
                    <img src="/assets/img/home-2/events/2.png" alt="image" />
                  </div>

                  <div className="eventCard__bg bg-white">
                    <div className="eventCard__content y-gap-10">
                      <div className="eventCard__inner">
                        <h4 className="eventCard__title text-17 fw-500">
                          Summer School 2022
                        </h4>
                        <div className="d-flex x-gap-15 pt-10">
                          <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                          </div>
                        </div>
                      </div>

                      <div className="eventCard__button">
                        <a
                          href="#"
                          className="button -sm -rounded -purple-1 text-white px-25"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/eventSingle"}>
                <div
                  data-anim="slide-left delay-4"
                  className="eventCard -type-1"
                  style={{ marginRight: "30px" }}
                >
                  <div className="eventCard__img">
                    <img src="/assets/img/home-2/events/3.png" alt="image" />
                  </div>

                  <div className="eventCard__bg bg-white">
                    <div className="eventCard__content y-gap-10">
                      <div className="eventCard__inner">
                        <h4 className="eventCard__title text-17 fw-500">
                          Summer School 2022
                        </h4>
                        <div className="d-flex x-gap-15 pt-10">
                          <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                          </div>
                        </div>
                      </div>

                      <div className="eventCard__button">
                        <a
                          href="#"
                          className="button -sm -rounded -purple-1 text-white px-25"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/eventSingle"}>
                <div
                  data-anim="slide-left delay-5"
                  className="eventCard -type-1"
                  style={{ marginRight: "30px" }}
                >
                  <div className="eventCard__img">
                    <img src="/assets/img/home-2/events/4.png" alt="image" />
                  </div>

                  <div className="eventCard__bg bg-white">
                    <div className="eventCard__content y-gap-10">
                      <div className="eventCard__inner">
                        <h4 className="eventCard__title text-17 fw-500">
                          Summer School 2022
                        </h4>
                        <div className="d-flex x-gap-15 pt-10">
                          <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                          </div>
                        </div>
                      </div>

                      <div className="eventCard__button">
                        <a
                          href="#"
                          className="button -sm -rounded -purple-1 text-white px-25"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/eventSingle"}>
                {" "}
                <div
                  data-anim="slide-left delay-6"
                  className="eventCard -type-1"
                  style={{ marginRight: "30px" }}
                >
                  <div className="eventCard__img">
                    <img src="/assets/img/home-2/events/5.png" alt="image" />
                  </div>

                  <div className="eventCard__bg bg-white">
                    <div className="eventCard__content y-gap-10">
                      <div className="eventCard__inner">
                        <h4 className="eventCard__title text-17 fw-500">
                          Summer School 2022
                        </h4>
                        <div className="d-flex x-gap-15 pt-10">
                          <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                          </div>
                        </div>
                      </div>

                      <div className="eventCard__button">
                        <a
                          href="#"
                          className="button -sm -rounded -purple-1 text-white px-25"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/eventSingle"}>
                <div
                  data-anim="slide-left delay-7"
                  className="eventCard -type-1"
                  style={{ marginRight: "30px" }}
                >
                  <div className="eventCard__img">
                    <img src="/assets/img/home-2/events/6.png" alt="image" />
                  </div>

                  <div className="eventCard__bg bg-white">
                    <div className="eventCard__content y-gap-10">
                      <div className="eventCard__inner">
                        <h4 className="eventCard__title text-17 fw-500">
                          Summer School 2022
                        </h4>
                        <div className="d-flex x-gap-15 pt-10">
                          <div className="d-flex items-center">
                            <div className="icon-calendar-2 text-16 mr-8"></div>
                            <div className="text-14">6 April, 2022</div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="icon-location text-16 mr-8"></div>
                            <div className="text-14">London, UK</div>
                          </div>
                        </div>
                      </div>

                      <div className="eventCard__button">
                        <a
                          href="#"
                          className="button -sm -rounded -purple-1 text-white px-25"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Slider>
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-auto">
            <Link
              to={"/eventList1"}
              className="button -icon -outline-purple-1 text-purple-1 fw-500"
            >
              View All Events
              <span className="icon-arrow-top-right text-14 ml-10"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcommingEvents;
