import React from "react";

function CourseListMain4() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim="slide-up delay-2" className="container">
        <div className="row y-gap-20 items-center justify-between pb-30">
          <div className="col-12">
            <div className="text-14 lh-12">
              Showing <span className="text-dark-1 fw-500">250</span> total
              results
            </div>
          </div>

          <div className="col-12">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-auto">
                <div className="dropdown js-dropdown js-category-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
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
                          Art
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Exercise
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Software
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Music
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Material
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Photography
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-ratings-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-ratings-toggle"
                    data-el-toggle-active=".js-ratings-active"
                  >
                    <span className="js-dropdown-title">Ratings</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-ratings-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          4.5 &amp; up
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          4.0 &amp; up
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          3.5 &amp; up
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          3.0 &amp; up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-instructors-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-instructors-toggle"
                    data-el-toggle-active=".js-instructors-active"
                  >
                    <span className="js-dropdown-title">Instructors</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-instructors-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Jane Cooper
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Jenny Wilson
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Robert Fox
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Jacob Jones
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Albert Flores
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-price-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-price-toggle"
                    data-el-toggle-active=".js-price-active"
                  >
                    <span className="js-dropdown-title">Price</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-price-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          All
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Free
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Paid
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-level-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-level-toggle"
                    data-el-toggle-active=".js-level-active"
                  >
                    <span className="js-dropdown-title">Level</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-level-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          All Levels
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Beginner
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Intermediate
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Expert
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-langunage-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-langunage-toggle"
                    data-el-toggle-active=".js-langunage-active"
                  >
                    <span className="js-dropdown-title">Langunage</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-langunage-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          English
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          French
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          German
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Italian
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Turkish
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-duration-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-duration-toggle"
                    data-el-toggle-active=".js-duration-active"
                  >
                    <span className="js-dropdown-title">Duration</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-duration-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Less than 3 hours
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          4 - 7 hours
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          8 - 18 hours{" "}
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          20+ Hours
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/1.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/2.png"
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/3.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/4.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/5.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                  Photography Masterclass: A Complete Guide to Photography
                </div>

                <div className="d-flex x-gap-10 items-center pt-10">
                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/6.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                  Instagram Marketing 2021: Complete Guide To Instagram Growth
                </div>

                <div className="d-flex x-gap-10 items-center pt-10">
                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/7.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/8.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                  The Complete Financial Analyst Training &amp; Investing Course
                </div>

                <div className="d-flex x-gap-10 items-center pt-10">
                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/9.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                  Photography Masterclass: A Complete Guide to Photography
                </div>

                <div className="d-flex x-gap-10 items-center pt-10">
                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/10.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/11.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-xl-3 col-lg-4 col-md-6">
            <a href="courses-single-1.html" className="coursesCard -type-1 ">
              <div className="relative">
                <div className="coursesCard__image overflow-hidden rounded-8">
                  <img
                    className="w-1/1"
                    src="assets/img/coursesCards/12.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
                <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
              </div>

              <div className="h-100 pt-15">
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
                        src="assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">6 lesson</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">3h 56m</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="mr-8">
                      <img
                        src="assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="text-14 lh-1">Beginner</div>
                  </div>
                </div>

                <div className="coursesCard-footer">
                  <div className="coursesCard-footer__author">
                    <img src="assets/img/general/avatar-1.png" alt="image" />
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

        <div className="row justify-center pt-90 lg:pt-50">
          <div className="col-auto">
            <div className="pagination -buttons">
              <button className="pagination__button -prev">
                <div className="icon icon-chevron-left"></div>
              </button>

              <div className="pagination__count">
                <a href="#">1</a>
                <a className="-count-is-active" href="#">
                  2
                </a>
                <a href="#">3</a>
                <span>...</span>
                <a href="#">67</a>
              </div>

              <button className="pagination__button -next">
                <div className="icon icon-chevron-right"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseListMain4;
