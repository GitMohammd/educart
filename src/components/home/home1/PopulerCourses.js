import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function PopulerCourses() {
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
            <div>
              <NavLink
                className={(navinfo) => (navinfo.isActive ? "is-active" : "")}
                to="/home1/allCategories"
              >
                <button
                  className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                  data-tab-target=".-tab-item-1"
                  type="button"
                >
                  All Categories
                </button>
              </NavLink>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-2"
                type="button"
              >
                <NavLink
                  className={(navinfo) => (navinfo.isActive ? "is-active" : "")}
                  to="/home1/animation"
                >
                  Animation
                </NavLink>
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-3"
                type="button"
              >
                <NavLink to="/home1/design">Design</NavLink>
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-4"
                type="button"
              >
                <NavLink to="/home1/illustration">Illustration</NavLink>
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-5"
                type="button"
              >
                <NavLink to="/home1/lifeStyle">Lifestyle</NavLink>
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-6"
                type="button"
              >
                <NavLink to="/home1/photo">Photo &amp; Film</NavLink>
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-7"
                type="button"
              >
                <NavLink to="/home1/business">Business</NavLink>
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-8"
                type="button"
              >
                <NavLink to="/home1/writting">Writing</NavLink>
              </button>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default PopulerCourses;
