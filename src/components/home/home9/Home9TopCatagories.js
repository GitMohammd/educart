import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home9TopCatagories() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    centerMode: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    <section className="layout-pt-lg layout-pb-md">
      <div data-anim-wrap className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top Categories</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-15 items-center justify-center">
              <div className="col-auto">
                <button
                  className="d-flex items-center text-24 arrow-left-hover js-cat-slider-prev"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-cat-slider-pag"></div>
              </div>
              <div className="col-auto">
                <button
                  className="d-flex items-center text-24 arrow-right-hover js-cat-slider-next"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden pt-50 js-section-slider"
          data-gap="30"
          data-loop
          data-slider-cols="xl-6 lg-4 md-3 sm-2"
          data-pagination="js-cat-slider-pag"
          data-nav-prev="js-cat-slider-prev"
          data-nav-next="js-cat-slider-next"
        >
          <div className="">
            <Slider {...settings} ref={sliderRef}>
              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-2"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/1.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Design Creative</div>
                      <div className="featureCard__text">573+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-3"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/2.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Sales Marketing</div>
                      <div className="featureCard__text">565+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-4"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/3.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Development IT</div>
                      <div className="featureCard__text">126+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-5"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/4.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">
                        Engineering Architecture
                      </div>
                      <div className="featureCard__text">35+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-6"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/5.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">
                        Personal Development
                      </div>
                      <div className="featureCard__text">908+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-7"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/6.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">
                        Finance Accounting
                      </div>
                      <div className="featureCard__text">129+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-100">
                <div
                  data-anim-child="slide-left delay-4"
                  style={{ width: "190px", height: "239" }}
                >
                  <div className="featureCard -type-1 -featureCard-hover-3">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="/assets/img/featureCards/3.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Development IT</div>
                      <div className="featureCard__text">126+ Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home9TopCatagories;
