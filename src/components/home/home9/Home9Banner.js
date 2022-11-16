import React from "react";

function Home9Banner() {
  return (
    <section
      //   data-anim-wrap
      className="masthead -type-7 js-mouse-move-container"
    >
      <div className="masthead__bg bg-purple-1 rounded-16">
        <img src="/assets/img/home-9/hero/bg.png" alt="image" />
      </div>

      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="masthead__content">
              <h1
                data-anim-child="slide-up delay-3"
                className="masthead__title text-white"
              >
                Find a perfect Online Course
              </h1>
              <p
                data-anim-child="slide-up delay-4"
                className="masthead__text text-16 lh-2 text-white pt-10"
              >
                You can access 7900+ different courses from 600
                <br className="lg:d-none" /> professional trainers for free
              </p>

              <div data-anim-child="slide-up delay-5">
                <div className="masthead-form bg-white rounded-16 mt-30 px-10 py-10">
                  <form className=" d-flex x-gap-30 y-gap-10 items-center flex-wrap">
                    <div className="masthead-form__item">
                      <div className="d-flex items-center">
                        <i className="icon-search mr-10 ml-15"></i>
                        <input type="text" placeholder="Your Search" />
                      </div>
                    </div>

                    <div className="masthead-form__item">
                      <div className="dropdown js-dropdown w-1/1 bg-white">
                        <div className="d-flex items-center justify-between text-dark-1 -dark-text-dark-1">
                          <div className="d-flex items-center">
                            <i className="icon-basket mr-10"></i>
                            <span className="js-dropdown-title">Category</span>
                          </div>
                          <i className="icon text-9 icon-chevron-down ml-10"></i>
                        </div>

                        <div className="dropdown__item shadow-1">
                          <div className="y-gap-15 js-dropdown-list">
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Category 1
                              </a>
                            </div>
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Category 2
                              </a>
                            </div>
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Category 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="masthead-form__item">
                      <div className="dropdown js-dropdown w-1/1 bg-white">
                        <div className="d-flex items-center justify-between text-dark-1 -dark-text-dark-1">
                          <div className="d-flex items-center">
                            <i className="icon-basket mr-10"></i>
                            <span className="js-dropdown-title">Category</span>
                          </div>
                          <i className="icon text-9 icon-chevron-down ml-10"></i>
                        </div>

                        <div className="dropdown__item shadow-1">
                          <div className="y-gap-15 js-dropdown-list">
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Category 1
                              </a>
                            </div>
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Category 2
                              </a>
                            </div>
                            <div>
                              <a href="#" className="d-block js-dropdown-link">
                                Category 3
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="masthead-form__button">
                      <button className="button -dark-1 text-white -dark-button-dark-1">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div data-anim-child="slide-up delay-6">
                <div className="text-white mt-20">
                  Trending Search: Development, Business, Design, Merketing
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="masthead-image">
              <div className="masthead-image__img1">
                <img
                  data-move="20"
                  className="js-mouse-move"
                  src="/assets/img/home-9/hero/1.png"
                  alt="image"
                />
              </div>

              <div className="-el-1">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-9/hero/2.png"
                  alt="icon"
                />
              </div>
              <div className="-el-2">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-9/hero/3.png"
                  alt="icon"
                />
              </div>
              <div className="-el-3">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-9/hero/4.png"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home9Banner;
