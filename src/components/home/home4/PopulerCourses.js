import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function PopulerCourses() {
  const sliderRef = useRef(null);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const settings = {
    dots: false,
    centerMode: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
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
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Our Most Popular Courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative pt-60 lg:pt-50 js-section-slider"
          data-gap="30"
          data-slider-cols="xl-3 lg-2"
          // style={{ width: "120%" }}
        >
          <div className="">
            <Slider {...settings} ref={sliderRef}>
              {courses.slice(0, 49).map((course) => (
                <div key={course.id} className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-1"
                    style={{
                      marginLeft: "20px",
                    }}
                  >
                    <Link
                      to={`/courseSingle1/${course.id}`}
                      className="coursesCard -type-1 shadow-3 rounded-8 bg-white"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-top-8">
                          <img className="w-1/1" src={course.img} alt="image" />
                          <div className="coursesCard__image_overlay rounded-top-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 pt-20 pb-15 pl-30 pr-40">
                        <div className="d-flex items-center">
                          <div className="text-14 lh-1 text-yellow-1 mr-10">
                            4.5
                          </div>
                          <div className="d-flex x-gap-5 items-center">
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                          </div>
                          <div className="text-13 lh-1 ml-10">(1991)</div>
                        </div>

                        <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                          Learn Figma - UI/UX Design Essential Training
                        </div>

                        <div className="d-flex x-gap-10 items-center pt-10">
                          <div className="d-flex items-center">
                            <div className="mr-8">
                              <img
                                src="/assets/img/coursesCards/icons/1.svg"
                                alt="icon"
                              />
                            </div>
                            <div className="text-14 lh-1">6 lesson</div>
                          </div>

                          <div className="d-flex items-center">
                            <div className="mr-8">
                              <img
                                src="/assets/img/coursesCards/icons/2.svg"
                                alt="icon"
                              />
                            </div>
                            <div className="text-14 lh-1">3h 56m</div>
                          </div>

                          <div className="d-flex items-center">
                            <div className="mr-8">
                              <img
                                src="/assets/img/coursesCards/icons/3.svg"
                                alt="icon"
                              />
                            </div>
                            <div className="text-14 lh-1">Beginner</div>
                          </div>
                        </div>

                        <div className="coursesCard-footer">
                          <div className="coursesCard-footer__author">
                            <img
                              src="/assets/img/general/avatar-1.png"
                              alt="image"
                            />
                            <div>Ali Tufan</div>
                          </div>

                          <div className="coursesCard-footer__price">
                            <div>$179</div>
                            <div>$79</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <button
            className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <i className="icon icon-arrow-left text-24"></i>
          </button>

          <button
            className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <i className="icon icon-arrow-right text-24"></i>
          </button>
        </div>

        <div className="row justify-center pt-60 lg:pt-50">
          <div className="col-auto">
            <a href="#" className="button -icon -purple-1 text-white">
              Browse All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopulerCourses;
