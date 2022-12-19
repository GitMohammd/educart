import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function LessonNavigation() {
  const explorBtnRef = useRef();
  const [isExploreOpen, setExploreOpen] = useState(false);
  useEffect(() => {
    const closeExplore = (e) => {
      if (!explorBtnRef.current.contains(e.target)) {
        setExploreOpen(false);
      }
    };
    document.body.addEventListener("click", closeExplore);
    return () => {
      document.body.removeEventListener("click", closeExplore);
    };
  }, []);
  return (
    <header
      data-anim="fade"
      data-add-bg=""
      className="header -type-1 js-header"
    >
      <div className="header__container">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="header-left">
              <div className="header__logo">
                <Link to={"/home1"}>
                  <img src="/assets/img/general/logo.svg" alt="logo" />
                </Link>
              </div>

              <div
                ref={explorBtnRef}
                className="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none"
              >
                <a
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

          <div className="col-auto lg:d-none">
            <div className="text-20 lh-1 text-white fw-500">
              The Ultimate Drawing Course Beginner to Advanced
            </div>
          </div>

          <div className="col-auto">
            <div className="header-right d-flex items-center">
              <div className="header-right__buttons">
                <Link
                  to={"/courseSingle1"}
                  className="button -sm -rounded -white text-dark-1"
                >
                  Back to Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default LessonNavigation;
