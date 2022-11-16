import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function UpcommingEvent6() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
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
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <a
              href="#"
              className="button -icon -purple-3 text-purple-1 -rounded"
            >
              Browse Event
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="pt-60 lg:pt-40">
          <div
            className="overflow-hidden js-section-slider"
            data-gap="30"
            data-loop
            data-pagination
            data-slider-cols="xl-4 lg-3 md-2 sm-1 base-1"
          >
            <div className="">
              <Slider {...settings} ref={sliderRef}>
                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-2"
                    className="bg-white rounded-8 shadow-1 px-20 py-20"
                    style={{
                      // height: "210px",
                      // width: "630px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                        <div className="text-17 lh-15 text-white fw-500">
                          15
                        </div>
                        <div className="lh-1 text-white fw-500">JUNE</div>
                      </div>
                      <div className="text-17 lh-15 text-dark-1 fw-500">
                        Medical Chemistry: The Molecular Basis
                      </div>
                    </div>

                    <div className="d-flex items-center mt-20">
                      <div className="icon-location text-14 mr-10"></div>
                      <div className="text-14 lh-1">London, UK</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-3"
                    className="bg-white rounded-8 shadow-1 px-20 py-20"
                    style={{
                      // height: "210px",
                      // width: "630px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                        <div className="text-17 lh-15 text-white fw-500">
                          15
                        </div>
                        <div className="lh-1 text-white fw-500">JUNE</div>
                      </div>
                      <div className="text-17 lh-15 text-dark-1 fw-500">
                        Medical Chemistry: The Molecular Basis
                      </div>
                    </div>

                    <div className="d-flex items-center mt-20">
                      <div className="icon-location text-14 mr-10"></div>
                      <div className="text-14 lh-1">London, UK</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-4"
                    className="bg-white rounded-8 shadow-1 px-20 py-20"
                    style={{
                      // height: "210px",
                      // width: "630px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                        <div className="text-17 lh-15 text-white fw-500">
                          15
                        </div>
                        <div className="lh-1 text-white fw-500">JUNE</div>
                      </div>
                      <div className="text-17 lh-15 text-dark-1 fw-500">
                        Medical Chemistry: The Molecular Basis
                      </div>
                    </div>

                    <div className="d-flex items-center mt-20">
                      <div className="icon-location text-14 mr-10"></div>
                      <div className="text-14 lh-1">London, UK</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-5"
                    className="bg-white rounded-8 shadow-1 px-20 py-20"
                    style={{
                      // height: "210px",
                      // width: "630px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                        <div className="text-17 lh-15 text-white fw-500">
                          15
                        </div>
                        <div className="lh-1 text-white fw-500">JUNE</div>
                      </div>
                      <div className="text-17 lh-15 text-dark-1 fw-500">
                        Medical Chemistry: The Molecular Basis
                      </div>
                    </div>

                    <div className="d-flex items-center mt-20">
                      <div className="icon-location text-14 mr-10"></div>
                      <div className="text-14 lh-1">London, UK</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-6"
                    className="bg-white rounded-8 shadow-1 px-20 py-20"
                    style={{
                      // height: "210px",
                      // width: "630px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                        <div className="text-17 lh-15 text-white fw-500">
                          15
                        </div>
                        <div className="lh-1 text-white fw-500">JUNE</div>
                      </div>
                      <div className="text-17 lh-15 text-dark-1 fw-500">
                        Medical Chemistry: The Molecular Basis
                      </div>
                    </div>

                    <div className="d-flex items-center mt-20">
                      <div className="icon-location text-14 mr-10"></div>
                      <div className="text-14 lh-1">London, UK</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-7"
                    className="bg-white rounded-8 shadow-1 px-20 py-20"
                    style={{
                      // height: "210px",
                      // width: "630px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div className="size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20">
                        <div className="text-17 lh-15 text-white fw-500">
                          15
                        </div>
                        <div className="lh-1 text-white fw-500">JUNE</div>
                      </div>
                      <div className="text-17 lh-15 text-dark-1 fw-500">
                        Medical Chemistry: The Molecular Basis
                      </div>
                    </div>

                    <div className="d-flex items-center mt-20">
                      <div className="icon-location text-14 mr-10"></div>
                      <div className="text-14 lh-1">London, UK</div>
                    </div>
                  </div>
                </div>
              </Slider>
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
      </div>
    </section>
  );
}

export default UpcommingEvent6;
