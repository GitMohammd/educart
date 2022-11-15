import React from "react";

function ReviewsContent() {
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

          <div className="sidebar__item ">
            <a
              href="dshb-listing.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-list mr-15"></i>
              Create Course
            </a>
          </div>

          <div className="sidebar__item -is-active -dark-bg-dark-2">
            <a
              href="dshb-reviews.html"
              className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
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
              <h1 className="text-30 lh-12 fw-700">Reviews</h1>
              <div className="mt-10">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">All Reviews</h2>
                </div>

                <div className="py-30 px-30">
                  <div className="row y-gap-30">
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

                            <div className="d-flex x-gap-5 items-center mt-15">
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
                            <button className="button text-13 -sm -light-7 -dark-button-dark-2 text-purple-1">
                              Respond
                            </button>
                          </div>
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

                            <div className="d-flex x-gap-5 items-center mt-15">
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
                            <button className="button text-13 -sm -light-7 -dark-button-dark-2 text-purple-1">
                              Respond
                            </button>
                          </div>
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

                            <div className="d-flex x-gap-5 items-center mt-15">
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
                            <button className="button text-13 -sm -light-7 -dark-button-dark-2 text-purple-1">
                              Respond
                            </button>
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

export default ReviewsContent;
