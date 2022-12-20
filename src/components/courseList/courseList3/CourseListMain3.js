import React, { useEffect, useRef, useState } from "react";
import Pagination from "../courseList1/Pagination";
import CourseListFilter3 from "./CourseListFilter3";
import FilterCourseList3 from "./FilterCourseList3";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CourseListMain3(props) {
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
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim="slide-up delay-2" className="container">
        <div className="accordion js-accordion">
          <div
            className={
              isFilterOpen ? "accordion__item is-active" : "accordion__item"
            }
          >
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
                <CourseListFilter3
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

        <div className="row y-gap-30">
          {currentCourse?.map((course) => {
            return <FilterCourseList3 key={course.id} course={course} />;
          })}
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

export default CourseListMain3;
