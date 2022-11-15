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
              <NavLink to="/home1/allCategories">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    All Categories
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/animation">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Animation
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/design">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Design
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/illustration">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Illustration
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/lifeStyle">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Lifestyle
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/photo">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Photo &amp; Film
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/business">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Business
                  </button>
                )}
              </NavLink>
            </div>

            <div>
              <NavLink to="/home1/writting">
                {({ isActive }) => (
                  <button
                    className={`tabs__button px-15 py-8 rounded-8 js-tabs-button${
                      isActive ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Writing
                  </button>
                )}
              </NavLink>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default PopulerCourses;
