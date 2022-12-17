import React from "react";
import Home9Banner from "./Home9Banner";
import Home9TopCatagories from "./Home9TopCatagories";
import ExploreFeaturedCourses from "../home5/ExploreFeaturedCourses";
import LetestBook from "./LetestBook";

function Left({ isLeftBar }) {
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
                      <div className="accordion__item">
                        <div className="accordion__button py-10 px-20 bg-light-4 rounded-16">
                          <span className="text-16 fw-500 text-dark-1">
                            About
                          </span>
                          <div className="accordion__icon">
                            <div
                              className="icon size-20 mt-5"
                              data-feather="chevron-down"
                            ></div>
                            <div
                              className="icon size-20"
                              data-feather="chevron-up"
                            ></div>
                          </div>
                        </div>
                        <div className="accordion__content">
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

        <div className="dashboard__main mt-0">
          <div className="dashboard__content pt-0 px-15 pb-0">
            <Home9Banner />

            <Home9TopCatagories />

            <ExploreFeaturedCourses />

            <section className="layout-pt-md layout-pb-md">
              <div className="container">
                <div className="row y-gap-20 justify-center text-center">
                  <div className="col-auto">
                    <div className="sectionTitle ">
                      <h2 className="sectionTitle__title ">How it works?</h2>

                      <p className="sectionTitle__text ">
                        10,000+ unique online course list designs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row y-gap-30 justify-between pt-60 lg:pt-40">
                  <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="d-flex flex-column items-center text-center">
                      <div className="relative size-120 d-flex justify-center items-center rounded-full bg-light-4">
                        <img src="/assets/img/home-3/works/1.svg" alt="image" />
                        <div className="side-badge">
                          <div className="size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1">
                            <span className="text-14 fw-500 text-white">
                              01
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-17 fw-500 text-dark-1 mt-30">
                        Browse courses from our expert contributors.
                      </div>
                    </div>
                  </div>

                  <div className="col-auto xl:d-none">
                    <div className="pt-30">
                      <img src="/assets/img/misc/lines/1.svg" alt="icon" />
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="d-flex flex-column items-center text-center">
                      <div className="relative size-120 d-flex justify-center items-center rounded-full bg-light-4">
                        <img src="/assets/img/home-3/works/2.svg" alt="image" />
                        <div className="side-badge">
                          <div className="size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1">
                            <span className="text-14 fw-500 text-white">
                              02
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-17 fw-500 text-dark-1 mt-30">
                        Purchase quickly and securely.
                      </div>
                    </div>
                  </div>

                  <div className="col-auto xl:d-none">
                    <div className="pt-30">
                      <img src="/assets/img/misc/lines/2.svg" alt="icon" />
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-6">
                    <div className="d-flex flex-column items-center text-center">
                      <div className="relative size-120 d-flex justify-center items-center rounded-full bg-light-4">
                        <img src="/assets/img/home-3/works/3.svg" alt="image" />
                        <div className="side-badge">
                          <div className="size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1">
                            <span className="text-14 fw-500 text-white">
                              03
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-17 fw-500 text-dark-1 mt-30">
                        That’s it! Start learning right away.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="layout-pt-md layout-pb-md">
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
                    <a
                      href="#"
                      className="button -icon -purple-3 text-purple-1"
                    >
                      View All İnstructors
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
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

            <LetestBook />

            <section className="layout-pt-md layout-pb-md">
              <div data-anim-wrap className="container">
                <div
                  data-anim-child="slide-left delay-1"
                  className="row y-gap-20 justify-between items-center"
                >
                  <div className="col-lg-6">
                    <div className="sectionTitle ">
                      <h2 className="sectionTitle__title ">Live Streams</h2>

                      <p className="sectionTitle__text ">
                        10,000+ unique online course list designs
                      </p>
                    </div>
                  </div>

                  <div className="col-auto">
                    <a
                      href="#"
                      className="button -icon -purple-3 text-purple-1"
                    >
                      See All
                      <i className="icon-arrow-top-right text-13 ml-10"></i>
                    </a>
                  </div>
                </div>

                <div className="row y-gap-30 pt-60 lg:pt-40">
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="d-flex flex-column items-center">
                      <div>
                        <img src="/assets/img/streams/1.png" alt="image" />
                      </div>
                      <h5 className="text-17 fw-500 mt-20">Floyd Miles</h5>
                      <a href="#" className="text-light-1 mt-5">
                        miles@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="d-flex flex-column items-center">
                      <div>
                        <img src="/assets/img/streams/2.png" alt="image" />
                      </div>
                      <h5 className="text-17 fw-500 mt-20">Jacob Jones</h5>
                      <a href="#" className="text-light-1 mt-5">
                        miles@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="d-flex flex-column items-center">
                      <div>
                        <img src="/assets/img/streams/3.png" alt="image" />
                      </div>
                      <h5 className="text-17 fw-500 mt-20">Cody Fisher</h5>
                      <a href="#" className="text-light-1 mt-5">
                        miles@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="d-flex flex-column items-center">
                      <div>
                        <img src="/assets/img/streams/4.png" alt="image" />
                      </div>
                      <h5 className="text-17 fw-500 mt-20">Jane Cooper</h5>
                      <a href="#" className="text-light-1 mt-5">
                        miles@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="d-flex flex-column items-center">
                      <div>
                        <img src="/assets/img/streams/5.png" alt="image" />
                      </div>
                      <h5 className="text-17 fw-500 mt-20">Annette Black</h5>
                      <a href="#" className="text-light-1 mt-5">
                        miles@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="d-flex flex-column items-center">
                      <div>
                        <img src="/assets/img/streams/6.png" alt="image" />
                      </div>
                      <h5 className="text-17 fw-500 mt-20">Robert Fox</h5>
                      <a href="#" className="text-light-1 mt-5">
                        miles@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="layout-pt-md layout-pb-lg">
              <div className="container">
                <div className="row y-gap-20 justify-center text-center">
                  <div className="col-auto">
                    <div className="sectionTitle ">
                      <h2 className="sectionTitle__title ">Testimonials</h2>

                      <p className="sectionTitle__text ">
                        10,000+ unique online course list designs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row justify-center pt-60">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="overflow-hidden js-testimonials-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide h-100">
                          <div
                            data-anim="slide-up"
                            className="testimonials -type-2 text-center"
                          >
                            <div className="testimonials__icon">
                              <img
                                src="/assets/img/misc/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                              It is no exaggeration to say this Educrat
                              experience was transformative–both professionally
                              and personally. This workshop will long remain a
                              high point of my life.
                            </div>
                            <div className="testimonials__author">
                              <h5 className="text-17 lh-15 fw-500">
                                Ali Tufan
                              </h5>
                              <div className="mt-5">
                                Product Manager, Apple Inc
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide h-100">
                          <div
                            data-anim="slide-up"
                            className="testimonials -type-2 text-center"
                          >
                            <div className="testimonials__icon">
                              <img
                                src="/assets/img/misc/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                              It is no exaggeration to say this Educrat
                              experience was transformative–both professionally
                              and personally. This workshop will long remain a
                              high point of my life.
                            </div>
                            <div className="testimonials__author">
                              <h5 className="text-17 lh-15 fw-500">
                                Ali Tufan
                              </h5>
                              <div className="mt-5">
                                Product Manager, Apple Inc
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide h-100">
                          <div
                            data-anim="slide-up"
                            className="testimonials -type-2 text-center"
                          >
                            <div className="testimonials__icon">
                              <img
                                src="/assets/img/misc/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                              It is no exaggeration to say this Educrat
                              experience was transformative–both professionally
                              and personally. This workshop will long remain a
                              high point of my life.
                            </div>
                            <div className="testimonials__author">
                              <h5 className="text-17 lh-15 fw-500">
                                Ali Tufan
                              </h5>
                              <div className="mt-5">
                                Product Manager, Apple Inc
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide h-100">
                          <div
                            data-anim="slide-up"
                            className="testimonials -type-2 text-center"
                          >
                            <div className="testimonials__icon">
                              <img
                                src="/assets/img/misc/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                              It is no exaggeration to say this Educrat
                              experience was transformative–both professionally
                              and personally. This workshop will long remain a
                              high point of my life.
                            </div>
                            <div className="testimonials__author">
                              <h5 className="text-17 lh-15 fw-500">
                                Ali Tufan
                              </h5>
                              <div className="mt-5">
                                Product Manager, Apple Inc
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide h-100">
                          <div
                            data-anim="slide-up"
                            className="testimonials -type-2 text-center"
                          >
                            <div className="testimonials__icon">
                              <img
                                src="/assets/img/misc/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <div className="testimonials__text md:text-20 fw-500 text-dark-1">
                              It is no exaggeration to say this Educrat
                              experience was transformative–both professionally
                              and personally. This workshop will long remain a
                              high point of my life.
                            </div>
                            <div className="testimonials__author">
                              <h5 className="text-17 lh-15 fw-500">
                                Ali Tufan
                              </h5>
                              <div className="mt-5">
                                Product Manager, Apple Inc
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-60 lg:pt-40">
                        <div className="pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination">
                          <div className="col-auto">
                            <div className="pagination__item is-active">
                              <img
                                src="/assets/img/home-3/testimonials/1.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="pagination__item ">
                              <img
                                src="/assets/img/home-3/testimonials/2.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="pagination__item ">
                              <img
                                src="/assets/img/home-3/testimonials/3.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="pagination__item ">
                              <img
                                src="/assets/img/home-3/testimonials/4.png"
                                alt="image"
                              />
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="pagination__item ">
                              <img
                                src="/assets/img/home-3/testimonials/5.png"
                                alt="image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="layout-pt-lg layout-pb-lg section-bg">
              <div className="section-bg__item">
                <img
                  className="img-full rounded-16"
                  src="/assets/img/home-9/cta/bg.png"
                  alt="image"
                />
              </div>

              <div className="container">
                <div className="row justify-center text-center">
                  <div className="col-xl-5 col-lg-6 col-md-11">
                    <div className="sectionTitle -light">
                      <h2 className="sectionTitle__title ">
                        Subscribe our Newsletter &
                      </h2>

                      <p className="sectionTitle__text ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-30 justify-center">
                  <div className="col-lg-6">
                    <form className="form-single-field -help" action="post">
                      <input type="text" placeholder="Your Email..." />
                      <button
                        className="button -purple-1 text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section className="layout-pt-lg layout-pb-lg">
              <div className="container">
                <div className="row justify-center">
                  <div className="col text-center">
                    <p className="text-lg text-dark-1">
                      Trusted by the world’s best
                    </p>
                  </div>
                </div>

                <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
                  <div className="col-lg-auto col-md-2 col-sm-3 col-4">
                    <div className="d-flex justify-center items-center px-4">
                      <img
                        className="w-1/1"
                        src="/assets/img/clients/1.svg"
                        alt="clients image"
                      />
                    </div>
                  </div>

                  <div className="col-lg-auto col-md-2 col-sm-3 col-4">
                    <div className="d-flex justify-center items-center px-4">
                      <img
                        className="w-1/1"
                        src="/assets/img/clients/2.svg"
                        alt="clients image"
                      />
                    </div>
                  </div>

                  <div className="col-lg-auto col-md-2 col-sm-3 col-4">
                    <div className="d-flex justify-center items-center px-4">
                      <img
                        className="w-1/1"
                        src="/assets/img/clients/3.svg"
                        alt="clients image"
                      />
                    </div>
                  </div>

                  <div className="col-lg-auto col-md-2 col-sm-3 col-4">
                    <div className="d-flex justify-center items-center px-4">
                      <img
                        className="w-1/1"
                        src="/assets/img/clients/4.svg"
                        alt="clients image"
                      />
                    </div>
                  </div>

                  <div className="col-lg-auto col-md-2 col-sm-3 col-4">
                    <div className="d-flex justify-center items-center px-4">
                      <img
                        className="w-1/1"
                        src="/assets/img/clients/5.svg"
                        alt="clients image"
                      />
                    </div>
                  </div>

                  <div className="col-lg-auto col-md-2 col-sm-3 col-4">
                    <div className="d-flex justify-center items-center px-4">
                      <img
                        className="w-1/1"
                        src="/assets/img/clients/6.svg"
                        alt="clients image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="footer">
            <div className="container">
              <div className="py-30 border-top-light">
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
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Left;
