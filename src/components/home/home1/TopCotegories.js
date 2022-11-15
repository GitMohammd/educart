import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopCotegories() {
  const sliderRef = useRef(0);
  const settings = {
    // centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <section className="layout-pt-md layout-pb-md">
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
        <div className="pt-50 ">
          <Slider {...settings} ref={sliderRef}>
            <div style={{ margin: "100px" }}>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-2"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/1.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Design <br /> Creative
                    </div>
                    <div className="featureCard__text">573+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-3"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/2.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Sales <br /> Marketing
                    </div>
                    <div className="featureCard__text">565+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-4"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/3.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Development <br /> IT
                    </div>
                    <div className="featureCard__text">126+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-5"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/4.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Engineering <br /> Architecture
                    </div>
                    <div className="featureCard__text">35+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-6"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/5.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Personal <br /> Development
                    </div>
                    <div className="featureCard__text">908+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-7"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/6.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Finance <br /> Accounting
                    </div>
                    <div className="featureCard__text">129+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="swiper-slide" style={{ width: "190px" }}>
                <div
                  data-anim-child="slide-left delay-7"
                  className="featureCard -type-1 -featureCard-hover"
                >
                  <div className="featureCard__content">
                    <div className="featureCard__icon">
                      <img src="/assets/img/featureCards/6.svg" alt="icon" />
                    </div>
                    <div className="featureCard__title">
                      Finance <br /> Accounting
                    </div>
                    <div className="featureCard__text">129+ Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
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
          {/* <div className="">
            <SampleNextArrow />
            <SamplePrevArrow />
          </div> */}
          {/* <button className="d-flex items-center text-24 arrow-left-hover js-prev">
            <i className="icon icon-arrow-left"></i>
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default TopCotegories;
