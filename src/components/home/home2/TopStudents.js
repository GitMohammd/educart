import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopStudents() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    // centerMode: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
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
      <div className="container">
        <div className="row y-gap-15 justify-between items-end">
          <div className="col-lg-6">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title">Top Students</h2>

              <p className="sectionTitle__text">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="col-auto">
              <a
                href="#"
                className="button -icon -outline-purple-1 text-purple-1 fw-500"
              >
                View All Students
                <span className="icon-arrow-top-right text-14 ml-10"></span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-60 lg:pt-40 js-section-slider"
          data-gap="30"
          data-pagination="js-students-slider-pagination"
          data-nav-prev="js-students-slider-prev"
          data-nav-next="js-students-slider-next"
          data-slider-cols="xl-4 lg-3 md-2"
          style={{ width: "120%" }}
        >
          <div className="">
            <Slider {...settings} ref={sliderRef}>
              <div className="">
                <div
                  className="teamCard -type-2 bg-white"
                  style={{
                    marginRightt: "15px",
                    marginLeft: "15px",
                  }}
                >
                  <div className="teamCard__content">
                    <div className="teamCard__img">
                      <img
                        src="/assets/img/home-2/students/1.png"
                        alt="image"
                      />
                    </div>

                    <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                      Brooklyn Simmons
                    </h4>
                    <div className="teamCard__subtitle text-14 lh-1 mt-5">
                      Web Designer
                    </div>

                    <div className="teamCard__socials d-flex x-gap-20 pt-12">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>

                    <div className="teamCard-tags pt-20">
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Design</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Art</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Graphic</div>
                      </div>
                    </div>

                    <div className="teamCard__button mt-20">
                      <a
                        href="#"
                        className="button -icon -outline-purple-1 -rounded text-purple-1"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  className="teamCard -type-2 bg-white"
                  style={{
                    marginRightt: "15px",
                    marginLeft: "15px",
                  }}
                >
                  <div className="teamCard__content">
                    <div className="teamCard__img">
                      <img
                        src="/assets/img/home-2/students/2.png"
                        alt="image"
                      />
                    </div>

                    <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                      Cody Fisher
                    </h4>
                    <div className="teamCard__subtitle text-14 lh-1 mt-5">
                      Dog Trainer
                    </div>

                    <div className="teamCard__socials d-flex x-gap-20 pt-12">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>

                    <div className="teamCard-tags pt-20">
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Design</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Art</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Graphic</div>
                      </div>
                    </div>

                    <div className="teamCard__button mt-20">
                      <a
                        href="#"
                        className="button -icon -outline-purple-1 -rounded text-purple-1"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  className="teamCard -type-2 bg-white"
                  style={{
                    marginRightt: "15px",
                    marginLeft: "15px",
                  }}
                >
                  <div className="teamCard__content">
                    <div className="teamCard__img">
                      <img
                        src="/assets/img/home-2/students/3.png"
                        alt="image"
                      />
                    </div>

                    <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                      Marvin McKinney
                    </h4>
                    <div className="teamCard__subtitle text-14 lh-1 mt-5">
                      President of Sales
                    </div>

                    <div className="teamCard__socials d-flex x-gap-20 pt-12">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>

                    <div className="teamCard-tags pt-20">
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Design</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Art</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Graphic</div>
                      </div>
                    </div>

                    <div className="teamCard__button mt-20">
                      <a
                        href="#"
                        className="button -icon -outline-purple-1 -rounded text-purple-1"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  className="teamCard -type-2 bg-white"
                  style={{
                    marginRightt: "15px",
                    marginLeft: "15px",
                  }}
                >
                  <div className="teamCard__content">
                    <div className="teamCard__img">
                      <img
                        src="/assets/img/home-2/students/4.png"
                        alt="image"
                      />
                    </div>

                    <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                      Jane Cooper
                    </h4>
                    <div className="teamCard__subtitle text-14 lh-1 mt-5">
                      Marketing Coordinator
                    </div>

                    <div className="teamCard__socials d-flex x-gap-20 pt-12">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>

                    <div className="teamCard-tags pt-20">
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Design</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Art</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Graphic</div>
                      </div>
                    </div>

                    <div className="teamCard__button mt-20">
                      <a
                        href="#"
                        className="button -icon -outline-purple-1 -rounded text-purple-1"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div
                  className="teamCard -type-2 bg-white"
                  style={{
                    marginRightt: "15px",
                    marginLeft: "15px",
                  }}
                >
                  <div className="teamCard__content">
                    <div className="teamCard__img">
                      <img
                        src="/assets/img/home-2/students/5.png"
                        alt="image"
                      />
                    </div>

                    <h4 className="teamCard__title text-17 lh-15 fw-500 mt-12">
                      Ali Tufan
                    </h4>
                    <div className="teamCard__subtitle text-14 lh-1 mt-5">
                      Marketing Coordinator
                    </div>

                    <div className="teamCard__socials d-flex x-gap-20 pt-12">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>

                    <div className="teamCard-tags pt-20">
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Design</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Art</div>
                      </div>
                      <div className="teamCard-tags__item">
                        <div className="teamCard-tags__tag">Graphic</div>
                      </div>
                    </div>

                    <div className="teamCard__button mt-20">
                      <a
                        href="#"
                        className="button -icon -outline-purple-1 -rounded text-purple-1"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <br />
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-auto">
            <div className="d-flex x-gap-15 justify-center items-center">
              <div className="col-auto">
                <button
                  className="d-flex items-center text-24 arrow-left-hover js-students-slider-prev"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -arrows js-students-slider-pagination"></div>
              </div>
              <div className="col-auto">
                <button
                  className="d-flex items-center text-24 arrow-right-hover js-students-slider-next"
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

export default TopStudents;
