import React from "react";

function ExploreFeaturedCourses() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div data-anim-wrap className="container">
        <div className="tabs -pills js-tabs">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title ">
                  Explore Featured Courses
                </h2>

                <p className="sectionTitle__text ">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>

            <div className="col-auto">
              <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-200 js-tabs-button is-active"
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    All
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Trending
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-3"
                    type="button"
                  >
                    Popular
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-4"
                    type="button"
                  >
                    Fetured
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs__content pt-60 lg:pt-50 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div
                className="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Ultimate Drawing Course Beginner to Advanced
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
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Photography Masterclass: A Complete Guide to
                            Photography
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
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
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
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
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
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Complete Financial Analyst Training &amp;
                            Investing Course
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
                </div>

                <button className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>

            <div className="tabs__pane -tab-item-2 ">
              <div
                className="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Ultimate Drawing Course Beginner to Advanced
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
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Photography Masterclass: A Complete Guide to
                            Photography
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
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
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
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
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
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Complete Financial Analyst Training &amp;
                            Investing Course
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
                </div>

                <button className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>

            <div className="tabs__pane -tab-item-3 ">
              <div
                className="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Ultimate Drawing Course Beginner to Advanced
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
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Photography Masterclass: A Complete Guide to
                            Photography
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
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
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
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
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
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Complete Financial Analyst Training &amp;
                            Investing Course
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
                </div>

                <button className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>

            <div className="tabs__pane -tab-item-4 ">
              <div
                className="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Ultimate Drawing Course Beginner to Advanced
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
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Photography Masterclass: A Complete Guide to
                            Photography
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
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
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
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
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
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 "
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
                            The Complete Financial Analyst Training &amp;
                            Investing Course
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
                </div>

                <button className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreFeaturedCourses;
