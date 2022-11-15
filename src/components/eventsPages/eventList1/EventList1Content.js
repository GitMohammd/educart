import React from "react";

function EventList1Content() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="tabs -pills js-tabs">
          <div
            data-anim-child="slide-up delay-3"
            className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls"
          >
            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button is-active"
                data-tab-target=".-tab-item-1"
                type="button"
              >
                All Categories
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Animation
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-3"
                type="button"
              >
                Design
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-4"
                type="button"
              >
                Illustration
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-5"
                type="button"
              >
                Lifestyle
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-6"
                type="button"
              >
                Photo &amp; Film
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-7"
                type="button"
              >
                Business
              </button>
            </div>

            <div>
              <button
                className="tabs__button px-15 py-8 rounded-8 js-tabs-button "
                data-tab-target=".-tab-item-8"
                type="button"
              >
                Writing
              </button>
            </div>
          </div>

          <div className="tabs__content pt-40 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-2 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-3 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-4 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-5 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-6 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-7 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div className="tabs__pane -tab-item-8 ">
              <div data-anim="slide-up delay-4" className="row y-gap-30 pt-30">
                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/1.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/2.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/3.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/4.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/5.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/6.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/7.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/8.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="eventCard -type-1">
                    <div className="eventCard__img">
                      <img src="/assets/img/courses-list/9.png" alt="image" />
                    </div>

                    <div className="eventCard__bg bg-white">
                      <div className="eventCard__content y-gap-10">
                        <div className="eventCard__inner">
                          <h4 className="eventCard__title text-17 fw-500">
                            Summer School 2022
                          </h4>
                          <div className="d-flex x-gap-15 pt-10">
                            <div className="d-flex items-center">
                              <div className="icon-calendar-2 text-16 mr-8"></div>
                              <div className="text-14">6 April, 2022</div>
                            </div>
                            <div className="d-flex items-center">
                              <div className="icon-location text-16 mr-8"></div>
                              <div className="text-14">London, UK</div>
                            </div>
                          </div>
                        </div>

                        <div className="eventCard__button">
                          <a
                            href="#"
                            className="button -sm -rounded -outline-purple-1 text-purple-1 px-25"
                          >
                            Buy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
      </div>
    </section>
  );
}

export default EventList1Content;
