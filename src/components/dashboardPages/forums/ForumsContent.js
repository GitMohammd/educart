import React from "react";

function ForumsContent() {
  return (
    <div className="dashboard -home-9 js-dashboard-home-9">
      <div className="dashboard__sidebar scroll-bar-1">
        <div className="sidebar -dashboard">
          <div className="sidebar__item -is-active -dark-bg-dark-2">
            <a
              href="dashboard.html"
              className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
            >
              <i className="text-20 icon-discovery mr-15"></i>
              Dashboard
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-courses.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-play-button mr-15"></i>
              My Courses
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-bookmarks.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-bookmark mr-15"></i>
              Bookmarks
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-messages.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-message mr-15"></i>
              Messages
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-listing.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-list mr-15"></i>
              Create Course
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-reviews.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-comment mr-15"></i>
              Reviews
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-settings.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-setting mr-15"></i>
              Settings
            </a>
          </div>

          <div className="sidebar__item ">
            <a href="#" className="d-flex items-center text-17 lh-1 fw-500 ">
              <i className="text-20 icon-power mr-15"></i>
              Logout
            </a>
          </div>
        </div>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Forums</h1>

              <div className="breadcrumbs mt-10 pt-0 pb-0">
                <div className="breadcrumbs__content">
                  <div className="breadcrumbs__item">
                    <a href="#">Home</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="#">All courses</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="#">User Experience Design</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="#">User Interface</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Page Head</h2>
                </div>

                <div className="py-30 px-30">
                  <h4 className="text-24 lh-12 fw-500">Course discussion</h4>
                  <div className="mt-15">
                    In this space we'll discuss aspects of the films and of
                    psychology in cinema in general. Feel free to raise issues
                    which you think might help you with later assignments and
                    group projects. This is a hive mind area! You can rate
                    others and view ratings.
                  </div>
                  <button className="button h-50 px-30 -purple-1 text-white mt-30">
                    Add a New Discussion Topic
                  </button>

                  <div className="mt-40">
                    <div className="px-30 py-20 bg-light-7 rounded-8">
                      <div className="row x-gap-10">
                        <div className="col-lg-4">
                          <div className="text-purple-1">Discussion</div>
                        </div>
                        <div className="col-lg-3">
                          <div className="text-purple-1">Started by</div>
                        </div>
                        <div className="col-lg-3">
                          <div className="text-purple-1">Last post</div>
                        </div>
                        <div className="col-lg-1">
                          <div className="text-purple-1">Replies</div>
                        </div>
                        <div className="col-lg-1">
                          <div className="text-purple-1">Subscribe</div>
                        </div>
                      </div>
                    </div>

                    <div className="px-30 border-bottom-light">
                      <div className="row x-gap-10 items-center py-25">
                        <div className="col-lg-4">
                          <div className="text-purple-1">
                            Depiction in foreign language films
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="d-flex items-center">
                            <img
                              src="/assets/img/misc/2.png"
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                Heather Reyes
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                10 Nov 2014
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="d-flex items-center">
                            <img
                              src="/assets/img/misc/2.png"
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                Jeffrey Sanders
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                16 Feb 2017
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-1">5</div>

                        <div className="col-lg-1">
                          <div className="d-flex items-center">
                            <div className="form-switch pr-10">
                              <div
                                className="switch"
                                data-switch=".js-switch-content"
                              >
                                <input type="checkbox" />
                                <span className="switch__slider"></span>
                              </div>
                            </div>
                            <div className="icon-bin"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-30 border-bottom-light">
                      <div className="row x-gap-10 items-center py-25">
                        <div className="col-lg-4">
                          <div className="text-purple-1">
                            Depiction in foreign language films
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="d-flex items-center">
                            <img
                              src="/assets/img/misc/2.png"
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                Heather Reyes
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                10 Nov 2014
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="d-flex items-center">
                            <img
                              src="/assets/img/misc/2.png"
                              alt="image"
                              className="size-40 fit-cover"
                            />
                            <div className="ml-10">
                              <div className="text-dark-1 lh-12 fw-500">
                                Jeffrey Sanders
                              </div>
                              <div className="text-14 lh-12 mt-5">
                                16 Feb 2017
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-1">5</div>

                        <div className="col-lg-1">
                          <div className="d-flex items-center">
                            <div className="form-switch pr-10">
                              <div
                                className="switch"
                                data-switch=".js-switch-content"
                              >
                                <input type="checkbox" />
                                <span className="switch__slider"></span>
                              </div>
                            </div>
                            <div className="icon-bin"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-between items-center mt-50">
                    <a
                      href="#"
                      className="button -icon -purple-3 h-50 text-purple-1"
                    >
                      Forum Netiquette
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>

                    <div className="dropdown js-dropdown js-category-active">
                      <div
                        className="dropdown__button d-flex items-center text-14 bg-white border-light rounded-8 px-20 py-10 "
                        data-el-toggle=".js-category-toggle"
                        data-el-toggle-active=".js-category-active"
                      >
                        <span className="js-dropdown-title">Jump to...</span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
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
                              Business
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="button -icon -purple-3 h-50 text-purple-1"
                    >
                      Share Examples Of Digital
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="rounded-16 bg-white shadow-4 h-100">
                <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">
                    Course discussion The attraction of Mental Illness
                  </h2>

                  <div className="dropdown js-dropdown js-category-active">
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-transparent "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Settings</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
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
                            Business
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-30 px-30">
                  <div className="d-flex items-center justify-between">
                    Search
                    <div className="dropdown js-dropdown js-category-active">
                      <div
                        className="dropdown__button d-flex items-center text-14 bg-light-3 rounded-8 px-20 py-10 "
                        data-el-toggle=".js-category-toggle"
                        data-el-toggle-active=".js-category-active"
                      >
                        <span className="js-dropdown-title">
                          Display Replies In Threaded From
                        </span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
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
                              Business
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row y-gap-30 pt-30">
                    <div className="md:direction-column">
                      <div className="d-flex ">
                        <div className="mr-20">
                          <img src="/assets/img/avatars/1.png" alt="image" />
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400 ml-5">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="d-flex x-gap-5 items-center mt-10">
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                            </div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The best LMS Design
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              This course is a very applicable. Professor Ng
                              explains precisely each algorithm and even tries
                              to give an intuition for mathematical and
                              statistic concepts behind each algorithm. Thank
                              you very much.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <button className="button text-13 px-15 py-10 -light-7 text-purple-1">
                              Respond
                            </button>
                          </div>
                        </div>

                        <div className="ml-20">
                          <a href="#" className="icon-flag"></a>
                        </div>
                      </div>
                    </div>

                    <div className="md:direction-column">
                      <div className="d-flex border-top-light pt-30">
                        <div className="mr-20">
                          <img src="/assets/img/avatars/1.png" alt="image" />
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400 ml-5">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="d-flex x-gap-5 items-center mt-10">
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                            </div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The best LMS Design
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              This course is a very applicable. Professor Ng
                              explains precisely each algorithm and even tries
                              to give an intuition for mathematical and
                              statistic concepts behind each algorithm. Thank
                              you very much.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <button className="button text-13 px-15 py-10 -light-7 text-purple-1">
                              Respond
                            </button>
                          </div>
                        </div>

                        <div className="ml-20">
                          <a href="#" className="icon-flag"></a>
                        </div>
                      </div>
                    </div>

                    <div className="md:direction-column">
                      <div className="d-flex border-top-light pt-30">
                        <div className="mr-20">
                          <img src="/assets/img/avatars/1.png" alt="image" />
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400 ml-5">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="d-flex x-gap-5 items-center mt-10">
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                              <i className="icon-star text-9 text-yellow-1"></i>
                            </div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The best LMS Design
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              This course is a very applicable. Professor Ng
                              explains precisely each algorithm and even tries
                              to give an intuition for mathematical and
                              statistic concepts behind each algorithm. Thank
                              you very much.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <button className="button text-13 px-15 py-10 -light-7 text-purple-1">
                              Respond
                            </button>
                          </div>
                        </div>

                        <div className="ml-20">
                          <a href="#" className="icon-flag"></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-between items-center mt-50">
                    <a
                      href="#"
                      className="button -icon -purple-3 h-50 text-purple-1"
                    >
                      Forum Netiquette
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>

                    <div className="dropdown js-dropdown js-category-active">
                      <div
                        className="dropdown__button d-flex items-center text-14 bg-white border-light rounded-8 px-20 py-10 "
                        data-el-toggle=".js-category-toggle"
                        data-el-toggle-active=".js-category-active"
                      >
                        <span className="js-dropdown-title">Jump to...</span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
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
                              Business
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="button -icon -purple-3 h-50 text-purple-1"
                    >
                      Share Examples Of Digital
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer -dashboard py-30">
          <div className="row items-center justify-between">
            <div className="col-auto">
              <div className="text-13 lh-1">
                © 2022 Educrat. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex items-center flex-wrap x-gap-20">
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Help
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Cookie Notice
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Security
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Terms of Use
                    </a>
                  </div>
                </div>

                <button className="button -md -rounded bg-light-4 text-light-1 ml-30">
                  English
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ForumsContent;
