import React, { useEffect, useState } from "react";
import Courses from "./Courses";

function PopulerCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const [defaultActive, setDefaultActive] = useState(true);

  const [allCatagoryActive, setAllCatagoryActive] = useState("");
  const [aniatmiontActive, setAniatmiontActive] = useState("");

  const [DesinActive, setDesignActive] = useState("");

  const [illustrationActive, setillustrationActive] = useState("");

  const [lifestyleActive, setLifestyleActive] = useState("");

  const [photoActive, setPhoteActive] = useState("");

  const [businessActive, setbusinessActive] = useState("");

  const [writtionActive, setwrittionActive] = useState("");

  const handleClick = (e) => {
    setDefaultActive(false);
    setAllCatagoryActive(e === "allCategories" ? true : false);
    setAniatmiontActive(e === "animation" ? true : false);
    setDesignActive(e === "design" ? true : false);
    setillustrationActive(e === "illustration" ? true : false);
    setLifestyleActive(e === "lifestyle" ? true : false);
    setPhoteActive(e === "photo" ? true : false);
    setbusinessActive(e === "business" ? true : false);
    setwrittionActive(e === "writing" ? true : false);
  };

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
            <div onClick={() => handleClick("allCategories")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  allCatagoryActive || defaultActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                All Categories
              </button>
            </div>

            <div onClick={() => handleClick("animation")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  aniatmiontActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Animation
              </button>
            </div>

            <div onClick={() => handleClick("design")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  DesinActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Design
              </button>
            </div>

            <div onClick={() => handleClick("illustration")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  illustrationActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Illustration
              </button>
            </div>

            <div onClick={() => handleClick("lifestyle")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  lifestyleActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Lifestyle
              </button>
            </div>

            <div onClick={() => handleClick("photo")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  photoActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Photo &amp; Film
              </button>
            </div>

            <div onClick={() => handleClick("business")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  businessActive ? " is-active" : " "
                }`}
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Business
              </button>
            </div>

            <div onClick={() => handleClick("writing")}>
              <button
                className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                  writtionActive ? " is-active" : " "
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
                {courses.slice(0, 8).map((course) => (
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
