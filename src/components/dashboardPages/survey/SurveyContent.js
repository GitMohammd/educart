import React from "react";

function SurveyContent() {
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
              <h1 className="text-30 lh-12 fw-700">Survey</h1>

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
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Page Head</h2>
                </div>

                <div className="py-30 px-30">
                  <h4 className="text-24 lh-12 fw-500">
                    Your views on this course
                  </h4>
                  <div className="mt-15">
                    Mode: User's name will be logged and shown with answers
                  </div>

                  <div className="mt-50">
                    <div className="row y-gap-20">
                      <div className="col-lg-4">
                        <div className="text-dark-1">
                          How do you rate this course?
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="form-radio d-flex items-center ">
                          <div className="radio">
                            <input type="radio" name="rate" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className=" ml-12">Outstanding</div>
                        </div>

                        <div className="form-radio d-flex items-center mt-10">
                          <div className="radio">
                            <input type="radio" name="rate" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className=" ml-12">Good</div>
                        </div>

                        <div className="form-radio d-flex items-center mt-10">
                          <div className="radio">
                            <input type="radio" name="rate" checked />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className=" ml-12">Satisfactory</div>
                        </div>

                        <div className="form-radio d-flex items-center mt-10">
                          <div className="radio">
                            <input type="radio" name="rate" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className=" ml-12">Poor</div>
                        </div>
                      </div>
                    </div>

                    <div className="row y-gap-20 pt-40">
                      <div className="col-lg-4">
                        <div className="text-dark-1">
                          In one word, how would you describe the course to
                          other students?
                        </div>
                      </div>

                      <div className="col-auto">
                        <form action="post" className="contact-form">
                          <div className="col-12">
                            <input type="text" name="name" placeholder="Text" />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row y-gap-20 pt-40">
                      <div className="col-lg-4">
                        <div className="text-dark-1">
                          Did you use the mobile app?
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="form-radio d-flex items-center ">
                          <div className="radio">
                            <input type="radio" name="name" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className=" ml-12">Yes</div>
                        </div>

                        <div className="form-radio d-flex items-center mt-10">
                          <div className="radio">
                            <input type="radio" name="name" checked />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className=" ml-12">No</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex x-gap-20 items-center pt-30">
                    <div>
                      <a
                        href="#"
                        className="button px-50 -dark-1 -dark-button-white h-50 text-white"
                      >
                        Next Page
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button px-50 -outline-dark-1 h-50 text-dark-1"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>

                  <div className="d-flex justify-between items-center mt-40">
                    <a
                      href="#"
                      className="button -icon -purple-3 h-50 text-purple-1"
                    >
                      Forum Netiquette
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>

                    <div className="dropdown js-dropdown js-category-active">
                      <div
                        className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 -dark-border-white-10 border-light rounded-8 px-20 py-10 "
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

export default SurveyContent;
