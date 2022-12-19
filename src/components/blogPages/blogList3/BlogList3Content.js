import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../courseList/courseList1/Pagination";

function BlogList3Content() {
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
        <div className="row y-gap-30 justify-center">
          {currentCourse.slice(0, 4).map((course) => (
            <div
              key={course.id}
              data-anim="slide-up delay-1"
              className="col-lg-10 col-md-11"
            >
              <div className="blogCard -type-3">
                <div className="row y-gap-30 items-center">
                  <div className="col-lg-6">
                    <div className="blogCard__image">
                      <img className="rounded-8" src={course.img} alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="blogCard__content pl-60 lg:pl-40 md:pl-0">
                      <a
                        href="#"
                        className="blogCard__category text-14 lh-1 text-purple-1 fw-500"
                      >
                        EDUCATION
                      </a>
                      <h4 className="blogCard__title text-24 lh-15 text-dark-4 fw-500 mt-15">
                        Eco-Education in Our Lives: We Can Change the Future
                      </h4>
                      <p className="blogCard__text mt-20">
                        Our features, journey, tips and us being us. Lorem ipsum
                        dolor sit amet, accumsan in, tempor dictum neque.
                      </p>
                      <div className="blogCard__button d-inline-block mt-20">
                        <a
                          href="#"
                          className="button -sm -purple-3 text-purple-1"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div data-anim="slide-up delay-1" className="col-lg-10 col-md-11">
            <div className="blogCard -type-3">
              <div className="row y-gap-30 items-center">
                <div className="col-lg-6">
                  <div className="blogCard__image">
                    <img
                      className="rounded-8"
                      src="/assets/img/blog-list/big/1.png"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="blogCard__content pl-60 lg:pl-40 md:pl-0">
                    <a
                      href="#"
                      className="blogCard__category text-14 lh-1 text-purple-1 fw-500"
                    >
                      EDUCATION
                    </a>
                    <h4 className="blogCard__title text-24 lh-15 text-dark-4 fw-500 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>
                    <p className="blogCard__text mt-20">
                      Our features, journey, tips and us being us. Lorem ipsum
                      dolor sit amet, accumsan in, tempor dictum neque.
                    </p>
                    <div className="blogCard__button d-inline-block mt-20">
                      <a
                        href="#"
                        className="button -sm -purple-3 text-purple-1"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <Pagination
          coursePerPage={coursePerPage}
          currentPage={currentPage}
          totalCourse={filterPopulerCourse.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
}

export default BlogList3Content;
