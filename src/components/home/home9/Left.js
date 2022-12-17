import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Home9Content from "./Home9Content";
import { useState } from "react";

function Left({ isLeftBar }) {
  const [isAboutOpen, setAboutOpen] = useState(false);
  return (
    <div className="content-wrapper js-content-wrapper">
      <div
        className={
          isLeftBar
            ? "dashboard -home-9 px-0 js-dashboard-home-9"
            : "dashboard -home-9 px-0 js-dashboard-home-9 -is-sidebar-hidden"
        }
        // className="dashboard -home-9 px-0 js-dashboard-home-9"
      >
        <div className="dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30">
          <div className="sidebar -base-sidebar">
            <div className="sidebar__inner">
              <div>
                <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
                  General
                </div>
                <div>
                  <div className="sidebar__item -is-active">
                    <a
                      href="#"
                      className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                    >
                      <i className="text-20 icon-discovery mr-15"></i>
                      Explore
                    </a>
                  </div>

                  <div className="sidebar__item ">
                    <a
                      href="#"
                      className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                    >
                      <i className="text-20 icon-play-button mr-15"></i>
                      Courses
                    </a>
                  </div>

                  <div className="sidebar__item ">
                    <a
                      href="#"
                      className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                    >
                      <i className="text-20 icon-book mr-15"></i>
                      Books
                    </a>
                  </div>

                  <div className="sidebar__item ">
                    <a
                      href="#"
                      className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                    >
                      <i className="text-20 icon-list mr-15"></i>
                      Articles
                    </a>
                  </div>

                  <div className="sidebar__item ">
                    <a
                      href="#"
                      className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
                    >
                      <i className="text-20 icon-time-management mr-15"></i>
                      Calendar
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-60">
                <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">
                  Pages
                </div>
                <div className="">
                  <div className="">
                    <div className="accordion js-accordion">
                      <div
                        className={
                          isAboutOpen
                            ? "accordion__item is-active"
                            : "accordion__item"
                        }
                      >
                        <div
                          onClick={() => setAboutOpen(!isAboutOpen)}
                          className="accordion__button py-10 px-20 bg-light-4 rounded-16"
                        >
                          <span className="text-16 fw-500 text-dark-1">
                            About
                          </span>
                          {/* <div className="accordion__icon"> */}
                          {/* <div
                              className="icon size-20 mt-5"
                              data-feather="chevron-down"
                            ></div>
                            <div
                              className="icon size-20"
                              data-feather="chevron-up"
                            ></div> */}
                          {isAboutOpen ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                          {/* </div> */}
                        </div>
                        <div
                          style={{ maxHeight: isAboutOpen ? "112px" : "" }}
                          className="accordion__content"
                        >
                          <div className="accordion__content__inner px-30 pt-15 pb-10">
                            <div className="sidebar__links y-gap-5">
                              <div>
                                <a href="#">About v1</a>
                              </div>
                              <div>
                                <a href="#">About v2</a>
                              </div>
                              <div>
                                <a href="#">About v3</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Contact
                    </a>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Pricing
                    </a>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Help
                    </a>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Faq
                    </a>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Term
                    </a>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Privacy
                    </a>
                  </div>

                  <div className="">
                    <a
                      href="#"
                      className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
                    >
                      Setting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Home9Content />
      </div>
    </div>
  );
}

export default Left;
