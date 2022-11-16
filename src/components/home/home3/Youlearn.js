import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Youlearn() {
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
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">What will you learn</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div data-anim-wrap className="pt-60 lg:pt-50">
          <div
            className="overflow-hidden js-section-slider"
            data-gap="30"
            data-loop
            data-pagination
            data-slider-cols="xl-6 lg-4 md-3 sm-2"
          >
            <div>
              <Slider {...settings} ref={sliderRef}>
                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-1"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/1.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">
                      Node Js
                    </h5>
                  </div>
                </div>

                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-2"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/2.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">
                      HTML5
                    </h5>
                  </div>
                </div>

                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-3"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/3.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">
                      JQuery
                    </h5>
                  </div>
                </div>

                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-4"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/4.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">CSS</h5>
                  </div>
                </div>

                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-5"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/5.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">
                      React Native
                    </h5>
                  </div>
                </div>

                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-6"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/6.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">
                      Vue Js
                    </h5>
                  </div>
                </div>
                <div className="swiper-slide h-100">
                  <div
                    data-anim-child="slide-left delay-3"
                    className="infoCard -type-1"
                    style={{
                      height: "176px",
                      width: "190px",
                      marginLeft: "8px",
                    }}
                  >
                    <div className="infoCard__image">
                      <img src="/assets/img/home-3/learn/3.png" alt="image" />
                    </div>
                    <h5 className="infoCard__title text-17 lh-15 mt-10">
                      JQuery
                    </h5>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
              <div className="col-auto">
                <div className="pagination -arrows js-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youlearn;
