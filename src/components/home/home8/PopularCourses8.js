import React from "react";

function PopularCourses8() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Our Most Popular Courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>

            <div className="d-flex x-gap-20 text-left pt-60 lg:pt-40">
              <div>
                <div className="dropdown js-dropdown js-category-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span className="js-dropdown-title">Category</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Lifestyle
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="dropdown js-dropdown js-rating-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                    data-el-toggle=".js-rating-toggle"
                    data-el-toggle-active=".js-rating-active"
                  >
                    <span className="js-dropdown-title">Rating</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-rating-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Great
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Good
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Medium
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Low
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="dropdown js-dropdown js-diff-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                    data-el-toggle=".js-diff-toggle"
                    data-el-toggle-active=".js-diff-active"
                  >
                    <span className="js-dropdown-title">Diffiulty</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-diff-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Hard
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Meduium
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Easy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-center pt-60 lg:pt-40">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
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

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                    Photography MasterclassName: A Complete Guide to Photography
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                    Complete Blender Creator: Learn 3D Modelling for Beginners
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                    The Complete Financial Analyst Training &amp; Investing
                    Course
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
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
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

        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <a href="#" className="button -md -outline-light-5 text-dark-1">
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCourses8;
