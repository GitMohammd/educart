import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function LetestBook() {
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
    <section className="layout-pt-md layout-pb-md">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Latest Books</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="pt-60 lg:pt-40">
          <div
            className="overflow-hidden js-section-slider"
            data-loop
            data-gap="30"
            data-pagination
            data-slider-cols="xl-6 lg-6 md-4 sm-3 base-2"
          >
            <div className="">
              <Slider {...settings} ref={sliderRef}>
                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/1.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">HTML 5 Maker</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/2.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">CSS Master</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/3.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">Vue JS</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/6.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">HTML 5 Maker</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/4.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">HTML 5 &amp; CSS3</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/5.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">CSS Developer</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="" style={{ height: "247px", width: "190px" }}>
                    <img
                      className="w-1/1"
                      src="/assets/img/books/6.png"
                      alt="book"
                    />
                    <h5 className="text-17 fw-500 mt-15">HTML 5 Maker</h5>

                    <div className="d-flex items-center mt-10">
                      <div className="d-flex x-gap-5">
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                        <div className="icon-star text-9 text-yellow-1"></div>
                      </div>
                      <div className="text-13 lh-1 ml-10">(1991)</div>
                    </div>

                    <div className="d-flex items-center pt-15">
                      <div className="text-15 lh-1 line-through">$179</div>
                      <div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
                        $79
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="d-flex x-gap-15 items-center justify-center pt-60 lg:pt-40">
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

export default LetestBook;
