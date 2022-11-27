import React, { useEffect, useState } from "react";
import CourseLIstFilter from "./CourseLIstFilter";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterCourseList from "./FilterCourseList";

function CourseListMain1(props) {
  const {
    courses,
    filteredCourses,
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

  // console.log(filteredCourses, "newCourse");

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50">
          <CourseLIstFilter
            courses={courses}
            filteredCourses={filteredCourses}
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

          <div data-anim-child="slide-up delay-3" className="col-xl-9 col-lg-8">
            <div className="accordion js-accordion">
              <div className="accordion__item">
                <div className="row y-gap-20 items-center justify-between pb-30">
                  <div className="col-auto">
                    <div className="text-14 lh-12">
                      Showing <span className="text-dark-1 fw-500">250</span>{" "}
                      total results
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
                          // className="dropdown js-dropdown js-category-active"
                          >
                            <Box sx={{ minWidth: 220 }}>
                              <FormControl
                                fullWidth
                                // className="dropdown__button text-14"
                                // style={{ height: "100%" }}
                              >
                                <InputLabel
                                // id="demo-simple-select-label"
                                >
                                  Most Popular
                                </InputLabel>
                                <Select
                                  // className="-dark-bg-dark-2 -dark-border-white-10"
                                  // style={{ color: "black" }}
                                  // labelId="demo-simple-select-label"
                                  // id="demo-simple-select"
                                  value={populerCourse}
                                  label="Most Popular"
                                  onChange={handlePopulerCourseChange}
                                >
                                  <MenuItem value={""}>none</MenuItem>
                                  <MenuItem value={"animation"}>
                                    Animation
                                  </MenuItem>
                                  <MenuItem value={"design"}>Design</MenuItem>
                                  <MenuItem value={"illustration"}>
                                    Illustration
                                  </MenuItem>
                                  <MenuItem value={"business"}>
                                    Business
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                            {/* <div
                              className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-category-toggle"
                              data-el-toggle-active=".js-category-active"
                            >
                              <span className="js-dropdown-title">
                                Most Popular
                              </span>
                              <i className="icon text-9 ml-40 icon-chevron-down"></i>
                            </div>

                            <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                              <div className="text-14 y-gap-15 js-dropdown-list">
                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Animation
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Design
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Illustration
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Business
                                  </a>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="accordion__content d-none lg:d-block">
                  <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
                    <div className="row x-gap-60 y-gap-40">
                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Category</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">Art</div>
                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Exercise
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Software Development
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Music
                              </div>
                              <div className="sidebar-checkbox__count">
                                (67)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Material Design
                              </div>
                              <div className="sidebar-checkbox__count">
                                (34)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Photography
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>
                          </div>
                          <div className="sidebar__more mt-15">
                            <a
                              href="#"
                              className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Ratings</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                4.5 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (1991)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                4.0 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (200)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                3.5 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (300)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                3.0 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (500)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Instructors</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Jane Cooper
                              </div>
                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Jenny Wilson
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Robert Fox
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Jacob Jones
                              </div>
                              <div className="sidebar-checkbox__count">
                                (67)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Albert Flores
                              </div>
                              <div className="sidebar-checkbox__count">
                                (34)
                              </div>
                            </div>
                          </div>
                          <div className="sidebar__more mt-15">
                            <a
                              href="#"
                              className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Price</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio-2"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">All</div>
                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio-2"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                Free
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-radio mr-10">
                                <div className="radio">
                                  <input
                                    type="radio"
                                    name="radio-2"
                                    checked="checked"
                                  />
                                  <div className="radio__mark">
                                    <div className="radio__icon"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                Paid
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Level</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                All Levels
                              </div>
                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Beginner
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Intermediate
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__title">
                                Expert
                              </div>
                              <div className="sidebar-checkbox__count">
                                (67)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Languange</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                English
                              </div>
                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                French
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                German
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                Italian
                              </div>
                              <div className="sidebar-checkbox__count">
                                (67)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                Turkish
                              </div>
                              <div className="sidebar-checkbox__count">
                                (34)
                              </div>
                            </div>
                          </div>
                          <div className="sidebar__more mt-15">
                            <a
                              href="#"
                              className="text-14 fw-500 underline text-purple-1"
                            >
                              Show more
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="sidebar__item">
                          <h5 className="sidebar__title">Duration</h5>
                          <div className="sidebar-checkbox">
                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                Less than 3 hours
                              </div>
                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                4 - 7 hours
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                8 -18 hours{" "}
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <div className="form-checkbox">
                                <input type="checkbox" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon icon-check"></div>
                                </div>
                              </div>
                              <div className="sidebar-checkbox__title">
                                20 + Hours
                              </div>
                              <div className="sidebar-checkbox__count">
                                (67)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="row y-gap-30 side-content__wrap">
              {filteredCourses?.map((course) => {
                return <FilterCourseList key={course.id} course={course} />;
              })}
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
        </div>
      </div>
    </section>
  );
}

export default CourseListMain1;
