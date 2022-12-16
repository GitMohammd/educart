import React, { useEffect, useState } from "react";
import Courses from "./Courses";

function PopulerCourses() {
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
          </div>
        </div>

        <div className="tabs -pills pt-50 js-tabs">
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

          <div className="tabs__content pt-60 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div className="row y-gap-30 justify-center">
                {filterPopulerCourse.slice(0, 8).map((course) => (
                  <Courses key={course.id} course={course}></Courses>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopulerCourses;
