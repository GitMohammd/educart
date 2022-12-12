import React, { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function DashboardContent() {
  const weekBtnRef = useRef();
  const [isLeftBar, setLeftBarOpen] = useOutletContext();
  const [thisWeek, setThisWeek] = useState(null);
  console.log(thisWeek);
  const thisWeekValue = thisWeek === null ? "This Week" : thisWeek;

  const [isStaticWeek, setSaticWeek] = useState(false);
  useEffect(() => {
    const weekBtnOpen = (e) => {
      if (!weekBtnRef.current.contains(e.target)) {
        setSaticWeek(false);
      }
    };
    document.body.addEventListener("click", weekBtnOpen);
    return () => {
      document.body.removeEventListener("click", weekBtnOpen);
    };
  }, []);

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
              <h1 className="text-30 lh-12 fw-700">Dashboard</h1>
              <div className="mt-10">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-xl-3 col-md-6">
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

            <div className="col-xl-3 col-md-6">
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

            <div className="col-xl-3 col-md-6">
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

            <div className="col-xl-3 col-md-6">
              <div className="d-flex justify-between items-center py-35 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                <div>
                  <div className="lh-1 fw-500">Total Instructor</div>
                  <div className="text-24 lh-1 fw-700 text-dark-1 mt-20">
                    22,786
                  </div>
                  <div className="lh-1 mt-25">
                    <span className="text-purple-1">290+</span> New Instructors
                  </div>
                </div>

                <i className="text-40 icon-online-learning text-purple-1"></i>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-30">
            <div className="col-xl-8 col-md-6">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Earning Statistics</h2>
                  <div ref={weekBtnRef} className="">
                    <div className="dropdown ">
                      <div
                        onClick={() => setSaticWeek((prev) => !prev)}
                        className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-1 border-light rounded-8 px-20 py-10 text-14 lh-12"
                        // data-el-toggle=".js-category-toggle"
                        // data-el-toggle-active=".js-category-active"
                      >
                        {" "}
                        <span className="">{thisWeekValue}</span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div
                        className={
                          isStaticWeek
                            ? "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle -is-el-visible"
                            : "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                        }
                      >
                        <div className="text-14 y-gap-15 js-dropdown-list">
                          <div onClick={() => setThisWeek("Animation")}>
                            <button className="d-block js-dropdown-link">
                              Animation
                            </button>
                          </div>

                          <div onClick={() => setThisWeek("Design")}>
                            <button className="d-block js-dropdown-link">
                              Design
                            </button>
                          </div>

                          <div onClick={() => setThisWeek("Illustration")}>
                            <button className="d-block js-dropdown-link">
                              Illustration
                            </button>
                          </div>

                          <div onClick={() => setThisWeek("Business")}>
                            <button className="d-block js-dropdown-link">
                              Business
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-40 px-30">
                  <canvas id="lineChart"></canvas>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
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
            <div className="col-xl-4 col-md-6">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 fw-500">Popular Instructor</h2>
                  <a hre="#" className="text-14 text-purple-1 underline">
                    View All
                  </a>
                </div>
                <div className="py-30 px-30">
                  <div className="y-gap-40">
                    <div className="d-flex">
                      <img
                        className="size-40"
                        src="/assets/img/dashboard/avatars/1.png"
                        alt="avatar"
                      />
                      <div className="ml-10 w-1/1">
                        <h4 className="text-15 lh-1 fw-500">Marvin McKinney</h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <i className="icon-message text-15 mr-10"></i>
                            <div className="text-13 lh-1">23,987 Reviews</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-online-learning text-15 mr-10"></i>
                            <div className="text-13 lh-1">692 Students</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-play text-15 mr-10"></i>
                            <div className="text-13 lh-1">15 Course</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex border-top-light">
                      <img
                        className="size-40"
                        src="/assets/img/dashboard/avatars/2.png"
                        alt="avatar"
                      />
                      <div className="ml-10 w-1/1">
                        <h4 className="text-15 lh-1 fw-500">Albert Flores</h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <i className="icon-message text-15 mr-10"></i>
                            <div className="text-13 lh-1">23,987 Reviews</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-online-learning text-15 mr-10"></i>
                            <div className="text-13 lh-1">692 Students</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-play text-15 mr-10"></i>
                            <div className="text-13 lh-1">15 Course</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex border-top-light">
                      <img
                        className="size-40"
                        src="/assets/img/dashboard/avatars/3.png"
                        alt="avatar"
                      />
                      <div className="ml-10 w-1/1">
                        <h4 className="text-15 lh-1 fw-500">Savannah Nguyen</h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <i className="icon-message text-15 mr-10"></i>
                            <div className="text-13 lh-1">23,987 Reviews</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-online-learning text-15 mr-10"></i>
                            <div className="text-13 lh-1">692 Students</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-play text-15 mr-10"></i>
                            <div className="text-13 lh-1">15 Course</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex border-top-light">
                      <img
                        className="size-40"
                        src="/assets/img/dashboard/avatars/4.png"
                        alt="avatar"
                      />
                      <div className="ml-10 w-1/1">
                        <h4 className="text-15 lh-1 fw-500">Guy Hawkins</h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <i className="icon-message text-15 mr-10"></i>
                            <div className="text-13 lh-1">23,987 Reviews</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-online-learning text-15 mr-10"></i>
                            <div className="text-13 lh-1">692 Students</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-play text-15 mr-10"></i>
                            <div className="text-13 lh-1">15 Course</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex border-top-light">
                      <img
                        className="size-40"
                        src="/assets/img/dashboard/avatars/5.png"
                        alt="avatar"
                      />
                      <div className="ml-10 w-1/1">
                        <h4 className="text-15 lh-1 fw-500">Guy Hawkins</h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <i className="icon-message text-15 mr-10"></i>
                            <div className="text-13 lh-1">23,987 Reviews</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-online-learning text-15 mr-10"></i>
                            <div className="text-13 lh-1">692 Students</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-play text-15 mr-10"></i>
                            <div className="text-13 lh-1">15 Course</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Recent Courses</h2>
                  <a hre="#" className="text-14 text-purple-1 underline">
                    View All
                  </a>
                </div>
                <div className="py-30 px-30">
                  <div className="y-gap-40">
                    <div className="d-flex">
                      <div className="shrink-0">
                        <img
                          src="/assets/img/dashboard/recent-courses/1.png"
                          alt="image"
                        />
                      </div>
                      <div className="ml-15">
                        <h4 className="text-15 lh-16 fw-500">
                          Complete Python Bootcamp From Zero to Hero in Python
                        </h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <img
                              className="size-16 object-cover mr-8"
                              src="/assets/img/general/avatar-1.png"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">Ali Tufan</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-document text-16 mr-8"></i>
                            <div className="text-14 lh-1">6 lesson</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-clock-2 text-16 mr-8"></i>
                            <div className="text-14 lh-1">3h 56m</div>
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
                            <img
                              className="size-16 object-cover mr-8"
                              src="/assets/img/general/avatar-1.png"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">Ali Tufan</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-document text-16 mr-8"></i>
                            <div className="text-14 lh-1">6 lesson</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-clock-2 text-16 mr-8"></i>
                            <div className="text-14 lh-1">3h 56m</div>
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
                          Instagram Marketing 2021: Complete Guide To Instagram
                          Growth
                        </h4>
                        <div className="d-flex items-center x-gap-20 y-gap-10 flex-wrap pt-10">
                          <div className="d-flex items-center">
                            <img
                              className="size-16 object-cover mr-8"
                              src="/assets/img/general/avatar-1.png"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">Ali Tufan</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-document text-16 mr-8"></i>
                            <div className="text-14 lh-1">6 lesson</div>
                          </div>
                          <div className="d-flex items-center">
                            <i className="icon-clock-2 text-16 mr-8"></i>
                            <div className="text-14 lh-1">3h 56m</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex justify-between items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Notifications</h2>
                </div>
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
                        <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
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
                        <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
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
                        <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
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
                        <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
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
                        <div className="text-13 lh-1 mt-10">1 Hours Ago</div>
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

export default DashboardContent;
