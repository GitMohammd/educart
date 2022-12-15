import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function UpcomingEvents() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    // centerMode: true,
    arrows: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section className="layout-pt-lg layout-pb-lg border-top-light">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-60 lg:pt-50 js-section-slider"
          data-gap="30"
          data-pagination
          data-slider-cols="xl-3 lg-3 md-2"
        >
          <div className="">
            <Slider {...settings} ref={sliderRef}>
              <div className="swiper-slide">
                <div
                  className="eventCard -type-3 bg-light-4 rounded-8"
                  style={{
                    height: "350px",
                    // width: "410px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="eventCard__date">
                    <span className="text-45 lh-1 fw-700 text-dark-1">15</span>
                    <span className="text-18 lh-1 fw-500 ml-15">JUNE</span>
                  </div>

                  <h4 className="eventCard__title text-24 lh-15 fw-500">
                    Educational technology and mobile learning
                  </h4>

                  <div className="eventCard__button">
                    <a href="#" className="button -icon -purple-1 text-white">
                      Buy Ticket
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="eventCard -type-3 bg-light-4 rounded-8"
                  style={{
                    height: "350px",
                    // width: "410px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="eventCard__date">
                    <span className="text-45 lh-1 fw-700 text-dark-1">15</span>
                    <span className="text-18 lh-1 fw-500 ml-15">JUNE</span>
                  </div>

                  <h4 className="eventCard__title text-24 lh-15 fw-500">
                    We are changing the way the world learns
                  </h4>

                  <div className="eventCard__button">
                    <a href="#" className="button -icon -purple-1 text-white">
                      Buy Ticket
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="eventCard -type-3 bg-light-4 rounded-8"
                  style={{
                    height: "350px",
                    // width: "410px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="eventCard__date">
                    <span className="text-45 lh-1 fw-700 text-dark-1">15</span>
                    <span className="text-18 lh-1 fw-500 ml-15">JUNE</span>
                  </div>

                  <h4 className="eventCard__title text-24 lh-15 fw-500">
                    Guide to visas and funding to study in the UK
                  </h4>

                  <div className="eventCard__button">
                    <a href="#" className="button -icon -purple-1 text-white">
                      Buy Ticket
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="eventCard -type-3 bg-light-4 rounded-8"
                  style={{
                    height: "350px",
                    // width: "410px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="eventCard__date">
                    <span className="text-45 lh-1 fw-700 text-dark-1">15</span>
                    <span className="text-18 lh-1 fw-500 ml-15">JUNE</span>
                  </div>

                  <h4 className="eventCard__title text-24 lh-15 fw-500">
                    Achieving Advanced in Insights with Big
                  </h4>

                  <div className="eventCard__button">
                    <a href="#" className="button -icon -purple-1 text-white">
                      Buy Ticket
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="eventCard -type-3 bg-light-4 rounded-8"
                  style={{
                    height: "350px",
                    // width: "410px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="eventCard__date">
                    <span className="text-45 lh-1 fw-700 text-dark-1">15</span>
                    <span className="text-18 lh-1 fw-500 ml-15">JUNE</span>
                  </div>

                  <h4 className="eventCard__title text-24 lh-15 fw-500">
                    Educational technology and mobile learning
                  </h4>

                  <div className="eventCard__button">
                    <a href="#" className="button -icon -purple-1 text-white">
                      Buy Ticket
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="eventCard -type-3 bg-light-4 rounded-8"
                  style={{
                    height: "350px",
                    // width: "410px",
                    marginLeft: "25px",
                  }}
                >
                  <div className="eventCard__date">
                    <span className="text-45 lh-1 fw-700 text-dark-1">15</span>
                    <span className="text-18 lh-1 fw-500 ml-15">JUNE</span>
                  </div>

                  <h4 className="eventCard__title text-24 lh-15 fw-500">
                    We are changing the way the world learns
                  </h4>

                  <div className="eventCard__button">
                    <a href="#" className="button -icon -purple-1 text-white">
                      Buy Ticket
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
            <br />
          </div>

          <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
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
    </section>
  );
}

export default UpcomingEvents;
