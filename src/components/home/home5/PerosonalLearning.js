import React from "react";

function PerosonalLearning() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-2 relative">
      <div className="side-image pr-25 lg:d-none">
        <img src="assets/imgimg/home-5/cta/img.png" alt="image" />
      </div>

      <div data-anim-wrap className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-7">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title text-white">
                Get personal learning recommendations
              </h2>

              <p className="sectionTitle__text text-white">
                Enhance your skills with best Online courses
              </p>
            </div>

            <div className="row x-gap-20 y-gap-20 pt-60 lg:pt-40">
              <div className="col-auto">
                <div className="dropdown js-dropdown js-catb-active">
                  <div
                    className="dropdown__button d-flex items-center bg-dark-1 text-14 text-white h-60"
                    data-el-toggle=".js-catb-toggle"
                    data-el-toggle-active=".js-catb-active"
                  >
                    <span className="js-dropdown-title">Category</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-catb-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Lifestyle
                        </a>
                      </div>
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="dropdown js-dropdown js-diff-active">
                  <div
                    className="dropdown__button d-flex items-center bg-dark-1 text-14 text-white h-60"
                    data-el-toggle=".js-diff-toggle"
                    data-el-toggle-active=".js-diff-active"
                  >
                    <span className="js-dropdown-title">Difficulty</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-diff-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Easy
                        </a>
                      </div>
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Medium
                        </a>
                      </div>
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Hard
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <a href="#" className="button -md -purple-1 text-white">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerosonalLearning;
