import React from "react";

function Recommendation() {
  return (
    <section className="layout-pt-lg layout-pb-lg border-top-light">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Get personal learning recommendations
              </h2>

              <p className="sectionTitle__text ">
                Enhance your skills with best Online courses
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-20 justify-center pt-30">
          <div className="col-auto">
            <div className="dropdown js-dropdown js-catb-active">
              <div
                className="dropdown__button d-flex items-center text-14 border-light h-60"
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
                className="dropdown__button d-flex items-center text-14 border-light h-60"
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
    </section>
  );
}

export default Recommendation;
