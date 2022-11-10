import React from "react";

function BookmarksContent() {
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

          <div className="sidebar__item -is-active -dark-bg-dark-2">
            <a
              href="dshb-bookmarks.html"
              className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
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
              <h1 className="text-30 lh-12 fw-700">Bookmarks</h1>
              <div className="mt-10">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Bookmarked</h2>
                </div>

                <div className="py-30 px-30">
                  <div className="row y-gap-30">
                    <div className="col-xl-6">
                      <a
                        href="#"
                        className="relative d-block rounded-8 px-10 py-10 border-light"
                      >
                        <div className="row x-gap-20 y-gap-20 items-center">
                          <div className="col-md-auto">
                            <div className="shrink-0">
                              <img
                                className="w-1/1"
                                src="assets/img/dashboard/bookmarks/1.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-md">
                            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
                              <i className="icon-bookmark"></i>
                            </div>

                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                              </div>
                              <div className="text-13 lh-1 fw-500 ml-10">
                                (1991)
                              </div>
                            </div>

                            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
                              Learn Figma - UI/UX Design Essential Training
                            </h3>

                            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                              </div>
                            </div>

                            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
                              <div className="d-flex items-center">
                                <img
                                  src="assets/img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div className="text-14 lh-1 ml-10">
                                  Ali Tufan
                                </div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="line-through lh-1 fw-500 mr-10">
                                  $179
                                </div>
                                <div className="text-18 lh-1 fw-500 text-dark-1">
                                  $79
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-xl-6">
                      <a
                        href="#"
                        className="relative d-block rounded-8 px-10 py-10 border-light"
                      >
                        <div className="row x-gap-20 y-gap-20 items-center">
                          <div className="col-md-auto">
                            <div className="shrink-0">
                              <img
                                className="w-1/1"
                                src="assets/img/dashboard/bookmarks/2.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-md">
                            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
                              <i className="icon-bookmark"></i>
                            </div>

                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                              </div>
                              <div className="text-13 lh-1 fw-500 ml-10">
                                (1991)
                              </div>
                            </div>

                            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
                              Learn Figma - UI/UX Design Essential Training
                            </h3>

                            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                              </div>
                            </div>

                            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
                              <div className="d-flex items-center">
                                <img
                                  src="assets/img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div className="text-14 lh-1 ml-10">
                                  Ali Tufan
                                </div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="line-through lh-1 fw-500 mr-10">
                                  $179
                                </div>
                                <div className="text-18 lh-1 fw-500 text-dark-1">
                                  $79
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-xl-6">
                      <a
                        href="#"
                        className="relative d-block rounded-8 px-10 py-10 border-light"
                      >
                        <div className="row x-gap-20 y-gap-20 items-center">
                          <div className="col-md-auto">
                            <div className="shrink-0">
                              <img
                                className="w-1/1"
                                src="assets/img/dashboard/bookmarks/3.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-md">
                            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
                              <i className="icon-bookmark"></i>
                            </div>

                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                              </div>
                              <div className="text-13 lh-1 fw-500 ml-10">
                                (1991)
                              </div>
                            </div>

                            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
                              Learn Figma - UI/UX Design Essential Training
                            </h3>

                            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                              </div>
                            </div>

                            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
                              <div className="d-flex items-center">
                                <img
                                  src="assets/img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div className="text-14 lh-1 ml-10">
                                  Ali Tufan
                                </div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="line-through lh-1 fw-500 mr-10">
                                  $179
                                </div>
                                <div className="text-18 lh-1 fw-500 text-dark-1">
                                  $79
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-xl-6">
                      <a
                        href="#"
                        className="relative d-block rounded-8 px-10 py-10 border-light"
                      >
                        <div className="row x-gap-20 y-gap-20 items-center">
                          <div className="col-md-auto">
                            <div className="shrink-0">
                              <img
                                className="w-1/1"
                                src="assets/img/dashboard/bookmarks/4.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-md">
                            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
                              <i className="icon-bookmark"></i>
                            </div>

                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                              </div>
                              <div className="text-13 lh-1 fw-500 ml-10">
                                (1991)
                              </div>
                            </div>

                            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
                              Learn Figma - UI/UX Design Essential Training
                            </h3>

                            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                              </div>
                            </div>

                            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
                              <div className="d-flex items-center">
                                <img
                                  src="assets/img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div className="text-14 lh-1 ml-10">
                                  Ali Tufan
                                </div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="line-through lh-1 fw-500 mr-10">
                                  $179
                                </div>
                                <div className="text-18 lh-1 fw-500 text-dark-1">
                                  $79
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-xl-6">
                      <a
                        href="#"
                        className="relative d-block rounded-8 px-10 py-10 border-light"
                      >
                        <div className="row x-gap-20 y-gap-20 items-center">
                          <div className="col-md-auto">
                            <div className="shrink-0">
                              <img
                                className="w-1/1"
                                src="assets/img/dashboard/bookmarks/5.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-md">
                            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
                              <i className="icon-bookmark"></i>
                            </div>

                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                              </div>
                              <div className="text-13 lh-1 fw-500 ml-10">
                                (1991)
                              </div>
                            </div>

                            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
                              Learn Figma - UI/UX Design Essential Training
                            </h3>

                            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                              </div>
                            </div>

                            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
                              <div className="d-flex items-center">
                                <img
                                  src="assets/img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div className="text-14 lh-1 ml-10">
                                  Ali Tufan
                                </div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="line-through lh-1 fw-500 mr-10">
                                  $179
                                </div>
                                <div className="text-18 lh-1 fw-500 text-dark-1">
                                  $79
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-xl-6">
                      <a
                        href="#"
                        className="relative d-block rounded-8 px-10 py-10 border-light"
                      >
                        <div className="row x-gap-20 y-gap-20 items-center">
                          <div className="col-md-auto">
                            <div className="shrink-0">
                              <img
                                className="w-1/1"
                                src="assets/img/dashboard/bookmarks/6.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-md">
                            <div className="absolute-bookmark -dark-bg-dark-2 shadow-5">
                              <i className="icon-bookmark"></i>
                            </div>

                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 fw-500 text-yellow-1 mr-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                                <i className="icon-star text-9 text-yellow-1"></i>
                              </div>
                              <div className="text-13 lh-1 fw-500 ml-10">
                                (1991)
                              </div>
                            </div>

                            <h3 className="text-17 lh-16 fw-500 mt-10 pr-40 xl:pr-0">
                              Learn Figma - UI/UX Design Essential Training
                            </h3>

                            <div className="d-flex x-gap-20 y-gap-5 items-center flex-wrap pt-10">
                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 lesson</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">3h 56m</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="mr-10">
                                  <img
                                    src="assets/img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">Beginner</div>
                              </div>
                            </div>

                            <div className="d-flex y-gap-10 justify-between items-center flex-wrap border-top-light pt-10 mt-10">
                              <div className="d-flex items-center">
                                <img
                                  src="assets/img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div className="text-14 lh-1 ml-10">
                                  Ali Tufan
                                </div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="line-through lh-1 fw-500 mr-10">
                                  $179
                                </div>
                                <div className="text-18 lh-1 fw-500 text-dark-1">
                                  $79
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="row justify-center pt-30">
                    <div className="col-auto">
                      <div className="pagination -buttons">
                        <button className="pagination__button -prev">
                          <div className="icon icon-chevron-left"></div>
                        </button>

                        <div className="pagination__count">
                          <a href="#">1</a>
                          <a className="-count-is-active" href="#">
                            2
                          </a>
                          <a href="#">3</a>
                          <span>...</span>
                          <a href="#">67</a>
                        </div>

                        <button className="pagination__button -next">
                          <div className="icon icon-chevron-right"></div>
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

export default BookmarksContent;
