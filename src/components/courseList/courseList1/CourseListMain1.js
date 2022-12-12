import React, { useEffect, useState } from "react";
import CourseLIstFilter from "./CourseLIstFilter";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterCourseList from "./FilterCourseList";
import Pagination from "./Pagination";

function CourseListMain1(props) {
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
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50">
          <CourseLIstFilter
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 side-content__wrap">
              {currentCourse?.map((course) => {
                return <FilterCourseList key={course.id} course={course} />;
              })}
            </div>
            <Pagination
              coursePerPage={coursePerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalCourse={totalCourse}
              paginate={paginate}
            />

            {/* <div className="row justify-center pt-90 lg:pt-50">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseListMain1;
