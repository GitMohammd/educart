import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CourseListFilter7 from "./CourseListFilter7";
import FIlterCourseList7 from "./FIlterCourseList7";
import Pagination from "../courseList1/Pagination";

function CourseListMain7(props) {
  const catRef = useRef();
  const [isCatOpen, setIscatOpen] = useState(false);
  const [isFilterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const closeCat = (e) => {
      if (!catRef.current.contains(e.target)) {
        setIscatOpen(false);
      }
    };
    document.body.addEventListener("click", closeCat);
    return () => {
      document.body.removeEventListener("click", closeCat);
    };
  }, []);
  const {
    courses,
    coursePerPage,
    totalCourse,
    currentPage,
    currentCourse,
    setCurrentPage,
    paginate,
    populerCourse,
    setPopulerCourse,
    handleCatagoryChange,
    handleRatingChange,
    handleinstructorChange,
    handlePriceChange,
    handleLevelChange,
    handLanguageChange,
    handDurationChange,
    handlePopulerCourseChange,
  } = props;
  return (
    <section className="layout-pt-md layout-pb-md">
      <div data-anim="slide-up delay-2" className="container">
        <div className="accordion js-accordion">
          <div className="accordion__item">
            <div className="row y-gap-20 items-center justify-between pb-30">
              <div className="col-auto">
                <div className="text-14 lh-12">
                  Showing <span className="text-dark-1 fw-500">250</span> total
                  results
                </div>
              </div>

              <div className="col-auto">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                        Sort by:
                      </div>

                      <div
                        ref={catRef}
                        onClick={() => setIscatOpen((prev) => !prev)}
                        className="dropdown js-dropdown js-category-active"
                      >
                        <div
                          className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                          data-el-toggle=".js-category-toggle"
                          data-el-toggle-active=".js-category-active"
                        >
                          <span className="js-dropdown-title">
                            {populerCourse === ""
                              ? "Most Popular"
                              : populerCourse?.charAt(0).toUpperCase() +
                                populerCourse?.slice(1)}
                          </span>
                          {isCatOpen ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}{" "}
                        </div>

                        <div
                          className={
                            isCatOpen
                              ? "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle -is-el-visible"
                              : "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle "
                          }
                        >
                          <div class="text-14 y-gap-15 js-dropdown-list">
                            <div onClick={() => setPopulerCourse("animation")}>
                              <button class="d-block js-dropdown-link">
                                Animation
                              </button>
                            </div>

                            <div onClick={() => setPopulerCourse("design")}>
                              <button class="d-block js-dropdown-link">
                                Design
                              </button>
                            </div>

                            <div
                              onClick={() => setPopulerCourse("illustration")}
                            >
                              <button class="d-block js-dropdown-link">
                                Illustration
                              </button>
                            </div>

                            <div onClick={() => setPopulerCourse("business")}>
                              <button class="d-block js-dropdown-link">
                                Business
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div
                      onClick={() => setFilterOpen(!isFilterOpen)}
                      className="accordion__button w-unset"
                    >
                      <button className="button h-50 px-30 -light-7 text-purple-1">
                        <i className="icon-filter mr-10"></i>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ maxHeight: isFilterOpen ? "737px" : "" }}
              className="accordion__content"
            >
              <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                <CourseListFilter7
                  courses={courses}
                  currentCourse={currentCourse}
                  populerCourse={populerCourse}
                  setPopulerCourse={setPopulerCourse}
                  handleCatagoryChange={handleCatagoryChange}
                  handleRatingChange={handleRatingChange}
                  handleinstructorChange={handleinstructorChange}
                  handlePriceChange={handlePriceChange}
                  handleLevelChange={handleLevelChange}
                  handLanguageChange={handLanguageChange}
                  handDurationChange={handDurationChange}
                  handlePopulerCourseChange={handlePopulerCourseChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-60">
          {currentCourse?.map((course) => {
            return <FIlterCourseList7 key={course.id} course={course} />;
          })}

          {/* <div className="col-12 border-bottom-light">
            <a
              href="#"
              className="coursesCard -type-1 row y-gap-20 flex-row items-center"
            >
              <div className="col-xl-3 col-lg-4">
                <div className="coursesCard__image rounded-8 relative">
                  <img
                    className="w-1/1 rounded-8"
                    src="/assets/img/coursesCards/2.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
              </div>

              <div className="col">
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

                <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                  Complete Python Bootcamp From Zero to Hero in Python
                </div>
                <div className="mt-8">
                  Introductory course on web hosting, domain registration, and
                  how you can easily publish and edit your website online.
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div className="ml-10">Ali Tufan</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto md:d-none">
                <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
              </div>

              <div className="col-md-auto">
                <div className="text-right md:text-left">
                  <div className="text-15 lh-1 fw-500 line-through">$179</div>
                  <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                    $279
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center pt-25">
                  <div className="col-auto">
                    <button className="button h-50 px-30 -purple-3 text-purple-1">
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="button size-50 rounded-full -purple-3 text-light-1">
                      <div className="size-20" data-feather="heart"></div>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 border-bottom-light">
            <a
              href="#"
              className="coursesCard -type-1 row y-gap-20 flex-row items-center"
            >
              <div className="col-xl-3 col-lg-4">
                <div className="coursesCard__image rounded-8 relative">
                  <img
                    className="w-1/1 rounded-8"
                    src="/assets/img/coursesCards/3.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
              </div>

              <div className="col">
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

                <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                  Angular - The Complete Guide (2022 Edition)
                </div>
                <div className="mt-8">
                  Introductory course on web hosting, domain registration, and
                  how you can easily publish and edit your website online.
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div className="ml-10">Ali Tufan</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto md:d-none">
                <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
              </div>

              <div className="col-md-auto">
                <div className="text-right md:text-left">
                  <div className="text-15 lh-1 fw-500 line-through">$179</div>
                  <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                    $279
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center pt-25">
                  <div className="col-auto">
                    <button className="button h-50 px-30 -purple-3 text-purple-1">
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="button size-50 rounded-full -purple-3 text-light-1">
                      <div className="size-20" data-feather="heart"></div>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 border-bottom-light">
            <a
              href="#"
              className="coursesCard -type-1 row y-gap-20 flex-row items-center"
            >
              <div className="col-xl-3 col-lg-4">
                <div className="coursesCard__image rounded-8 relative">
                  <img
                    className="w-1/1 rounded-8"
                    src="/assets/img/coursesCards/4.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
              </div>

              <div className="col">
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

                <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                  The Ultimate Drawing Course Beginner to Advanced
                </div>
                <div className="mt-8">
                  Introductory course on web hosting, domain registration, and
                  how you can easily publish and edit your website online.
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div className="ml-10">Ali Tufan</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto md:d-none">
                <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
              </div>

              <div className="col-md-auto">
                <div className="text-right md:text-left">
                  <div className="text-15 lh-1 fw-500 line-through">$179</div>
                  <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                    $279
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center pt-25">
                  <div className="col-auto">
                    <button className="button h-50 px-30 -purple-3 text-purple-1">
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="button size-50 rounded-full -purple-3 text-light-1">
                      <div className="size-20" data-feather="heart"></div>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 border-bottom-light">
            <a
              href="#"
              className="coursesCard -type-1 row y-gap-20 flex-row items-center"
            >
              <div className="col-xl-3 col-lg-4">
                <div className="coursesCard__image rounded-8 relative">
                  <img
                    className="w-1/1 rounded-8"
                    src="/assets/img/coursesCards/5.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
              </div>

              <div className="col">
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

                <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                  Photography Masterclass: A Complete Guide to Photography
                </div>
                <div className="mt-8">
                  Introductory course on web hosting, domain registration, and
                  how you can easily publish and edit your website online.
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div className="ml-10">Ali Tufan</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto md:d-none">
                <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
              </div>

              <div className="col-md-auto">
                <div className="text-right md:text-left">
                  <div className="text-15 lh-1 fw-500 line-through">$179</div>
                  <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                    $279
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center pt-25">
                  <div className="col-auto">
                    <button className="button h-50 px-30 -purple-3 text-purple-1">
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="button size-50 rounded-full -purple-3 text-light-1">
                      <div className="size-20" data-feather="heart"></div>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 border-bottom-light">
            <a
              href="#"
              className="coursesCard -type-1 row y-gap-20 flex-row items-center"
            >
              <div className="col-xl-3 col-lg-4">
                <div className="coursesCard__image rounded-8 relative">
                  <img
                    className="w-1/1 rounded-8"
                    src="/assets/img/coursesCards/6.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
              </div>

              <div className="col">
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

                <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                  Instagram Marketing 2021: Complete Guide To Instagram Growth
                </div>
                <div className="mt-8">
                  Introductory course on web hosting, domain registration, and
                  how you can easily publish and edit your website online.
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div className="ml-10">Ali Tufan</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto md:d-none">
                <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
              </div>

              <div className="col-md-auto">
                <div className="text-right md:text-left">
                  <div className="text-15 lh-1 fw-500 line-through">$179</div>
                  <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                    $279
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center pt-25">
                  <div className="col-auto">
                    <button className="button h-50 px-30 -purple-3 text-purple-1">
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="button size-50 rounded-full -purple-3 text-light-1">
                      <div className="size-20" data-feather="heart"></div>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 border-bottom-light">
            <a
              href="#"
              className="coursesCard -type-1 row y-gap-20 flex-row items-center"
            >
              <div className="col-xl-3 col-lg-4">
                <div className="coursesCard__image rounded-8 relative">
                  <img
                    className="w-1/1 rounded-8"
                    src="/assets/img/coursesCards/7.png"
                    alt="image"
                  />
                  <div className="coursesCard__image_overlay rounded-8"></div>
                </div>
              </div>

              <div className="col">
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

                <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                  Complete Blender Creator: Learn 3D Modelling for Beginners
                </div>
                <div className="mt-8">
                  Introductory course on web hosting, domain registration, and
                  how you can easily publish and edit your website online.
                </div>

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div className="ml-10">Ali Tufan</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/1.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/2.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <img
                        className="mr-8"
                        src="/assets/img/coursesCards/icons/3.svg"
                        alt="icon"
                      />
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto md:d-none">
                <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
              </div>

              <div className="col-md-auto">
                <div className="text-right md:text-left">
                  <div className="text-15 lh-1 fw-500 line-through">$179</div>
                  <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                    $279
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center pt-25">
                  <div className="col-auto">
                    <button className="button h-50 px-30 -purple-3 text-purple-1">
                      Add to cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="button size-50 rounded-full -purple-3 text-light-1">
                      <div className="size-20" data-feather="heart"></div>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          </div> */}
        </div>

        <Pagination
          coursePerPage={coursePerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCourse={totalCourse}
          paginate={paginate}
        />
      </div>
    </section>
  );
}

export default CourseListMain7;
