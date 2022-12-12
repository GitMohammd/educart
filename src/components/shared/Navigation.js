import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavCart from "./NavCart";

function Navigation() {
  const explorBtnRef = useRef();
  const [isCartOpen, setCartOpen] = useState(false);
  const [isExploreOpen, setExploreOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const closeExplore = (e) => {
      if (e.path[0] !== explorBtnRef.current) {
        setExploreOpen(false);
      }
    };
    document.body.addEventListener("click", closeExplore);
    return () => {
      document.body.removeEventListener("click", closeExplore);
    };
  }, []);

  const handleCartOpen = () => [setCartOpen(!isCartOpen)];

  return (
    <header
      data-anim="fade"
      data-add-bg="bg-dark-1"
      className="header -type-1 js-header"
    >
      <div className="header__container">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left">
              <div className="header__logo ">
                <Link to={"/home1"}>
                  <img src="/assets/img/general/logo.svg" alt="logo" />
                </Link>
              </div>

              <div className="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none">
                <a
                  ref={explorBtnRef}
                  href="#"
                  className="d-flex items-center"
                  data-el-toggle=".js-explore-toggle"
                  onClick={() => setExploreOpen((prev) => !prev)}
                >
                  <i className="icon icon-explore mr-15"></i>
                  Explore
                </a>
                {isExploreOpen ? (
                  <div className="explore-content py-25 rounded-8 bg-white js-explore-toggle">
                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Architecture
                        <div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Business
                        <div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        Computer Programming
                      </a>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        Data Analysis
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Design<div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        Education
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Electronics
                        <div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Language
                        <div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Marketing
                        <div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        Music Arts
                      </a>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        Social Science
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        Photography & Video
                        <div className="icon-chevron-right text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="#">
                          Web Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Graphic Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Design Tools
                        </a>
                        <a className="text-dark-1" href="#">
                          User Experience Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Game Design
                        </a>
                        <a className="text-dark-1" href="#">
                          3D & Animation
                        </a>
                        <a className="text-dark-1" href="#">
                          Fashion Design
                        </a>
                        <a className="text-dark-1" href="#">
                          Interior Design
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        IT & Software
                      </a>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-purple-1 underline">
                        View All Courses
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="header-menu js-mobile-menu-toggle ">
            <div className="header-menu__content">
              <div className="mobile-bg js-mobile-bg"></div>

              <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                <Link className="text-dark-1" to={"/login"}>
                  Log in
                </Link>
                <Link className="text-dark-1 ml-30" to={"/register"}>
                  Sign Up
                </Link>
              </div>

              <div className="menu js-navList">
                <ul className="menu__nav text-white -is-active">
                  <li className="menu-item-has-children">
                    <a data-barba href="#">
                      Home <i className="icon-chevron-right text-13 ml-10"></i>
                    </a>

                    <ul className="subnav">
                      <li className="menu__backButton js-nav-list-back">
                        <a href="#">
                          <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                          Home
                        </a>
                      </li>

                      <li>
                        <Link to={"/home1"}>Home 1</Link>
                      </li>

                      <li>
                        <Link to={"/home2"}>Home 2</Link>
                      </li>

                      <li>
                        <Link to={"/home3"}>Home 3</Link>
                      </li>

                      <li>
                        <Link to={"/home4"}>Home 4</Link>
                      </li>

                      <li>
                        <Link to={"/home5"}>Home 5</Link>
                      </li>

                      <li>
                        <Link to={"/home6"}>Home 6</Link>
                      </li>

                      <li>
                        <Link to={"/home7"}>Home 7</Link>
                      </li>

                      <li>
                        <Link to={"/home8"}>Home 8</Link>
                      </li>

                      <li>
                        <Link to={"/home9"}>Home 9</Link>
                      </li>

                      <li>
                        <Link to={"/home10"}>Home 10</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children -has-mega-menu">
                    <a data-barba href="#">
                      Courses{" "}
                      <i className="icon-chevron-right text-13 ml-10"></i>
                    </a>

                    <div className="mega xl:d-none">
                      <div className="mega__menu">
                        <div className="row x-gap-40">
                          <div className="col">
                            <h4 className="text-17 fw-500 mb-20">
                              Course List Layouts
                            </h4>

                            <ul className="mega__list">
                              <li>
                                <Link data-barba to={"/courselist1"}>
                                  Course List v1
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist2"}>
                                  Course List v2
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist3"}>
                                  Course List v3
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist4"}>
                                  Course List v4
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist5"}>
                                  Course List v5
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist6"}>
                                  Course List v6
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist7"}>
                                  Course List v7
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist8"}>
                                  Course List v8
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courselist9"}>
                                  Course List v9
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <h4 className="text-17 fw-500 mb-20">
                              Course Single Layouts
                            </h4>

                            <ul className="mega__list">
                              <li>
                                <Link data-barba to={"/courseSingle1"}>
                                  Course Single v1
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courseSingle2"}>
                                  Course Single v2
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courseSingle3"}>
                                  Course Single v3
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courseSingle4"}>
                                  Course Single v4
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courseSingle5"}>
                                  Course Single v5
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/courseSingle6"}>
                                  Course Single v6
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <h4 className="text-17 fw-500 mb-20">
                              About Courses
                            </h4>

                            <ul className="mega__list">
                              <li>
                                <Link data-barba to={"/LessonPagev1"}>
                                  Lesson Page v1
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/LessonPagev2"}>
                                  Lesson Page v2
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/InstructorsListv1"}>
                                  Instructors List v1
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/InstructorsListv2"}>
                                  Instructors List v2
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/InstructorsSingle"}>
                                  Instructors Single
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/BecomeanInstructor"}>
                                  Become an Instructor
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <h4 className="text-17 fw-500 mb-20">
                              Dashboard Pages
                            </h4>

                            <ul className="mega__list">
                              <li>
                                <Link data-barba to={"/dashboards/dashboard"}>
                                  Dashboard{" "}
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/myCourses"}>
                                  My Courses
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/bookmarks"}>
                                  Bookmarks
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/addListing"}>
                                  Add Listing
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/reviews"}>
                                  Reviews
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/settings"}>
                                  Settings
                                </Link>
                              </li>

                              <li>
                                <Link
                                  data-barba
                                  to={"/dashboards/administration"}
                                >
                                  Administration
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/assignment"}>
                                  Assignment
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/calender"}>
                                  Calender
                                </Link>
                              </li>

                              <li>
                                <Link
                                  data-barba
                                  to={"/dashboards/singleDashboard"}
                                >
                                  Single Dashboard
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/Dictionary"}>
                                  Dictionary
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/forums"}>
                                  Forums
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/grades"}>
                                  Grades
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/messages"}>
                                  Messages
                                </Link>
                              </li>

                              <li>
                                <Link
                                  data-barba
                                  to={"/dashboards/Participants"}
                                >
                                  Participants
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/quiz"}>
                                  Quiz
                                </Link>
                              </li>

                              <li>
                                <Link data-barba to={"/dashboards/survey"}>
                                  Survey
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col">
                            <h4 className="text-17 fw-500 mb-20">
                              Popular Courses
                            </h4>

                            <ul className="mega__list">
                              <li>
                                <a data-barba href="#">
                                  Web Developer
                                </a>
                              </li>

                              <li>
                                <a data-barba href="#">
                                  Mobile Developer
                                </a>
                              </li>

                              <li>
                                <a data-barba href="#">
                                  Digital Marketing
                                </a>
                              </li>

                              <li>
                                <a data-barba href="#">
                                  Development
                                </a>
                              </li>

                              <li>
                                <a data-barba href="#">
                                  Finance &amp; Accounting
                                </a>
                              </li>

                              <li>
                                <a data-barba href="#">
                                  Design
                                </a>
                              </li>

                              <li>
                                <a data-barba href="#">
                                  View All Courses
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="mega-banner bg-purple-1 ml-40">
                          <div className="text-24 lh-15 text-white fw-700">
                            Join more than
                            <br />
                            <span className="text-green-1">
                              8 million learners
                            </span>
                            worldwide
                          </div>
                          <a
                            href="#"
                            className="button -md -green-1 text-dark-1 fw-500 col-12"
                          >
                            Start Learning For Free
                          </a>
                        </div>
                      </div>
                    </div>

                    <ul className="subnav d-none xl:d-block">
                      <li className="menu__backButton js-nav-list-back">
                        <a href="#">
                          <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                          Courses
                        </a>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          Course List Layouts
                          <div className="icon-chevron-right text-11"></div>
                        </a>

                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              Course List Layouts
                            </a>
                          </li>

                          <li>
                            <a href="courses-list-1.html">Course List v1</a>
                          </li>

                          <li>
                            <a href="courses-list-2.html">Course List v2</a>
                          </li>

                          <li>
                            <a href="courses-list-3.html">Course List v3</a>
                          </li>

                          <li>
                            <a href="courses-list-4.html">Course List v4</a>
                          </li>

                          <li>
                            <a href="courses-list-5.html">Course List v5</a>
                          </li>

                          <li>
                            <a href="courses-list-6.html">Course List v6</a>
                          </li>

                          <li>
                            <a href="courses-list-7.html">Course List v7</a>
                          </li>

                          <li>
                            <a href="courses-list-8.html">Course List v8</a>
                          </li>

                          <li>
                            <a href="courses-list-all.html">Course List All</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          Course Single Layouts
                          <div className="icon-chevron-right text-11"></div>
                        </a>

                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              Course Single Layouts
                            </a>
                          </li>

                          <li>
                            <a href="courses-single-1.html">Course Single v1</a>
                          </li>

                          <li>
                            <a href="courses-single-2.html">Course Single v2</a>
                          </li>

                          <li>
                            <a href="courses-single-3.html">Course Single v3</a>
                          </li>

                          <li>
                            <a href="courses-single-4.html">Course Single v4</a>
                          </li>

                          <li>
                            <a href="courses-single-5.html">Course Single v5</a>
                          </li>

                          <li>
                            <a href="courses-single-6.html">Course Single v6</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          About Courses
                          <div className="icon-chevron-right text-11"></div>
                        </a>

                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              About Courses
                            </a>
                          </li>

                          <li>
                            <a href="lesson-single-1.html">Lesson Page v1</a>
                          </li>

                          <li>
                            <a href="lesson-single-2.html">Lesson Page v2</a>
                          </li>

                          <li>
                            <a href="instructors-list-1.html">
                              Instructors List v1
                            </a>
                          </li>

                          <li>
                            <a href="instructors-list-2.html">
                              Instructors List v2
                            </a>
                          </li>

                          <li>
                            <a href="instructors-single.html">
                              Instructors Single
                            </a>
                          </li>

                          <li>
                            <a href="instructors-become.html">
                              Become an Instructor
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          Dashboard Pages
                          <div className="icon-chevron-right text-11"></div>
                        </a>

                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              Dashboard Pages
                            </a>
                          </li>

                          <li>
                            <a href="dashboard.html">Dashboard</a>
                          </li>

                          <li>
                            <a href="dshb-courses.html">My Courses</a>
                          </li>

                          <li>
                            <a href="dshb-boormarks.html">Bookmarks</a>
                          </li>

                          <li>
                            <a href="dshb-listing.html">Add Listing</a>
                          </li>

                          <li>
                            <a href="dshb-reviews.html">Reviews</a>
                          </li>

                          <li>
                            <a href="dshb-settings.html">Settings</a>
                          </li>

                          <li>
                            <a href="dshb-administration.html">
                              Administration
                            </a>
                          </li>

                          <li>
                            <a href="dshb-assignment.html">Assignment</a>
                          </li>

                          <li>
                            <a href="dshb-calendar.html">Calendar</a>
                          </li>

                          <li>
                            <a href="dshb-dashboard.html">Single Dashboard</a>
                          </li>

                          <li>
                            <a href="dshb-dictionary.html">Dictionary</a>
                          </li>

                          <li>
                            <a href="dshb-forums.html">Forums</a>
                          </li>

                          <li>
                            <a href="dshb-grades.html">Grades</a>
                          </li>

                          <li>
                            <a href="dshb-messages.html">Messages</a>
                          </li>

                          <li>
                            <a href="dshb-participants.html">Participants</a>
                          </li>

                          <li>
                            <a href="dshb-quiz.html">Quiz</a>
                          </li>

                          <li>
                            <a href="dshb-survey.html">Survey</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          Popular Courses
                          <div className="icon-chevron-right text-11"></div>
                        </a>

                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              Popular Courses
                            </a>
                          </li>

                          <li>
                            <a href="#">Web Developer</a>
                          </li>

                          <li>
                            <a href="#">Mobile Developer</a>
                          </li>

                          <li>
                            <a href="#">Digital Marketing</a>
                          </li>

                          <li>
                            <a href="#">Development</a>
                          </li>

                          <li>
                            <a href="#">Finance &amp; Accounting</a>
                          </li>

                          <li>
                            <a href="#">Design</a>
                          </li>

                          <li>
                            <a href="#">View All Courses</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a data-barba href="#">
                      Events{" "}
                      <i className="icon-chevron-right text-13 ml-10"></i>
                    </a>
                    <ul className="subnav">
                      <li className="menu__backButton js-nav-list-back">
                        <a href="#">
                          <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                          Events
                        </a>
                      </li>

                      <li>
                        <Link data-barba to={"/eventList1"}>
                          Event List 1
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/eventList2"}>
                          Event List 2
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/eventSingle"}>
                          Event Single
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a data-barba href="#">
                      Blog <i className="icon-chevron-right text-13 ml-10"></i>
                    </a>
                    <ul className="subnav">
                      <li className="menu__backButton js-nav-list-back">
                        <a href="#">
                          <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                          Blog
                        </a>
                      </li>

                      <li>
                        <Link data-barba to={"/blogList1"}>
                          Blog List 1
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/blogList2"}>
                          Blog List 2
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/blogList3"}>
                          Blog List 3
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/blogSingle"}>
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a data-barba href="#">
                      Pages <i className="icon-chevron-right text-13 ml-10"></i>
                    </a>

                    <ul className="subnav">
                      <li className="menu__backButton js-nav-list-back">
                        <a href="#">
                          <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                          Pages
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          About Us
                          <div className="icon-chevron-right text-11"></div>
                        </a>

                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              About Us
                            </a>
                          </li>

                          <li>
                            <Link data-barba to={"/about1"}>
                              About 1
                            </Link>
                          </li>

                          <li>
                            <Link data-barba to={"/about2"}>
                              About 2
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          Contact
                          <div className="icon-chevron-right text-11"></div>
                        </a>
                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              Contact
                            </a>
                          </li>

                          <li>
                            <Link data-barba to={"/contact1"}>
                              Contact 1
                            </Link>
                          </li>

                          <li>
                            <Link data-barba to={"/contact2"}>
                              Contact 2
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">
                          Shop<div className="icon-chevron-right text-11"></div>
                        </a>
                        <ul className="subnav">
                          <li className="menu__backButton js-nav-list-back">
                            <a href="#">
                              <i className="icon-chevron-left text-13 mr-10"></i>{" "}
                              Shop
                            </a>
                          </li>

                          <li>
                            <Link data-barba to={"/shopCart"}>
                              Shop Cart
                            </Link>
                          </li>

                          <li>
                            <Link data-barba to={"/shopCheckout"}>
                              Shop Checkout
                            </Link>
                          </li>

                          <li>
                            <Link data-barba to={"/shopList"}>
                              Shop List
                            </Link>
                          </li>

                          <li>
                            <Link data-barba to={"/shopOrder"}>
                              Shop Order
                            </Link>
                          </li>

                          <li>
                            <Link data-barba to={"/shopSingle"}>
                              Shop Single
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link data-barba to={"/membershipPlans"}>
                          Membership plans
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/notFound"}>
                          404 Page
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/FAQs"}>
                          FAQs
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/helpCenter"}>
                          Help Center
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/login"}>
                          Login
                        </Link>
                      </li>

                      <li>
                        <Link data-barba to={"/register"}>
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link data-barba to={"/contact1"}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                <div className="mobile-footer__number">
                  <div className="text-17 fw-500 text-dark-1">Call us</div>
                  <div className="text-17 fw-500 text-purple-1">
                    800 388 80 90
                  </div>
                </div>

                <div className="lh-2 mt-10">
                  <div>
                    329 Queensberry Street,
                    <br /> North Melbourne VIC 3051, Australia.
                  </div>
                  <div>hi@educrat.com</div>
                </div>

                <div className="mobile-socials mt-10">
                  <a
                    href="#"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a
                    href="#"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>

                  <a
                    href="#"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>

                  <a
                    href="#"
                    className="d-flex items-center justify-center rounded-full size-40"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="header-menu-close"
              data-el-toggle=".js-mobile-menu-toggle"
            >
              <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                <div className="icon-close text-dark-1 text-16"></div>
              </div>
            </div>

            <div className="header-menu-bg"></div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__icons text-white d-flex items-center">
                <div className="">
                  <button
                    className="d-flex items-center text-white"
                    data-el-toggle=".js-search-toggle"
                    onClick={() => setSearchOpen(true)}
                  >
                    <i className="text-20 icon icon-search"></i>
                  </button>

                  <div
                    className={
                      isSearchOpen
                        ? "toggle-element js-search-toggle -is-el-visible"
                        : "toggle-element js-search-toggle"
                    }
                  >
                    <div className="header-search pt-90 bg-white shadow-4">
                      <div className="container">
                        <div className="header-search__field">
                          <div className="icon icon-search text-dark-1"></div>
                          <input
                            type="text"
                            className="col-12 text-18 lh-12 text-dark-1 fw-500"
                            placeholder="What do you want to learn?"
                          />

                          <button
                            className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
                            data-el-toggle=".js-search-toggle"
                            onClick={() => setSearchOpen(false)}
                          >
                            <img src="/assets/img/menus/close.svg" alt="icon" />
                          </button>
                        </div>

                        <div className="header-search__content mt-30">
                          <div className="text-17 text-dark-1 fw-500">
                            Popular Right Now
                          </div>

                          <div className="d-flex y-gap-5 flex-column mt-20">
                            <a href="#" className="text-dark-1">
                              The Ultimate Drawing Course - Beginner to Advanced
                            </a>
                            <a href="#" className="text-dark-1">
                              Character Art School: Complete Character Drawing
                              Course
                            </a>
                            <a href="#" className="text-dark-1">
                              Complete Blender Creator: Learn 3D Modelling for
                              Beginners
                            </a>
                            <a href="#" className="text-dark-1">
                              User Experience Design Essentials - Adobe XD UI UX
                              Design
                            </a>
                            <a href="#" className="text-dark-1">
                              Graphic Design Masterclass - Learn GREAT Design
                            </a>
                            <a href="#" className="text-dark-1">
                              Adobe Photoshop CC – Essentials Training Course
                            </a>
                          </div>

                          <div className="mt-30">
                            <button className="uppercase underline">
                              PRESS ENTER TO SEE ALL SEARCH RESULTS
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="header-search__bg"
                      data-el-toggle=".js-search-toggle"
                    ></div>
                  </div>
                </div>

                <div className="relative ml-30 xl:ml-20">
                  <button
                    className="d-flex items-center text-white"
                    data-el-toggle=".js-cart-toggle"
                    onClick={handleCartOpen}
                  >
                    <i className="text-20 icon icon-basket"></i>
                  </button>

                  {isCartOpen ? <NavCart /> : ""}
                </div>

                <div className="d-none xl:d-block ml-20">
                  <button
                    className="text-white items-center"
                    data-el-toggle=".js-mobile-menu-toggle"
                  >
                    <i className="text-11 icon icon-mobile-menu"></i>
                  </button>
                </div>
              </div>

              <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                <Link className="button -underline text-white" to={"/login"}>
                  Log in
                </Link>

                <Link
                  className="button -sm -white text-dark-1 ml-30"
                  to={"/register"}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
