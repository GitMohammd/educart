import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../courseList/courseList1/Pagination";

function BlogListContent2() {
  const [courses, setCourses] = useState([]);
  const [catagory, setCatagory] = useState("");

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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="row y-gap-30">
              {currentCourse.slice(0, 9).map((course) => (
                <div
                  key={course.id}
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <Link to={"/blogSingle"} className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src={course.img}
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Eco-Education in Our Lives: We Can Change the Future
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </Link>
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

          <div className="col-lg-3">
            <div data-anim="slide-up delay-3" className="sidebar -blog">
              <div className="sidebar__item">
                <h5 className="sidebar__title">Categories</h5>

                <div className="sidebar-content -list">
                  <a className="text-dark-1" href="#">
                    College
                  </a>

                  <a className="text-dark-1" href="#">
                    Gym
                  </a>

                  <a className="text-dark-1" href="#">
                    High School
                  </a>

                  <a className="text-dark-1" href="#">
                    Primary
                  </a>

                  <a className="text-dark-1" href="#">
                    School
                  </a>

                  <a className="text-dark-1" href="#">
                    University
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
      </div>
    </section>
  );
}

export default BlogListContent2;
