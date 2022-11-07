import React from "react";

function QuizContent() {
  return (
    <div className="dashboard -home-9 js-dashboard-home-9">
      <div className="dashboard__sidebar scroll-bar-1">
        <div className="sidebar -dashboard">
          <div className="sidebar__item ">
            <a
              href="dashboard.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
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

          <div className="sidebar__item -is-active -dark-bg-dark-2">
            <a
              href="dshb-listing.html"
              className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
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
              <h1 className="text-30 lh-12 fw-700">Quiz</h1>

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
            <div className="col-xl-9">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Quiz</h2>
                </div>

                <div className="py-30 px-30">
                  <div className="border-light overflow-hidden rounded-8">
                    <div className="py-40 px-40 bg-dark-5">
                      <div className="d-flex justify-between">
                        <h4 className="text-18 lh-1 fw-500 text-white">
                          Question 1
                        </h4>
                        <div className="d-flex x-gap-50">
                          <div className="d-flex items-center text-white">
                            <div className="icon-flag mr-10"></div>
                            <div>Flag Question</div>
                          </div>
                          <div className="d-flex items-center text-white">
                            <div className="icon-edit mr-10"></div>
                            <div>Edit Question</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pt-15">
                        <div className="text-white">Not yet answered</div>
                        <div className="text-white ml-50">
                          Marked out of 1.00
                        </div>
                      </div>

                      <div className="text-20 lh-1 text-white mt-15">
                        You are watching the TV news and see this appear on the
                        screen:
                      </div>
                    </div>

                    <div className="px-40 py-40">
                      <div className="mb-30">Select one:</div>

                      <div className="form-radio d-flex items-center ">
                        <div className="radio">
                          <input type="radio" name="name" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className="fw-500 ml-12">a. A tweet</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-20">
                        <div className="radio">
                          <input type="radio" name="name" checked />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className="fw-500 ml-12">b. A hashtag</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-20">
                        <div className="radio">
                          <input type="radio" name="name" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className="fw-500 ml-12">c. A tag</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-light overflow-hidden rounded-8 mt-30">
                    <div className="py-40 px-40 bg-dark-5">
                      <div className="d-flex justify-between">
                        <h4 className="text-18 lh-1 fw-500 text-white">
                          Question 2
                        </h4>
                        <div className="d-flex x-gap-50">
                          <div className="d-flex items-center text-white">
                            <div className="icon-flag mr-10"></div>
                            <div>Flag Question</div>
                          </div>
                          <div className="d-flex items-center text-white">
                            <div className="icon-edit mr-10"></div>
                            <div>Edit Question</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pt-15">
                        <div className="text-white">Not yet answered</div>
                        <div className="text-white ml-50">
                          Marked out of 1.00
                        </div>
                      </div>

                      <div className="text-20 lh-1 text-white mt-15">
                        Complete the sentences:
                      </div>
                    </div>

                    <form className="contact-form px-40 py-40">
                      <div className="d-flex items-center">
                        <div>
                          If I want to send short messages of under 140
                          characters, I use
                        </div>

                        <div className="col-auto ml-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Text..."
                          />
                        </div>
                      </div>
                      <div className="d-flex items-center mt-20">
                        <div>If I want to quickly share pictures I can use</div>

                        <div className="col-auto ml-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Text..."
                          />
                        </div>
                      </div>
                      <div className="d-flex items-center mt-20">
                        <div>
                          If I want to do a videochat on my iPhone I can use
                        </div>

                        <div className="col-auto ml-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Text..."
                          />
                        </div>
                      </div>

                      <div className="mt-40">
                        <div className="d-flex x-gap-20 y-gap-10">
                          <div>
                            <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                              Twitter
                            </button>
                          </div>

                          <div>
                            <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                              Instagram
                            </button>
                          </div>

                          <div>
                            <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                              Facetime
                            </button>
                          </div>

                          <div>
                            <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                              Pinterest{" "}
                            </button>
                          </div>

                          <div>
                            <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                              Youtube
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="border-light overflow-hidden rounded-8 mt-30">
                    <div className="py-40 px-40 bg-dark-5">
                      <div className="d-flex justify-between">
                        <h4 className="text-18 lh-1 fw-500 text-white">
                          Question 3
                        </h4>
                        <div className="d-flex x-gap-50">
                          <div className="d-flex items-center text-white">
                            <div className="icon-flag mr-10"></div>
                            <div>Flag Question</div>
                          </div>
                          <div className="d-flex items-center text-white">
                            <div className="icon-edit mr-10"></div>
                            <div>Edit Question</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pt-15">
                        <div className="text-white">Not yet answered</div>
                        <div className="text-white ml-50">
                          Marked out of 1.00
                        </div>
                      </div>

                      <div className="text-20 lh-1 text-white mt-15">
                        A short message on Twitter is called a ?????
                      </div>
                    </div>

                    <form className="contact-form px-40 py-40">
                      <div className="d-flex items-center">
                        <div>Answer</div>

                        <div className="col-lg-7 ml-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Text..."
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="border-light overflow-hidden rounded-8 mt-30">
                    <div className="py-40 px-40 bg-dark-5">
                      <div className="d-flex justify-between">
                        <h4 className="text-18 lh-1 fw-500 text-white">
                          Question 4
                        </h4>
                        <div className="d-flex x-gap-50">
                          <div className="d-flex items-center text-white">
                            <div className="icon-flag mr-10"></div>
                            <div>Flag Question</div>
                          </div>
                          <div className="d-flex items-center text-white">
                            <div className="icon-edit mr-10"></div>
                            <div>Edit Question</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pt-15">
                        <div className="text-white">Not yet answered</div>
                        <div className="text-white ml-50">
                          Marked out of 1.00
                        </div>
                      </div>

                      <div className="text-20 lh-1 text-white mt-15">
                        Match the icons to their sites.
                      </div>
                    </div>

                    <form className="contact-form px-40 py-40">
                      <div className="d-flex items-center">
                        <div>Answer</div>

                        <div className="col-lg-7 ml-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Text..."
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="border-light overflow-hidden rounded-8 mt-30">
                    <div className="py-40 px-40 bg-dark-5">
                      <div className="d-flex justify-between">
                        <h4 className="text-18 lh-1 fw-500 text-white">
                          Question 5
                        </h4>
                        <div className="d-flex x-gap-50">
                          <div className="d-flex items-center text-white">
                            <div className="icon-flag mr-10"></div>
                            <div>Flag Question</div>
                          </div>
                          <div className="d-flex items-center text-white">
                            <div className="icon-edit mr-10"></div>
                            <div>Edit Question</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex pt-15">
                        <div className="text-white">Not yet answered</div>
                        <div className="text-white ml-50">
                          Marked out of 1.00
                        </div>
                      </div>

                      <div className="text-20 lh-1 text-white mt-15">
                        Facebook was founded in 2005.
                      </div>
                    </div>

                    <div className="px-40 py-40">
                      <div className="mb-20">Select one:</div>

                      <div className="form-radio d-flex items-center ">
                        <div className="radio">
                          <input type="radio" name="name" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className="fw-500 ml-12">True</div>
                      </div>

                      <div className="form-radio d-flex items-center mt-20">
                        <div className="radio">
                          <input type="radio" name="name" />
                          <div className="radio__mark">
                            <div className="radio__icon"></div>
                          </div>
                        </div>
                        <div className="fw-500 ml-12">False</div>
                      </div>

                      <a
                        href="#"
                        className="d-block fw-500 text-purple-1 underline mt-20"
                      >
                        Clear my choice
                      </a>
                    </div>
                  </div>

                  <div className="d-flex justify-end">
                    <button className="button -md -dark-1 text-white -dark-button-white mt-40">
                      Finish
                    </button>
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

            <div className="col-xl-3 col-lg-3">
              <div className="row y-gap-30">
                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-30">Quiz Complite</h5>

                    <div className="d-flex items-center">
                      <div className="progress-bar w-1/1">
                        <div className="progress-bar__bg bg-light-3"></div>
                        <div className="progress-bar__bar bg-purple-1 w-1/4"></div>
                      </div>

                      <div className="d-flex y-gap-10 justify-between items-center ml-15">
                        <div>25%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-30">Quiz Navigation</h5>

                    <div className="row x-gap-10 y-gap-10">
                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                        >
                          <div className="text-15 lh-1 fw-500">1</div>
                        </a>
                      </div>

                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                        >
                          <div className="text-15 lh-1 fw-500">2</div>
                        </a>
                      </div>

                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                        >
                          <div className="text-15 lh-1 fw-500">3</div>
                        </a>
                      </div>

                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                        >
                          <div className="text-15 lh-1 fw-500">4</div>
                        </a>
                      </div>

                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                        >
                          <div className="text-15 lh-1 fw-500">5</div>
                        </a>
                      </div>

                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                        >
                          <div className="text-15 lh-1 fw-500">6</div>
                        </a>
                      </div>
                    </div>

                    <button className="button -md -dark-1 text-white -dark-button-white mt-30">
                      Finish
                    </button>
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

export default QuizContent;
