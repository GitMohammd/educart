import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Testimonials() {
  const sliderRef = useRef(0);
  const settings = {
    // centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

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
    <section className="layout-pt-lg layout-pb-lg section-bg">
      <div className="section-bg__item bg-light-6"></div>

      <div className="container">
        <div className="row y-gap-20 justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Testimonials</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-center pt-60">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="overflow-hidden js-testimonials-slider">
              <div className="">
                <Slider {...settings} ref={sliderRef}>
                  <div className="swiper-slide h-100">
                    <div
                      data-anim="slide-up"
                      className="testimonials -type-2 text-center"
                    >
                      <div className="testimonials__icon d-flex justify-center">
                        <img src="/assets/img/misc/quote.svg" alt="quote" />
                      </div>
                      <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                        It is no exaggeration to say this Educrat experience was
                        transformative–both professionally and personally. This
                        workshop will long remain a high point of my life.
                      </div>
                      <br />
                      <div className="col-auto">
                        <div className="pagination__item is-active d-flex justify-center">
                          <img
                            className=""
                            src="/assets/img/home-3/testimonials/1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <h5 className="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div className="mt-5">Product Manager, Apple Inc</div>
                    </div>
                  </div>

                  <div className="swiper-slide h-100">
                    <div
                      data-anim="slide-up"
                      className="testimonials -type-2 text-center"
                    >
                      <div className="d-flex justify-center testimonials__icon">
                        <img src="/assets/img/misc/quote.svg" alt="quote" />
                      </div>
                      <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                        It is no exaggeration to say this Educrat experience was
                        transformative–both professionally and personally. This
                        workshop will long remain a high point of my life.
                      </div>
                      <div className="col-auto">
                        <div className="pagination__item is-active d-flex justify-center">
                          <img
                            className=""
                            src="/assets/img/home-3/testimonials/2.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <h5 className="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div className="mt-5">Product Manager, Apple Inc</div>
                    </div>
                  </div>

                  <div className="swiper-slide h-100">
                    <div
                      data-anim="slide-up"
                      className="testimonials -type-2 text-center"
                    >
                      <div className="testimonials__icon d-flex justify-center">
                        <img src="/assets/img/misc/quote.svg" alt="quote" />
                      </div>
                      <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                        It is no exaggeration to say this Educrat experience was
                        transformative–both professionally and personally. This
                        workshop will long remain a high point of my life.
                      </div>
                      <div className="col-auto">
                        <div className="pagination__item is-active d-flex justify-center">
                          <img
                            className=""
                            src="/assets/img/home-3/testimonials/3.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <h5 className="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div className="mt-5">Product Manager, Apple Inc</div>
                    </div>
                  </div>

                  <div className="swiper-slide h-100">
                    <div
                      data-anim="slide-up"
                      className="testimonials -type-2 text-center"
                    >
                      <div className="testimonials__icon d-flex justify-center">
                        <img src="/assets/img/misc/quote.svg" alt="quote" />
                      </div>
                      <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                        It is no exaggeration to say this Educrat experience was
                        transformative–both professionally and personally. This
                        workshop will long remain a high point of my life.
                      </div>
                      <div className="col-auto">
                        <div className="pagination__item is-active d-flex justify-center">
                          <img
                            className=""
                            src="/assets/img/home-3/testimonials/4.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <h5 className="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div className="mt-5">Product Manager, Apple Inc</div>
                    </div>
                  </div>

                  <div className="swiper-slide h-100">
                    <div
                      data-anim="slide-up"
                      className="testimonials -type-2 text-center"
                    >
                      <div className="testimonials__icon d-flex justify-center">
                        <img src="/assets/img/misc/quote.svg" alt="quote" />
                      </div>
                      <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                        It is no exaggeration to say this Educrat experience was
                        transformative–both professionally and personally. This
                        workshop will long remain a high point of my life.
                      </div>
                      <div className="col-auto">
                        <div className="pagination__item is-active d-flex justify-center">
                          <img
                            className=""
                            src="/assets/img/home-3/testimonials/5.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <h5 className="text-17 lh-15 fw-500">Ali Tufan</h5>
                      <div className="mt-5">Product Manager, Apple Inc</div>
                    </div>
                  </div>
                </Slider>
              </div>

              {/* <div className="pt-60 lg:pt-40">
                <div className="pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination">
                  <div className="col-auto">
                    <div className="pagination__item is-active">
                      <img
                        src="/assets/img/home-3/testimonials/1.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="pagination__item ">
                      <img
                        src="/assets/img/home-3/testimonials/2.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="pagination__item ">
                      <img
                        src="/assets/img/home-3/testimonials/3.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="pagination__item ">
                      <img
                        src="/assets/img/home-3/testimonials/4.png"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="pagination__item ">
                      <img
                        src="/assets/img/home-3/testimonials/5.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
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
      </div>
    </section>
  );
}

export default Testimonials;
