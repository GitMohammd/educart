import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function CalenderContent() {
  const [isLeftBar, setLeftBarOpen] = useOutletContext();
  return (
    <div
      className={
        isLeftBar
          ? "dashboard -home-9 js-dashboard-home-9 "
          : "dashboard -home-9 js-dashboard-home-9 -is-sidebar-hidden"
      }
    >
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Calendar</h1>
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

          <div className="row">
            <div className="col-xl-9 col-lg-9">
              <div className="col-12">
                <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <div className="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 className="text-17 lh-1 fw-500">Calendar</h2>
                  </div>

                  <div className="py-40 px-30">
                    <div className="row y-gap-15 justify-between">
                      <div className="col-auto">
                        <div className="d-flex">
                          <div className="">
                            <div className="dropdown js-dropdown js-category-active">
                              <div
                                className="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 "
                                data-el-toggle=".js-category-toggle"
                                data-el-toggle-active=".js-category-active"
                              >
                                <span className="js-dropdown-title">
                                  Monthly
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
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

                          <div className="ml-20">
                            <div className="dropdown js-dropdown js-category-active">
                              <div
                                className="dropdown__button d-flex items-center text-14 h-50 rounded-8 px-15 py-10 "
                                data-el-toggle=".js-category-toggle"
                                data-el-toggle-active=".js-category-active"
                              >
                                <span className="js-dropdown-title">
                                  All Courses
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>

                              <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
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
                      </div>

                      <div className="col-auto">
                        <button className="button -md -narrow -purple-1 text-white">
                          <div className="icon-calendar-2 mr-10"></div>
                          New Event
                        </button>
                      </div>
                    </div>

                    <div className="row justify-between pt-30">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <button className="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                            <div className="icon-chevron-left text-11"></div>
                          </button>
                          <div className="ml-10 text-15 fw-500 lh-1">
                            November 2022
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="text-24 text-dark-1 fw-500">
                          December 2022
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="mr-10 text-15 fw-500 lh-1">
                            January 2023
                          </div>
                          <button className="button -single-icon -dark-7 -dark-button-dark-2 size-45 rounded-8 text-dark-1">
                            <div className="icon-chevron-right text-11"></div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row ml-0 mr-0 pt-20"></div>

                    <div className="overflow-scroll scroll-bar-1">
                      <table className="table-calendar">
                        <thead>
                          <tr>
                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Sun
                              </div>
                            </th>

                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Mon
                              </div>
                            </th>

                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Tue
                              </div>
                            </th>

                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Wed
                              </div>
                            </th>

                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Thu
                              </div>
                            </th>

                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Fri
                              </div>
                            </th>

                            <th className="calendar-top-cell border-light">
                              <div className="text-15 text-dark-1 fw-500">
                                Sat
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">28</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">29</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">30</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">1</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">2</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">3</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">4</div>
                            </td>
                          </tr>

                          <tr>
                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">5</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">6</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">7</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">8</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">9</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">10</div>

                              <div className="text-left pt-5 pb-15 px-10">
                                <div className="text-14 dot-left">15:00 PM</div>
                                <div className="text-14 text-dark-1">
                                  Assignment: Languages of Love is due
                                </div>
                              </div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">11</div>
                            </td>
                          </tr>

                          <tr>
                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">12</div>

                              <div className="text-left pt-5 pb-15 px-10">
                                <div>
                                  <div className="text-14 dot-left">
                                    15:00 PM
                                  </div>
                                  <div className="text-14 text-dark-1">
                                    Birthday Party
                                  </div>
                                </div>
                                <div className="mt-5">
                                  <div className="text-14 dot-left -orange">
                                    15:00 PM
                                  </div>
                                  <div className="text-14 text-dark-1">
                                    Birthday Party
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">13</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">14</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">15</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">16</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">17</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">18</div>
                            </td>
                          </tr>

                          <tr>
                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">19</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">20</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">21</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">22</div>

                              <div className="text-left pt-5 pb-15 px-10">
                                <div className="text-14 dot-left">15:00 PM</div>
                                <div className="text-14 text-dark-1">
                                  Group Project is due
                                </div>
                              </div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">23</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">24</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">25</div>
                            </td>
                          </tr>

                          <tr>
                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">26</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">27</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">28</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">29</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">30</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">31</div>
                            </td>

                            <td className="calendar-cell border-light">
                              <div className="text-15 text-dark-1">1</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="row x-gap-20 y-gap-10 justify-center pt-30">
                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -icon -purple-3 text-light-1"
                        >
                          Export Calender
                          <i className="icon-arrow-top-right text-13 ml-10"></i>
                        </a>
                      </div>
                      <div className="col-auto">
                        <a
                          href="#"
                          className="button -icon -purple-3 text-light-1"
                        >
                          Manage Subscriptions
                          <i className="icon-arrow-top-right text-13 ml-10"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3">
              <div className="row y-gap-30">
                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-30">Event Keys</h5>

                    <div className="y-gap-10">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 bg-red-light rounded-8">
                          <div
                            className="size-12 text-orange-1"
                            data-feather="eye"
                          ></div>
                        </div>
                        <div className="text-14 lh-1 ml-10">
                          Hide site events
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 bg-orange-light rounded-8">
                          <div
                            className="size-12 text-orange-6"
                            data-feather="eye"
                          ></div>
                        </div>
                        <div className="text-14 lh-1 ml-10">
                          Hide category vents
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 bg-blue-light rounded-8">
                          <div
                            className="size-12 text-blue-4"
                            data-feather="eye"
                          ></div>
                        </div>
                        <div className="text-14 lh-1 ml-10">
                          Hide course events
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 bg-blue-light rounded-8">
                          <div
                            className="size-12 text-blue-5"
                            data-feather="eye"
                          ></div>
                        </div>
                        <div className="text-14 lh-1 ml-10">
                          Hide group events
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 bg-purple-light rounded-8">
                          <div
                            className="size-12 text-purple-4"
                            data-feather="eye"
                          ></div>
                        </div>
                        <div className="text-14 lh-1 ml-10">
                          Hide user events
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 bg-green-light rounded-8">
                          <div
                            className="size-12 text-green-1"
                            data-feather="eye"
                          ></div>
                        </div>
                        <div className="text-14 lh-1 ml-10">
                          Hide other events
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                    <h5 className="text-17 fw-500 mb-30">Monthly view</h5>

                    <div className="">
                      <div className="d-flex x-gap-10 y-gap-10 justify-center items-center pb-5">
                        <div className="text-14 lh-11 text-dark-1 fw-500">
                          May 2022
                        </div>
                      </div>

                      <div className="d-flex x-gap-10 y-gap-10 flex-wrap pb-5">
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

                      <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              28
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              29
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              30
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              1
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              2
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              3
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              4
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              5
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              6
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              7
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              8
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              9
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              10
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              11
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              12
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              13
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              14
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              15
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center items-center size-30 bg-purple-1 rounded-full">
                            <a href="#" className="text-14 text-white">
                              16
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              17
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              18
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              19
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              20
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center items-center size-30 bg-purple-1 rounded-full">
                            <a href="#" className="text-14 text-white">
                              21
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              22
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              23
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              24
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              25
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              26
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              27
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              28
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              29
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              30
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              31
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              1
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-20">
                      <div className="d-flex x-gap-10 y-gap-10 justify-center items-center pb-5">
                        <div className="text-14 lh-11 text-dark-1 fw-500">
                          May 2022
                        </div>
                      </div>

                      <div className="d-flex x-gap-10 y-gap-10 flex-wrap pb-5">
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

                      <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              28
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              29
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              30
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              1
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              2
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              3
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              4
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              5
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              6
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              7
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              8
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              9
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              10
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              11
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              12
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              13
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              14
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              15
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center items-center size-30 bg-purple-1 rounded-full">
                            <a href="#" className="text-14 text-white">
                              16
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              17
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              18
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              19
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              20
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center items-center size-30 bg-purple-1 rounded-full">
                            <a href="#" className="text-14 text-white">
                              21
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              22
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              23
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              24
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              25
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              26
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              27
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              28
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              29
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              30
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              31
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              1
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-20">
                      <div className="d-flex x-gap-10 y-gap-10 justify-center items-center pb-5">
                        <div className="text-14 lh-11 text-dark-1 fw-500">
                          May 2022
                        </div>
                      </div>

                      <div className="d-flex x-gap-10 y-gap-10 flex-wrap pb-5">
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

                      <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              28
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              29
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              30
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              1
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              2
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              3
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              4
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              5
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              6
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              7
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              8
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              9
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              10
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              11
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              12
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              13
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              14
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              15
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center items-center size-30 bg-purple-1 rounded-full">
                            <a href="#" className="text-14 text-white">
                              16
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              17
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              18
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              19
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              20
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center items-center size-30 bg-purple-1 rounded-full">
                            <a href="#" className="text-14 text-white">
                              21
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              22
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              23
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              24
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              25
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              26
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              27
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              28
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              29
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14">
                              30
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              31
                            </a>
                          </div>
                        </div>

                        <div className="w-1/7">
                          <div className="d-flex justify-center size-30 items-center">
                            <a href="#" className="text-14 text-dark-1">
                              1
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

export default CalenderContent;
