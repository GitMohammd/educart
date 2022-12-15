import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopCourses() {
  const sliderRef = useRef(null);
  const settings = {
    // centerMode: true,
    arrows: false,
    infinite: true,
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
    <section className="layout-pt-lg layout-pb-lg section-bg">
      <div className="section-bg__item bg-light-6"></div>

      <div data-anim-wrap className="container">
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Top courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-lg-auto">
            <div className="d-inline-block">
              <a href="#" className="button -icon -light-11 text-purple-1">
                All Courses
                <i className="icon-arrow-top-right text-13 ml-10"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden pt-60 lg:pt-50 js-section-slider"
            data-gap="30"
            data-loop
            data-pagination
            data-nav-prev="js-courses-prev"
            data-nav-next="js-courses-next"
            data-slider-cols="xl-4 lg-3 md-2 sm-2"
          >
            <div>
              <Slider {...settings} ref={sliderRef}>
                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-1"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/1.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-2"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/2.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                          <div>
                            <div className="px-15 rounded-200 bg-purple-1">
                              <span className="text-11 lh-1 uppercase fw-500 text-white">
                                Popular
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="px-15 rounded-200 bg-green-1">
                              <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                Best sellers
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          Complete Python Bootcamp From Zero to Hero in Python
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-3"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/3.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          Angular - The Complete Guide (2022 Edition)
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-4"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/4.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          The Ultimate Drawing Course Beginner to
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-5"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/5.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          Photography Masterclass: A Complete Guide to
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-6"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/6.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          Instagram Marketing 2021: Complete Guide To Instagram
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-7"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/7.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          Complete Blender Creator: Learn 3D Modelling for
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
                    </a>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-up delay-8"
                    // style={{
                    //   height: "388px",
                    //   width: "300px",
                    // }}
                    style={{
                      marginLeft: "15px",
                      marginRight: "15px",
                    }}
                  >
                    <a
                      href="courses-single-1.html"
                      className="coursesCard -type-1 px-10 py-10 border-light bg-white rounded-8"
                    >
                      <div className="relative">
                        <div className="coursesCard__image overflow-hidden rounded-8">
                          <img
                            className="w-1/1"
                            src="/assets/img/coursesCards/8.png"
                            alt="image"
                          />
                          <div className="coursesCard__image_overlay rounded-8"></div>
                        </div>
                        <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                      </div>

                      <div className="h-100 px-10 pt-10">
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
                          The Complete Financial Analyst Training &amp;
                          Investing
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
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <button
            className="section-slider-nav -prev -dark-bg-dark-2 -outline-dark-1 -absolute-out size-50 rounded-full xl:d-none js-courses-prev"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <i className="icon icon-arrow-left text-24"></i>
          </button>

          <button
            className="section-slider-nav -next -dark-bg-dark-2 -outline-dark-1 -absolute-out size-50 rounded-full xl:d-none js-courses-next"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <i className="icon icon-arrow-right text-24"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopCourses;
