import React, { useEffect, useRef, useState } from "react";
import UseCourseContext from "../../context/cartContext/UseCourseContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "../../courseList/courseList1/Pagination";

function EventList2Content() {
  const [courses, setCourses] = useState([]);
  const [catagory, setCatagory] = useState("");
  const catRef = useRef();
  const [isCatOpen, setIscatOpen] = useState(false);

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

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const filterPopulerCourse = courses?.filter((popcourse) => {
    return catagory === "" ? popcourse : popcourse.popular?.includes(catagory);
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(9);

  // Get Current Course

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;

  const currentCourse = filterPopulerCourse.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const {
    getCourseQuantity,
    increaseCourseQuantity,
    decreaseCourseQuantity,
    removeCourseQuantity,
  } = UseCourseContext();
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-30">
          <div className="col-lg-3 lg:order-2">
            <div className="pr-30 lg:pr-0">
              <div
                data-anim="slide-up delay-3"
                className="sidebar -blog -no-border"
              >
                <div className="sidebar__item">
                  <h5 className="sidebar__title">Find Event</h5>

                  <div className="sidebar-content -event">
                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        Event From
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>

                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        All Categories
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>

                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        Location
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>

                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        Keyword
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">Recent Posts</h5>

                  <div className="sidebar-content -recent y-gap-20">
                    <div className="sidebar-recent d-flex items-center">
                      <div className="sidebar-recent__image mr-15">
                        <img src="/assets/img/blog-list/1.png" alt="image" />
                      </div>

                      <div className="sidebar-recent__content">
                        <h5 className="text-15 lh-15 fw-500">
                          Find the Right Learning Path for your
                        </h5>
                        <div className="text-13 lh-1 mt-5">April 13, 2022</div>
                      </div>
                    </div>

                    <div className="sidebar-recent d-flex items-center">
                      <div className="sidebar-recent__image mr-15">
                        <img src="/assets/img/blog-list/2.png" alt="image" />
                      </div>

                      <div className="sidebar-recent__content">
                        <h5 className="text-15 lh-15 fw-500">
                          Find the Right Learning Path for your
                        </h5>
                        <div className="text-13 lh-1 mt-5">April 13, 2022</div>
                      </div>
                    </div>

                    <div className="sidebar-recent d-flex items-center">
                      <div className="sidebar-recent__image mr-15">
                        <img src="/assets/img/blog-list/3.png" alt="image" />
                      </div>

                      <div className="sidebar-recent__content">
                        <h5 className="text-15 lh-15 fw-500">
                          Find the Right Learning Path for your
                        </h5>
                        <div className="text-13 lh-1 mt-5">April 13, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">Tags</h5>

                  <div className="sidebar-content -tags">
                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Courses
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Learn
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Online
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Education
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        LMS
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Training
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 lg:order-1">
            <div className="row y-gap-20 items-center justify-between pb-30">
              <div className="col-auto">
                <div className="text-14 lh-12">
                  Showing <span className="text-dark-1 fw-500">250</span> total
                  results
                </div>
              </div>

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
                        {catagory === ""
                          ? "Most Popular"
                          : catagory?.charAt(0).toUpperCase() +
                            catagory?.slice(1)}
                      </span>
                      {/* <i className="icon text-9 ml-40 icon-chevron-down"></i> */}
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
                        <div onClick={() => setCatagory("animation")}>
                          <button class="d-block js-dropdown-link">
                            Animation
                          </button>
                        </div>

                        <div onClick={() => setCatagory("design")}>
                          <button class="d-block js-dropdown-link">
                            Design
                          </button>
                        </div>

                        <div onClick={() => setCatagory("illustration")}>
                          <button class="d-block js-dropdown-link">
                            Illustration
                          </button>
                        </div>

                        <div onClick={() => setCatagory("business")}>
                          <button class="d-block js-dropdown-link">
                            Business
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-anim="slide-up delay-4" className="row y-gap-30">
              {currentCourse.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6">
                  <a href="#" className="eventCard -type-2 bg-white">
                    <div className="eventCard__img">
                      <img
                        className="w-1/1 rounded-top-8"
                        src={course.img}
                        alt="image"
                      />
                    </div>

                    <div className="eventCard__content pt-25 pb-30 px-30">
                      <div className="d-flex items-center">
                        <div className="icon-calendar-2 text-16 mr-8"></div>
                        <div className="text-14">6 April, 2022</div>
                      </div>

                      <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                        Eco-Education in Our Lives: We Can Change the Future
                      </h4>

                      <div className="d-flex items-center mt-15">
                        <div className="icon-location text-16 mr-8"></div>
                        <div className="text-14">London, UK</div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <Pagination
              coursePerPage={coursePerPage}
              currentPage={currentPage}
              totalCourse={filterPopulerCourse.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventList2Content;
