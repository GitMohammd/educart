import React from "react";

function SingleDashboardContent() {
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
              <h1 className="text-30 lh-12 fw-700">Dashboard</h1>

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

          <div className="row y-gap-50">
            <div className="col-xl-9 col-lg-12">
              <div className="row y-gap-30">
                <div className="col-xl-4 col-md-6">
                  <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <div>
                      <div className="lh-1 fw-500">Total Sales</div>
                      <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                        $10,800
                      </div>
                      <div className="lh-1 mt-25">
                        <span className="text-purple-1">$50</span> New Sales
                      </div>
                    </div>

                    <i className="text-40 icon-coupon text-purple-1"></i>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6">
                  <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <div>
                      <div className="lh-1 fw-500">Total Courses</div>
                      <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                        3,759
                      </div>
                      <div className="lh-1 mt-25">
                        <span className="text-purple-1">40+</span> New Courses
                      </div>
                    </div>

                    <i className="text-40 icon-play-button text-purple-1"></i>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6">
                  <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <div>
                      <div className="lh-1 fw-500">Total Students</div>
                      <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                        129,786
                      </div>
                      <div className="lh-1 mt-25">
                        <span className="text-purple-1">90+</span> New Students
                      </div>
                    </div>

                    <i className="text-40 icon-graduate-cap text-purple-1"></i>
                  </div>
                </div>
              </div>

              <div className="row y-gap-30 pt-30">
                <div className="col-md-6">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                      <h2 className="text-17 lh-1 fw-500">
                        Your Profile Views
                      </h2>
                      <div className="">
                        <div className="text-14">This Week</div>
                      </div>
                    </div>
                    <div className="py-40 px-30">
                      <canvas id="lineChart"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                      <h2 className="text-17 lh-1 fw-500">Traffic</h2>
                      <div className="">
                        <div className="">This Week</div>
                      </div>
                    </div>
                    <div className="py-40 px-30">
                      <canvas id="pieChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row y-gap-30 pt-30">
                <div className="col-12">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div className="d-flex items-center py-20 px-30 border-bottom-light">
                      <h2 className="text-17 lh-1 fw-500">Course overview</h2>
                    </div>

                    <div className="py-30 px-30">
                      <div className="row y-gap-20 justify-between mb-20">
                        <div className="col-auto">
                          <div className="dropdown js-dropdown js-past-active">
                            <div
                              className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                              data-el-toggle=".js-past-toggle"
                              data-el-toggle-active=".js-past-active"
                            >
                              <span className="js-dropdown-title">Past</span>
                              <i className="icon text-9 ml-40 icon-chevron-down"></i>
                            </div>

                            <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-past-toggle">
                              <div className="text-14 y-gap-15 js-dropdown-list">
                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Past
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Past
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Past
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Past
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="row x-gap-20 y-gap-20">
                            <div className="col-auto">
                              <div className="dropdown js-dropdown js-course-name-active">
                                <div
                                  className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                  data-el-toggle=".js-course-name-toggle"
                                  data-el-toggle-active=".js-course-name-active"
                                >
                                  <span className="js-dropdown-title">
                                    Course Name
                                  </span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-course-name-toggle">
                                  <div className="text-14 y-gap-15 js-dropdown-list">
                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Animation
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Design
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Illustration
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Business
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="dropdown js-dropdown js-show-2-active">
                                <div
                                  className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                  data-el-toggle=".js-show-2-toggle"
                                  data-el-toggle-active=".js-show-2-active"
                                >
                                  <span className="js-dropdown-title">
                                    Show 8
                                  </span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-show-2-toggle">
                                  <div className="text-14 y-gap-15 js-dropdown-list">
                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Animation
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Design
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Illustration
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Business
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="dropdown js-dropdown js-cart-2-active">
                                <div
                                  className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                  data-el-toggle=".js-cart-2-toggle"
                                  data-el-toggle-active=".js-cart-2-active"
                                >
                                  <span className="js-dropdown-title">
                                    Cart
                                  </span>
                                  <i className="icon text-9 ml-40 icon-chevron-down"></i>
                                </div>

                                <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-cart-2-toggle">
                                  <div className="text-14 y-gap-15 js-dropdown-list">
                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Animation
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Design
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Illustration
                                      </a>
                                    </div>

                                    <div>
                                      <a
                                        href="#"
                                        className="d-block js-dropdown-link"
                                      >
                                        Business
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row y-gap-30">
                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/1.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/2.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/3.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/4.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/5.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/6.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/7.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6">
                          <a href="#">
                            <div>
                              <img
                                className="rounded-8 w-1/1"
                                src="/assets/img/coursesCards/8.png"
                                alt="image"
                              />
                            </div>

                            <div className="pt-15">
                              <div className="d-flex y-gap-10 justify-between items-center">
                                <div className="text-14 lh-1">Ali Tufan</div>

                                <div className="d-flex items-center">
                                  <div className="text-14 lh-1 text-yellow-1 mr-10">
                                    4.5
                                  </div>
                                  <div className="d-flex x-gap-5 items-center">
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                    <i className="icon-star text-9 text-yellow-1"></i>
                                  </div>
                                </div>
                              </div>

                              <h3 className="text-16 fw-500 lh-15 mt-10">
                                Learn Figma - UI/UX Design Essential Training
                              </h3>

                              <div className="progress-bar mt-10">
                                <div className="progress-bar__bg bg-light-3"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>

                              <div className="d-flex y-gap-10 justify-between items-center mt-10">
                                <div className="text-dark-1">
                                  % 20 Completed
                                </div>
                                <div>25%</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row y-gap-30 pt-30">
                <div className="col-md-6">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                      <h2 className="text-17 lh-1 fw-500">Recent Courses</h2>
                      <a hre="#" className="text-14 text-purple-1 underline">
                        View All
                      </a>
                    </div>
                    <div className="py-30 px-30">
                      <div className="y-gap-40">
                        <div className="d-flex ">
                          <div className="shrink-0">
                            <img
                              src="/assets/img/dashboard/recent-courses/1.png"
                              alt="image"
                            />
                          </div>
                          <div className="ml-15">
                            <h4 className="text-15 lh-16 fw-500">
                              Complete Python Bootcamp From Zero to Hero in
                              Python
                            </h4>
                            <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">Ali Tufan</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">6 lesson</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">3h 56m</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex border-top-light">
                          <div className="shrink-0">
                            <img
                              src="/assets/img/dashboard/recent-courses/2.png"
                              alt="image"
                            />
                          </div>
                          <div className="ml-15">
                            <h4 className="text-15 lh-16 fw-500">
                              The Ultimate Drawing Course Beginner to Advanced
                            </h4>
                            <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">Ali Tufan</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">6 lesson</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">3h 56m</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex border-top-light">
                          <div className="shrink-0">
                            <img
                              src="/assets/img/dashboard/recent-courses/3.png"
                              alt="image"
                            />
                          </div>
                          <div className="ml-15">
                            <h4 className="text-15 lh-16 fw-500">
                              Instagram Marketing 2021: Complete Guide To
                              Instagram Growth
                            </h4>
                            <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">Ali Tufan</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">6 lesson</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">3h 56m</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex border-top-light">
                          <div className="shrink-0">
                            <img
                              src="/assets/img/dashboard/recent-courses/4.png"
                              alt="image"
                            />
                          </div>
                          <div className="ml-15">
                            <h4 className="text-15 lh-16 fw-500">
                              Complete Python Bootcamp From Zero to Hero in
                              Python
                            </h4>
                            <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">Ali Tufan</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">6 lesson</div>
                              </div>
                              <div className="d-flex items-center">
                                <i className="icon-online-learning-1 text-15 mr-10"></i>
                                <div className="text-13 lh-1">3h 56m</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                      <h2 className="text-17 lh-1 fw-500">Timeline</h2>
                    </div>
                    <div className="py-30 px-30">
                      <div className="d-flex justify-between flex-wrap y-gap-15 pb-30">
                        <div>
                          <div
                            className="dropdown"
                            data-el-toggle=".js-clock-toggle"
                          >
                            <div className="d-flex items-center text-14">
                              <span className="icon-clock-2 text-16 js-dropdown-title"></span>
                              <i className="icon text-9 ml-15 icon-chevron-down"></i>
                            </div>

                            <div className="toggle-element -dropdown js-clock-toggle">
                              <div className="text-14 y-gap-15 js-dropdown-list">
                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Animation
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Design
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Illustration
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Lifestyle
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Business
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div
                            className="dropdown"
                            data-el-toggle=".js-filter-toggle"
                          >
                            <div className="d-flex items-center text-14">
                              <span className="icon-list-sort text-16 js-dropdown-title"></span>
                              <i className="icon text-9 ml-15 icon-chevron-down"></i>
                            </div>

                            <div className="toggle-element -dropdown js-filter-toggle">
                              <div className="text-14 y-gap-15 js-dropdown-list">
                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Animation
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Design
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Illustration
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Lifestyle
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="d-block js-dropdown-link"
                                  >
                                    Business
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="y-gap-40 pb-20">
                        <div className="border-bottom-light">
                          <div className="d-flex items-center">
                            <img
                              src="/assets/img/dashboard/actions/1.png"
                              alt="image"
                            />
                            <h5 className="text-15 lh-11 fw-500 ml-10">
                              Monday, 21 October 2024
                            </h5>
                          </div>

                          <div className="d-flex justify-between w-1/1 mt-20">
                            <div className="w-1/1">
                              <div className="text-14 lh-11 text-dark-1 fw-500">
                                What do you think about course should be
                                completed
                              </div>
                              <a
                                href="#"
                                className="d-block text-14 lh-11 text-orange-1 underline mt-10"
                              >
                                Your Road to Better Photography
                              </a>
                              <a
                                href="#"
                                className="d-block text-14 lh-11 text-purple-1 underline fw-500 mt-10"
                              >
                                Add submission
                              </a>
                            </div>

                            <div className="text-14 lh-11">17:52</div>
                          </div>
                        </div>

                        <div className="border-bottom-light">
                          <div className="d-flex items-center">
                            <img
                              src="/assets/img/dashboard/actions/2.png"
                              alt="image"
                            />
                            <h5 className="text-15 lh-11 fw-500 ml-10">
                              Monday, 21 October 2024
                            </h5>
                          </div>

                          <div className="d-flex justify-between w-1/1 mt-20">
                            <div className="w-1/1">
                              <div className="text-14 lh-11 text-dark-1 fw-500">
                                What do you think about course should be
                                completed
                              </div>
                              <a
                                href="#"
                                className="d-block text-14 lh-11 text-orange-1 underline mt-10"
                              >
                                Your Road to Better Photography
                              </a>
                              <a
                                href="#"
                                className="d-block text-14 lh-11 text-purple-1 underline fw-500 mt-10"
                              >
                                Add submission
                              </a>
                            </div>

                            <div className="text-14 lh-11">17:52</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-inline-block mt-20">
                        <div className="dropdown js-dropdown js-show-active">
                          <div
                            className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                            data-el-toggle=".js-show-toggle"
                            data-el-toggle-active=".js-show-active"
                          >
                            <span className="js-dropdown-title">Show 12</span>
                            <i className="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>

                          <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-show-toggle">
                            <div className="text-14 y-gap-15 js-dropdown-list">
                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Animation
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Design
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Illustration
                                </a>
                              </div>

                              <div>
                                <a
                                  href="#"
                                  className="d-block js-dropdown-link"
                                >
                                  Business
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-12">
              <div className="row y-gap-30">
                <div className="col-12">
                  <div className="d-flex items-center flex-column text-center py-40 px-40 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <img src="/assets/img/dashboard/demo/1.png" alt="image" />
                    <div className="text-17 fw-500 text-dark-1 mt-20">
                      Student Demo
                    </div>
                    <div className="text-14 lh-1 mt-5">
                      studentdemo1@example.com
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-20">Latest Badges</h5>

                    <div className="">
                      <div className="d-flex">
                        <div className="shrink-0">
                          <img
                            src="/assets/img/dashboard/badges/1.png"
                            alt="badge"
                          />
                        </div>

                        <div className="ml-20">
                          <h6 className="text-17 fw-500">Level 5</h6>
                          <div className="text-14 mt-5">
                            Cum sociis natoque penatibus et magnis.
                          </div>
                        </div>
                      </div>

                      <div className="d-flex x-gap-30 item-center pt-20">
                        <img
                          src="/assets/img/dashboard/badges/2.png"
                          alt="badge"
                        />
                        <img
                          src="/assets/img/dashboard/badges/3.png"
                          alt="badge"
                        />
                        <img
                          src="/assets/img/dashboard/badges/4.png"
                          alt="badge"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500">Online Users</h5>
                    <div className="text-14 mt-8">
                      2 online user (last 12 minutes)
                    </div>

                    <div className="mt-30">
                      <div className="row y-gap-10">
                        <div className="col-12">
                          <div className="d-flex items-center">
                            <div className="shrink-0">
                              <img
                                src="/assets/img/dashboard/online-users/1.png"
                                alt="badge"
                              />
                            </div>
                            <div className="ml-10">
                              <h6 className="text-14 lh-11 fw-500">
                                Cody Fisher
                              </h6>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="d-flex items-center border-top-light pt-10">
                            <div className="shrink-0">
                              <img
                                src="/assets/img/dashboard/online-users/2.png"
                                alt="badge"
                              />
                            </div>
                            <div className="ml-10">
                              <h6 className="text-14 lh-11 fw-500">
                                Courtney Henry
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-30">Tags</h5>
                    <div className="d-flex flex-wrap x-gap-10 y-gap-10">
                      <div>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href="#"
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            Courses
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href="#"
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            Learn
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href="#"
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            Online
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href="#"
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            Education
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href="#"
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            LMS
                          </a>
                        </div>
                      </div>

                      <div>
                        <div className="d-flex justify-center items-center px-15 py-8 rounded-200 bg-light-3">
                          <a
                            href="#"
                            className="text-11 lh-10 fw-500 text-dark-1"
                          >
                            Training
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-30">Calendar</h5>

                    <div className="d-flex x-gap-10 y-gap-10 justify-between items-center pb-15">
                      <div>
                        <a href="#" className="icon-chevron-left text-13"></a>
                      </div>
                      <div className="text-14 lh-11 text-dark-1 fw-500">
                        May 2022
                      </div>
                      <div>
                        <a href="#" className="icon-chevron-right text-13"></a>
                      </div>
                    </div>

                    <div className="d-flex x-gap-10 y-gap-10 flex-wrap pb-15">
                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">SUN</div>
                        </div>
                      </div>

                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">MON</div>
                        </div>
                      </div>

                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">TUE</div>
                        </div>
                      </div>

                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">WED</div>
                        </div>
                      </div>

                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">THU</div>
                        </div>
                      </div>

                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">FRI</div>
                        </div>
                      </div>

                      <div className="w-1/7">
                        <div className="d-flex justify-center size-30 items-center">
                          <div className="text-13 text-dark-1">SAT</div>
                        </div>
                      </div>
                    </div>

                    <div className="sidebar-calendar d-flex x-gap-10 y-gap-10 flex-wrap js-sidebar-calendar">
                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-light-1">28</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-light-1">29</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-light-1">30</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">1</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">2</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">3</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">4</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">5</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">6</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">7</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">8</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">9</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">10</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">11</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">12</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">13</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">14</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">15</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">16</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">17</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">18</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">19</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">20</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button -is-active d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">21</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">22</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">23</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">24</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">25</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">26</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">27</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-light-1">28</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-light-1">29</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-light-1">30</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">31</div>
                        </button>
                      </div>

                      <div className="w-1/7">
                        <button className="sidebar-calendar__button d-flex justify-center items-center size-30 rounded-full js-button">
                          <div className="text-14 text-dark-1">1</div>
                        </button>
                      </div>
                    </div>
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

export default SingleDashboardContent;
