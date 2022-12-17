import React from "react";
import { Link } from "react-router-dom";

function BestInstructors5() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-beige-1">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Learn from the best instructors
              </h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <Link
              to={"/InstructorsListv1"}
              className="button -icon -purple-3 -rounded text-purple-1"
            >
              View All İnstructors
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-2"
              className="teamCard -type-1 -teamCard-hover"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/1.png" alt="image" />
                <div className="teamCard__socials">
                  <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                    <a href="#">
                      <i className="icon-facebook text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-twitter text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-linkedin text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Floyd Miles</h4>
                <p className="teamCard__text">President of Sales</p>

                <div className="row items-center y-gap-10 x-gap-10 pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12 text-yellow-1 fw-500">
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">692 Students</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-play text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">15 Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-3"
              className="teamCard -type-1 -teamCard-hover"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/2.png" alt="image" />
                <div className="teamCard__socials">
                  <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                    <a href="#">
                      <i className="icon-facebook text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-twitter text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-linkedin text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Cameron Williamson</h4>
                <p className="teamCard__text">Web Designer</p>

                <div className="row items-center y-gap-10 x-gap-10 pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12 text-yellow-1 fw-500">
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">692 Students</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-play text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">15 Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-4"
              className="teamCard -type-1 -teamCard-hover"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/3.png" alt="image" />
                <div className="teamCard__socials">
                  <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                    <a href="#">
                      <i className="icon-facebook text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-twitter text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-linkedin text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Brooklyn Simmons</h4>
                <p className="teamCard__text">Dog Trainer</p>

                <div className="row items-center y-gap-10 x-gap-10 pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12 text-yellow-1 fw-500">
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">692 Students</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-play text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">15 Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-5"
              className="teamCard -type-1 -teamCard-hover"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/4.png" alt="image" />
                <div className="teamCard__socials">
                  <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                    <a href="#">
                      <i className="icon-facebook text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-twitter text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram text-white"></i>
                    </a>
                    <a href="#">
                      <i className="icon-linkedin text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Wade Warren</h4>
                <p className="teamCard__text">Marketing Coordinator</p>

                <div className="row items-center y-gap-10 x-gap-10 pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12 text-yellow-1 fw-500">
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">692 Students</div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-play text-light-1 text-11 mr-5"></div>
                      <div className="text-14 lh-12">15 Course</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-center text-center pt-60 lg:pt-40">
          <div className="col-auto">
            <p className="lh-1">
              Want to help people learn, grow and achieve more in life?{" "}
              <a className="text-purple-1 underline" href="#">
                Become an instructor
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestInstructors5;
