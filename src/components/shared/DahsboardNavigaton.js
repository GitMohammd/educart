import React from "react";

function DahsboardNavigaton() {
  return (
    <header className="header -dashboard -dark-bg-dark-1 js-header">
      <div className="header__container py-20 px-30">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="header__explore text-dark-1">
                <button className="d-flex items-center js-dashboard-home-9-sidebar-toggle">
                  <i className="icon -dark-text-white icon-explore"></i>
                </button>
              </div>

              <div className="header__logo ml-30 md:ml-20">
                <a data-barba href="index.html">
                  <img
                    className="-light-d-none"
                    src="assets/img/general/logo.svg"
                    alt="logo"
                  />
                  <img
                    className="-dark-d-none"
                    src="assets/img/general/logo-dark.svg"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="text-white d-flex items-center lg:d-none mr-15">
                <div className="dropdown bg-transparent px-0 py-0">
                  <div className="d-flex items-center text-14 text-dark-1">
                    All Pages <i className="text-9 icon-chevron-down ml-10"></i>
                  </div>
                  <div className="dropdown__item -dark-bg-dark-2 -dark-border-white-10">
                    <div className="text-14 y-gap-15">
                      <div>
                        <a
                          href="dashboard.html"
                          className="d-block text-dark-1"
                        >
                          Dashboard
                        </a>
                      </div>
                      <div>
                        <a
                          href="dshb-courses.html"
                          className="d-block text-dark-1"
                        >
                          My Courses
                        </a>
                      </div>
                      <div>
                        <a
                          href="dshb-boormarks.html"
                          className="d-block text-dark-1"
                        >
                          Bookmarks
                        </a>
                      </div>
                      <div>
                        <a
                          href="dshb-listing.html"
                          className="d-block text-dark-1"
                        >
                          Add Listing
                        </a>
                      </div>
                      <div>
                        <a
                          href="dshb-reviews.html"
                          className="d-block text-dark-1"
                        >
                          Reviews
                        </a>
                      </div>
                      <div>
                        <a
                          href="dshb-settings.html"
                          className="d-block text-dark-1"
                        >
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <a
                    href="#"
                    className="d-flex items-center text-dark-1 ml-20"
                    data-el-toggle=".js-courses-toggle"
                  >
                    My Courses
                    <i className="text-9 icon-chevron-down ml-10"></i>
                  </a>

                  <div className="toggle-element js-courses-toggle">
                    <div className="toggle-bottom -courses bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-20">
                      <div className="px-30 py-30">
                        <div className="d-flex mb-20">
                          <img
                            className="size-80 fit-cover"
                            src="assets/img/menus/cart/1.png"
                            alt="image"
                          />

                          <div className="ml-15">
                            <div className="text-dark-1 lh-15 fw-500">
                              Complete Python Bootcamp From Zero to Hero in
                              Python
                            </div>
                            <div className="progress-bar mt-20">
                              <div className="progress-bar__bg bg-light-3"></div>
                              <div className="progress-bar__bar bg-purple-1 w-1/3"></div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex mb-20">
                          <img
                            className="size-80 fit-cover"
                            src="assets/img/menus/cart/2.png"
                            alt="image"
                          />

                          <div className="ml-15">
                            <div className="text-dark-1 lh-15 fw-500">
                              The Ultimate Drawing Course Beginner to Advanced
                            </div>
                            <div className="progress-bar mt-20">
                              <div className="progress-bar__bg bg-light-3"></div>
                              <div className="progress-bar__bar bg-purple-1 w-1/3"></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-20">
                          <a
                            href="#"
                            className="button py-20 -dark-1 text-white -dark-bg-purple-1 -dark-border-dark-2 col-12"
                          >
                            Go to My Learning
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex items-center sm:d-none">
                <div className="relative">
                  <button className="js-darkmode-toggle text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light">
                    <i className="text-24 icon icon-night"></i>
                  </button>
                </div>

                <div className="relative">
                  <button
                    data-maximize
                    className="d-flex text-light-1 items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                  >
                    <i className="text-24 icon icon-maximize"></i>
                  </button>
                </div>

                <div className="relative">
                  <button
                    className="d-flex items-center text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                    data-el-toggle=".js-cart-toggle"
                  >
                    <i className="text-20 icon icon-basket"></i>
                  </button>

                  <div className="toggle-element js-cart-toggle">
                    <div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
                      <div className="px-30 pt-30 pb-10">
                        <div className="row justify-between x-gap-40 pb-20">
                          <div className="col">
                            <div className="row x-gap-10 y-gap-10">
                              <div className="col-auto">
                                <img
                                  src="assets/img/menus/cart/1.png"
                                  alt="image"
                                />
                              </div>

                              <div className="col">
                                <div className="text-dark-1 lh-15">
                                  The Ultimate Drawing Course Beginner to
                                  Advanced...
                                </div>

                                <div className="d-flex items-center mt-10">
                                  <div className="lh-12 fw-500 line-through text-light-1 mr-10">
                                    $179
                                  </div>
                                  <div className="text-18 lh-12 fw-500 text-dark-1">
                                    $79
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-auto">
                            <button>
                              <img
                                src="assets/img/menus/close.svg"
                                alt="icon"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="row justify-between x-gap-40 pb-20">
                          <div className="col">
                            <div className="row x-gap-10 y-gap-10">
                              <div className="col-auto">
                                <img
                                  src="assets/img/menus/cart/2.png"
                                  alt="image"
                                />
                              </div>

                              <div className="col">
                                <div className="text-dark-1 lh-15">
                                  User Experience Design Essentials - Adobe XD
                                  UI UX...
                                </div>

                                <div className="d-flex items-center mt-10">
                                  <div className="lh-12 fw-500 line-through text-light-1 mr-10">
                                    $179
                                  </div>
                                  <div className="text-18 lh-12 fw-500 text-dark-1">
                                    $79
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-auto">
                            <button>
                              <img
                                src="assets/img/menus/close.svg"
                                alt="icon"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="px-30 pt-20 pb-30 border-top-light">
                        <div className="d-flex justify-between">
                          <div className="text-18 lh-12 text-dark-1 fw-500">
                            Total:
                          </div>
                          <div className="text-18 lh-12 text-dark-1 fw-500">
                            $659
                          </div>
                        </div>

                        <div className="row x-gap-20 y-gap-10 pt-30">
                          <div className="col-sm-6">
                            <button className="button py-20 -dark-1 text-white -dark-button-white col-12">
                              View Cart
                            </button>
                          </div>
                          <div className="col-sm-6">
                            <button className="button py-20 -purple-1 text-white col-12">
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <a
                    href="#"
                    className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                    data-el-toggle=".js-msg-toggle"
                  >
                    <i className="text-24 icon icon-email"></i>
                  </a>
                </div>

                <div className="relative">
                  <a
                    href="#"
                    className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                    data-el-toggle=".js-notif-toggle"
                  >
                    <i className="text-24 icon icon-notification"></i>
                  </a>

                  <div className="toggle-element js-notif-toggle">
                    <div className="toggle-bottom -notifications bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-10">
                      <div className="py-30 px-30">
                        <div className="y-gap-40">
                          <div className="d-flex items-center">
                            <div className="shrink-0">
                              <img
                                src="assets/img/dashboard/actions/1.png"
                                alt="image"
                              />
                            </div>
                            <div className="ml-12">
                              <h4 className="text-15 lh-1 fw-500">
                                Your resume updated!
                              </h4>
                              <div className="text-13 lh-1 mt-10">
                                1 Hours Ago
                              </div>
                            </div>
                          </div>

                          <div className="d-flex items-center border-top-light">
                            <div className="shrink-0">
                              <img
                                src="assets/img/dashboard/actions/2.png"
                                alt="image"
                              />
                            </div>
                            <div className="ml-12">
                              <h4 className="text-15 lh-1 fw-500">
                                You changed password
                              </h4>
                              <div className="text-13 lh-1 mt-10">
                                1 Hours Ago
                              </div>
                            </div>
                          </div>

                          <div className="d-flex items-center border-top-light">
                            <div className="shrink-0">
                              <img
                                src="assets/img/dashboard/actions/3.png"
                                alt="image"
                              />
                            </div>
                            <div className="ml-12">
                              <h4 className="text-15 lh-1 fw-500">
                                Your account has been created successfully
                              </h4>
                              <div className="text-13 lh-1 mt-10">
                                1 Hours Ago
                              </div>
                            </div>
                          </div>

                          <div className="d-flex items-center border-top-light">
                            <div className="shrink-0">
                              <img
                                src="assets/img/dashboard/actions/4.png"
                                alt="image"
                              />
                            </div>
                            <div className="ml-12">
                              <h4 className="text-15 lh-1 fw-500">
                                You applied for a job Front-end Developer
                              </h4>
                              <div className="text-13 lh-1 mt-10">
                                1 Hours Ago
                              </div>
                            </div>
                          </div>

                          <div className="d-flex items-center border-top-light">
                            <div className="shrink-0">
                              <img
                                src="assets/img/dashboard/actions/5.png"
                                alt="image"
                              />
                            </div>
                            <div className="ml-12">
                              <h4 className="text-15 lh-1 fw-500">
                                Your course uploaded successfully
                              </h4>
                              <div className="text-13 lh-1 mt-10">
                                1 Hours Ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative d-flex items-center ml-10">
                <a href="#" data-el-toggle=".js-profile-toggle">
                  <img
                    className="size-50"
                    src="assets/img/misc/user-profile.png"
                    alt="image"
                  />
                </a>

                <div className="toggle-element js-profile-toggle">
                  <div className="toggle-bottom -profile bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-10">
                    <div className="px-30 py-30">
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

                        <div className="sidebar__item">
                          <a
                            href="dshb-courses.html"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-play-button mr-15"></i>
                            My Courses
                          </a>
                        </div>

                        <div className="sidebar__item">
                          <a
                            href="dshb-bookmarks.html"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-bookmark mr-15"></i>
                            Bookmarks
                          </a>
                        </div>

                        <div className="sidebar__item">
                          <a
                            href="dshb-messages.html"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-message mr-15"></i>
                            Messages
                          </a>
                        </div>

                        <div className="sidebar__item">
                          <a
                            href="dshb-listing.html"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-list mr-15"></i>
                            Create Course
                          </a>
                        </div>

                        <div className="sidebar__item">
                          <a
                            href="dshb-reviews.html"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-comment mr-15"></i>
                            Reviews
                          </a>
                        </div>

                        <div className="sidebar__item">
                          <a
                            href="dshb-settings.html"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-setting mr-15"></i>
                            Settings
                          </a>
                        </div>

                        <div className="sidebar__item">
                          <a
                            href="#"
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-power mr-15"></i>
                            Logout
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
    </header>
  );
}

export default DahsboardNavigaton;
