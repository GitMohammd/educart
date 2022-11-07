import React from "react";

function InstructionOverview() {
  return (
    <div className="layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="tabs -active-purple-2 js-tabs">
              <div className="tabs__controls d-flex js-tabs-controls">
                <button
                  className="tabs__button js-tabs-button is-active"
                  data-tab-target=".-tab-item-1"
                  type="button"
                >
                  Overview
                </button>
                <button
                  className="tabs__button js-tabs-button ml-30"
                  data-tab-target=".-tab-item-2"
                  type="button"
                >
                  Courses
                </button>
              </div>

              <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-active">
                  <h4 className="text-20">Description</h4>
                  <p className="text-light-1 mt-30">
                    Phasellus enim magna, varius et commodo ut, ultricies vitae
                    velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                    sagittis vel justo. In libero urna, venenatis sit amet
                    ornare non, suscipit nec risus. Sed consequat justo non
                    mauris pretium at tempor justo sodales. Quisque tincidunt
                    laoreet malesuada. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur.
                    <br />
                    <br />
                    This course is aimed at people interested in UI/UX Design.
                    We’ll start from the very beginning and work all the way
                    through, step by step. If you already have some UI/UX Design
                    experience but want to get up to speed using Adobe XD then
                    this course is perfect for you too!
                    <br />
                    <br />
                    First, we will go over the differences between UX and UI
                    Design. We will look at what our brief for this real-world
                    project is, then we will learn about low-fidelity wireframes
                    and how to make use of existing UI design kits.
                  </p>
                  <button className="button underline text-purple-1 mt-30">
                    Show More
                  </button>
                </div>

                <div className="tabs__pane -tab-item-2">
                  <div className="row">
                    <div data-anim="slide-up delay-1" className="col-md-6">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 rounded-8 shadow-3 bg-white"
                      >
                        <div className="relative">
                          <div className="coursesCard__image overflow-hidden rounded-top-8">
                            <img
                              className="w-1/1"
                              src="assets/img/coursesCards/1.png"
                              alt="image"
                            />
                            <div className="coursesCard__image_overlay rounded-top-8"></div>
                          </div>
                          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div className="h-100 pt-20 pb-15 px-30">
                          <div className="d-flex items-center">
                            <div className="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div className="d-flex x-gap-5 items-center">
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div className="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Learn Figma - UI/UX Design Essential Training
                          </div>

                          <div className="d-flex x-gap-10 items-center pt-10">
                            <div className="d-flex items-center">
                              <div className="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-14 lh-1">6 lesson</div>
                            </div>

                            <div className="d-flex items-center">
                              <div className="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-14 lh-1">3h 56m</div>
                            </div>

                            <div className="d-flex items-center">
                              <div className="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div className="coursesCard-footer">
                            <div className="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div className="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div data-anim="slide-up delay-2" className="col-md-6">
                      <a
                        href="courses-single-1.html"
                        className="coursesCard -type-1 rounded-8 shadow-3 bg-white"
                      >
                        <div className="relative">
                          <div className="coursesCard__image overflow-hidden rounded-top-8">
                            <img
                              className="w-1/1"
                              src="assets/img/coursesCards/2.png"
                              alt="image"
                            />
                            <div className="coursesCard__image_overlay rounded-top-8"></div>
                          </div>
                          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                            <div>
                              <div className="px-15 rounded-200 bg-purple-1">
                                <span className="text-11 lh-1 uppercase fw-500 text-white">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <div>
                              <div className="px-15 rounded-200 bg-green-1">
                                <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                  Best sellers
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="h-100 pt-20 pb-15 px-30">
                          <div className="d-flex items-center">
                            <div className="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div className="d-flex x-gap-5 items-center">
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                              <div className="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div className="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Angular - The Complete Guide (2022 Edition)
                          </div>

                          <div className="d-flex x-gap-10 items-center pt-10">
                            <div className="d-flex items-center">
                              <div className="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-14 lh-1">6 lesson</div>
                            </div>

                            <div className="d-flex items-center">
                              <div className="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-14 lh-1">3h 56m</div>
                            </div>

                            <div className="d-flex items-center">
                              <div className="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div className="coursesCard-footer">
                            <div className="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div className="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
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
  );
}

export default InstructionOverview;
