import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../courseList/courseList1/Pagination";

function BlogList1Content() {
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

  // change page
  return (
    <section className="layout-pt-sm layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="tabs -pills js-tabs">
          <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
            <div onClick={() => setCatagory("")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                All Categories
              </button>
            </div>

            <div onClick={() => setCatagory("animation")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "animation" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Animation
              </button>
            </div>

            <div onClick={() => setCatagory("design")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "design" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Design
              </button>
            </div>

            <div onClick={() => setCatagory("illustration")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "illustration" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Illustration
              </button>
            </div>

            <div onClick={() => setCatagory("lifeStyle")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "lifeStyle" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Lifestyle
              </button>
            </div>

            <div onClick={() => setCatagory("photo")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "photo" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Photo &amp; Film
              </button>
            </div>

            <div onClick={() => setCatagory("business")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "business" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Business
              </button>
            </div>

            <div onClick={() => setCatagory("writing")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  catagory === "writing" ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Writing
              </button>
            </div>
          </div>

          <div className="tabs__content pt-40 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div className="row y-gap-30">
                {currentCourse.slice(0, 9).map((course) => (
                  <div
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
            {/* 
            <div className="tabs__pane -tab-item-2 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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

            <div className="tabs__pane -tab-item-3 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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

            <div className="tabs__pane -tab-item-4 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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

            <div className="tabs__pane -tab-item-5 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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

            <div className="tabs__pane -tab-item-6 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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

            <div className="tabs__pane -tab-item-7 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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

            <div className="tabs__pane -tab-item-8 ">
              <div className="row y-gap-30">
                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/1.png"
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
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/2.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Engendering a culture of professional development
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/3.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        Increasing engagement with Instagram
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/4.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to design a simple, yet unique and memorable brand
                        identity
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/5.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        5 marketing trends that you should be prepared for in
                        2022
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/6.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 great design trends that are making a come-back in
                        2021
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/7.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        How to be more creative: 5 cool tips to find inspiration
                        everywhere
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/8.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        8 interesting programming languages you should be paying
                        attention to
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  data-anim-child="slide-up delay-4"
                  className="col-lg-4 col-md-6"
                >
                  <a href="#" className="blogCard -type-1">
                    <div className="blogCard__image">
                      <img
                        className="w-1/1 rounded-8"
                        src="/assets/img/blog-list/9.png"
                        alt="image"
                      />
                    </div>
                    <div className="blogCard__content mt-20">
                      <div className="blogCard__category">EDUCATION</div>
                      <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                        19 ways to optimize your ad marketing budget efficiently
                      </h4>
                      <div className="blogCard__date text-14 mt-5">
                        December 16, 2022
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList1Content;
