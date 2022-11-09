import React from "react";

function EventList2Content() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-30">
          <div className="col-lg-3 lg:order-2">
            <div className="pr-30 lg:pr-0">
              <div
                data-anim="slide-up delay-3"
                className="sidebar -blog -no-border"
              >
                <div className="sidebar__item">
                  <h5 className="sidebar__title">Find Event</h5>

                  <div className="sidebar-content -event">
                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        Event From
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>

                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        All Categories
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>

                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        Location
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>

                    <a href="#" className="sidebar-event">
                      <div className="sidebar-event__title text-14 lh-1">
                        Keyword
                      </div>
                      <div className="sidebar-event__icon">
                        <div className="icon icon-search"></div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">Recent Posts</h5>

                  <div className="sidebar-content -recent y-gap-20">
                    <div className="sidebar-recent d-flex items-center">
                      <div className="sidebar-recent__image mr-15">
                        <img src="assets/img/blog-list/1.png" alt="image" />
                      </div>

                      <div className="sidebar-recent__content">
                        <h5 className="text-15 lh-15 fw-500">
                          Find the Right Learning Path for your
                        </h5>
                        <div className="text-13 lh-1 mt-5">April 13, 2022</div>
                      </div>
                    </div>

                    <div className="sidebar-recent d-flex items-center">
                      <div className="sidebar-recent__image mr-15">
                        <img src="assets/img/blog-list/2.png" alt="image" />
                      </div>

                      <div className="sidebar-recent__content">
                        <h5 className="text-15 lh-15 fw-500">
                          Find the Right Learning Path for your
                        </h5>
                        <div className="text-13 lh-1 mt-5">April 13, 2022</div>
                      </div>
                    </div>

                    <div className="sidebar-recent d-flex items-center">
                      <div className="sidebar-recent__image mr-15">
                        <img src="assets/img/blog-list/3.png" alt="image" />
                      </div>

                      <div className="sidebar-recent__content">
                        <h5 className="text-15 lh-15 fw-500">
                          Find the Right Learning Path for your
                        </h5>
                        <div className="text-13 lh-1 mt-5">April 13, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar__item">
                  <h5 className="sidebar__title">Tags</h5>

                  <div className="sidebar-content -tags">
                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Courses
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Learn
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Online
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Education
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        LMS
                      </a>
                    </div>

                    <div className="sidebar-tag">
                      <a className="text-11 fw-500 text-dark-1" href="#">
                        Training
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 lg:order-1">
            <div className="row y-gap-20 items-center justify-between pb-30">
              <div className="col-auto">
                <div className="text-14 lh-12">
                  Showing <span className="text-dark-1 fw-500">250</span> total
                  results
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                    Sort by:
                  </div>

                  <div className="dropdown js-dropdown js-category-active">
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Most Popular</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Animation
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Illustration
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Business
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-anim="slide-up delay-4" className="row y-gap-30">
              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/1.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/2.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/3.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/4.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/5.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/6.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/7.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/8.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6">
                <a href="#" className="eventCard -type-2 bg-white">
                  <div className="eventCard__img">
                    <img
                      className="w-1/1 rounded-top-8"
                      src="assets/img/event-list/9.png"
                      alt="image"
                    />
                  </div>

                  <div className="eventCard__content pt-25 pb-30 px-30">
                    <div className="d-flex items-center">
                      <div className="icon-calendar-2 text-16 mr-8"></div>
                      <div className="text-14">6 April, 2022</div>
                    </div>

                    <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                      Eco-Education in Our Lives: We Can Change the Future
                    </h4>

                    <div className="d-flex items-center mt-15">
                      <div className="icon-location text-16 mr-8"></div>
                      <div className="text-14">London, UK</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="row justify-center pt-60 lg:pt-40">
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
    </section>
  );
}

export default EventList2Content;
