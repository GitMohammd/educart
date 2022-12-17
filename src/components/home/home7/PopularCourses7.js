import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function PopularCourses7() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
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
    <section class="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap class="container">
        <div class="row y-gap-15 justify-between items-center">
          <div class="col-lg-6">
            <div class="sectionTitle ">
              <h2 class="sectionTitle__title ">Our Most Popular Courses</h2>

              <p class="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div class="col-lg-auto">
            <a href="#" class="button -icon -purple-3 text-purple-1">
              All Courses
              <i class="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div class="relative">
          <div
            class="overflow-hidden pt-60 lg:pt-50 js-section-slider"
            data-gap="30"
            data-nav-prev="js-courses-prev"
            data-nav-next="js-courses-next"
            data-slider-cols="xl-4 lg-3 md-2 sm-2"
          >
            <div className="pb-3">
              <Slider {...settings} ref={sliderRef}>
                {courses.slice(0, 49).map((course) => (
                  <div key={course.id} className="swiper-slide">
                    <div
                      data-anim-child="slide-up delay-1"
                      style={{
                        // height: "210px",
                        // width: "630px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <Link
                        to={`/courseSingle1/${course.id}`}
                        className="coursesCard -type-1 border-light rounded-8"
                      >
                        <div className="relative">
                          <div className="coursesCard__image overflow-hidden rounded-8">
                            <img
                              className="w-1/1"
                              src={course.img}
                              alt="image"
                            />
                            <div className="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div className="h-100 pt-15">
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
                            {course.name}
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
          </div>

          <button
            class="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-prev"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <i class="icon icon-arrow-left text-24"></i>
          </button>

          <button
            class="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-next"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <i class="icon icon-arrow-right text-24"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularCourses7;
