import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import UseCourseContext from "../context/cartContext/UseCourseContext";
import DashboardNavCart from "./DashboardNavCart";

function DahsboardNavigaton({ isLeftBar, setLeftBarOpen, setSideBarOpen }) {
  const location = useLocation();
  const notifBtnRef = useRef();
  const [isNotify, setNotify] = useState(false);
  useEffect(() => {
    const notifyOpen = (e) => {
      if (!notifBtnRef.current.contains(e.target)) {
        setNotify(false);
      }
    };
    document.addEventListener("mousedown", notifyOpen);
    return () => {
      document.removeEventListener("mousedown", notifyOpen);
    };
  }, []);
  const coursesBtnRef = useRef();
  const [isCourseOpen, setCourseOpen] = useState(false);
  useEffect(() => {
    const courseBtnOpen = (e) => {
      if (!coursesBtnRef.current.contains(e.target)) {
        setCourseOpen(false);
      }
    };
    document.body.addEventListener("click", courseBtnOpen);

    return () => {
      document.body.removeEventListener("click", courseBtnOpen);
    };
  }, []);
  const cartBtnRef = useRef();
  const [isCartOpen, setCartOpen] = useState(false);
  useEffect(() => {
    const cartBtnOpen = (e) => {
      if (!cartBtnRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.body.addEventListener("click", cartBtnOpen);
    return () => {
      document.body.removeEventListener("click", cartBtnOpen);
    };
  }, []);

  const profileBtnRef = useRef();
  const [isProfileOpen, setProfileOpen] = useState(false);
  useEffect(() => {
    const profileBtnOpen = (e) => {
      if (!profileBtnRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.body.addEventListener("click", profileBtnOpen);
    return () => {
      document.body.removeEventListener("click", profileBtnOpen);
    };
  }, []);

  const [isDark, setDark] = useState(true);

  useEffect(() => {
    isDark
      ? document.documentElement.classList.remove("-dark-mode")
      : document.documentElement.classList.add("-dark-mode");
  }, [isDark]);

  // const handleDarkMode = () => {
  //   isDark
  //     ? document.documentElement.classList.toggle("-dark-mode")
  //     : document.documentElement.classList.toggle("-dark-mode");
  // };

  return (
    <header className="header -dashboard -dark-bg-dark-1 js-header">
      <div className="header__container py-20 px-30">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="header__explore text-dark-1">
                <button
                  onClick={() => setLeftBarOpen(!isLeftBar)}
                  className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                >
                  <i className="icon -dark-text-white icon-explore"></i>
                </button>
              </div>

              <div className="header__logo ml-30 md:ml-20">
                <Link to={"/home1"}>
                  <img
                    className="-light-d-none"
                    src="/assets/img/general/logo.svg"
                    alt="logo"
                  />
                  <img
                    className="-dark-d-none"
                    src="/assets/img/general/logo-dark.svg"
                    alt="logo"
                  />
                </Link>
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
                        <Link
                          to={"/dashboards/dashboard"}
                          className="d-block text-dark-1"
                        >
                          Dashboard
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="d-block text-dark-1"
                          to={"/dashboards/myCourses"}
                        >
                          My Courses
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"/dashboards/bookmarks"}
                          className="d-block text-dark-1"
                        >
                          Bookmarks
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"/dashboards/addListing"}
                          className="d-block text-dark-1"
                        >
                          Add Listing
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"/dashboards/reviews"}
                          className="d-block text-dark-1"
                        >
                          Reviews
                        </Link>
                      </div>
                      <div>
                        <Link
                          to={"/dashboards/settings"}
                          className="d-block text-dark-1"
                        >
                          Settings
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div ref={coursesBtnRef} className="relative">
                  <button
                    onClick={() => setCourseOpen((prev) => !prev)}
                    className="d-flex items-center text-dark-1 ml-20"
                  >
                    My Courses
                    <i className="text-9 icon-chevron-down ml-10"></i>
                  </button>
                  {!isCourseOpen ? (
                    ""
                  ) : (
                    <div className="js-courses-toggle">
                      <div className="toggle-bottom -courses bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-20">
                        <div className="px-30 py-30">
                          <div className="d-flex mb-20">
                            <img
                              className="size-80 fit-cover"
                              src="/assets/img/menus/cart/1.png"
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
                              src="/assets/img/menus/cart/2.png"
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
                  )}
                </div>
              </div>

              <div className="d-flex items-center sm:d-none">
                <div className="relative">
                  <button
                    onClick={() => setDark(!isDark)}
                    className="js-darkmode-toggle text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                  >
                    <i className="text-24 icon icon-night"></i>
                  </button>
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      document.fullscreenElement
                        ? document.exitFullscreen()
                        : document.documentElement.requestFullscreen();
                    }}
                    data-maximize
                    className="d-flex text-light-1 items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                  >
                    <i className="text-24 icon icon-maximize"></i>
                  </button>
                </div>

                <div ref={cartBtnRef} className="relative">
                  <button
                    // onClick={() => setCartOpen((prev) => !prev)}
                    onClick={() => setCartOpen((prev) => !prev)}
                    className="d-flex items-center text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                    data-el-toggle=".js-cart-toggle"
                  >
                    <i className="text-20 icon icon-basket"></i>
                  </button>
                  {isCartOpen ? <DashboardNavCart /> : ""}
                </div>

                <div className="relative">
                  <button
                    href="#"
                    onClick={() => setSideBarOpen(true)}
                    className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                    data-el-toggle=".js-msg-toggle"
                  >
                    <i className="text-24 icon icon-email"></i>
                  </button>
                </div>

                <div ref={notifBtnRef} className="relative">
                  <button
                    href="#"
                    onClick={() => setNotify((prev) => !prev)}
                    className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                    data-el-toggle=".js-notif-toggle"
                  >
                    <i className="text-24 icon icon-notification"></i>
                  </button>

                  <div
                    className={
                      isNotify
                        ? "toggle-element js-notif-toggle -is-el-visible"
                        : "toggle-element js-notif-toggle"
                    }
                  >
                    <div className="toggle-bottom -notifications bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-10">
                      <div className="py-30 px-30">
                        <div className="y-gap-40">
                          <div className="d-flex items-center">
                            <div className="shrink-0">
                              <img
                                src="/assets/img/dashboard/actions/1.png"
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
                                src="/assets/img/dashboard/actions/2.png"
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
                                src="/assets/img/dashboard/actions/3.png"
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
                                src="/assets/img/dashboard/actions/4.png"
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
                                src="/assets/img/dashboard/actions/5.png"
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

              <div
                ref={profileBtnRef}
                className="relative d-flex items-center ml-10"
              >
                <a
                  onClick={() => setProfileOpen((prev) => !prev)}
                  href="#"
                  data-el-toggle=".js-profile-toggle"
                >
                  <img
                    className="size-50"
                    src="/assets/img/misc/user-profile.png"
                    alt="image"
                  />
                </a>

                <div
                  className={
                    isProfileOpen
                      ? "toggle-element js-profile-toggle -is-el-visible"
                      : "toggle-element js-profile-toggle"
                  }
                  // className="toggle-element js-profile-toggle -is-el-visible"
                >
                  <div className="toggle-bottom -profile bg-white -dark-bg-dark-1 shadow-4 border-light rounded-8 mt-10">
                    <div className="px-30 py-30">
                      <div className="sidebar -dashboard">
                        <div
                          className={
                            location.pathname === "/dashboards/dashboard"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            to={"/dashboards/dashboard"}
                            className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
                          >
                            <i className="text-20 icon-discovery mr-15"></i>
                            Dashboard
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/myCourses"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            className="d-flex items-center text-17 lh-1 fw-500"
                            to={"/dashboards/myCourses"}
                          >
                            <i className="text-20 icon-play-button mr-15"></i>
                            My Courses
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/bookmarks"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            to={"/dashboards/bookmarks"}
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-bookmark mr-15"></i>
                            Bookmarks
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/messages"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            to={"/dashboards/messages"}
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-message mr-15"></i>
                            Messages
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/addListing"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            to={"/dashboards/addListing"}
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-message mr-15"></i>
                            Create Course
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/reviews"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            to={"/dashboards/reviews"}
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-message mr-15"></i>
                            Reviews
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/settings"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
                          <Link
                            to={"/dashboards/settings"}
                            className="d-flex items-center text-17 lh-1 fw-500"
                          >
                            <i className="text-20 icon-message mr-15"></i>
                            Settings
                          </Link>
                        </div>

                        <div
                          className={
                            location.pathname === "/dashboards/logout"
                              ? "sidebar__item -dark-bg-dark-2 -is-active"
                              : "sidebar__item -dark-bg-dark-2 "
                          }
                        >
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
