import React from "react";

function Overview() {
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="page-nav-menu -line">
              <div className="d-flex x-gap-30">
                <div>
                  <a
                    href="#overview"
                    className="pb-12 page-nav-menu__link js-scroll-to-id is-active"
                  >
                    Overview
                  </a>
                </div>
                <div>
                  <a
                    href="#course-content"
                    className="pb-12 page-nav-menu__link js-scroll-to-id"
                  >
                    Course Content
                  </a>
                </div>
                <div>
                  <a
                    href="#instructors"
                    className="pb-12 page-nav-menu__link js-scroll-to-id"
                  >
                    Instructors
                  </a>
                </div>
                <div>
                  <a
                    href="#reviews"
                    className="pb-12 page-nav-menu__link js-scroll-to-id"
                  >
                    Reviews
                  </a>
                </div>
              </div>
            </div>

            <div id="overview" className="pt-60 lg:pt-40 to-over">
              <h4 className="text-18 fw-500">Description</h4>

              <div className="show-more mt-30 js-show-more">
                <div className="show-more__content">
                  <p className="">
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
                </div>

                <button className="show-more__button text-purple-1 fw-500 underline mt-30">
                  Show more
                </button>
              </div>

              <div className="mt-60">
                <h4 className="text-20 mb-30">What you'll learn</h4>
                <div className="row x-gap-100 justfiy-between">
                  <div className="col-md-6">
                    <div className="y-gap-20">
                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Become a UX designer.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>You will be able to add UX designer to your CV</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Become a UI designer.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Build &amp; test a full website design.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Create your first UX brief &amp; persona.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>How to use premade UI kits.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="y-gap-20">
                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Create quick wireframes.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Downloadable exercise files</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Build a UX project from beginning to end.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>Learn to design websites &amp; mobile phone apps.</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>All the techniques used by UX professionals</p>
                      </div>

                      <div className="d-flex items-center">
                        <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                          <i className="size-12" data-feather="check"></i>
                        </div>
                        <p>
                          You will be able to talk correctly with other UX
                          design.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-60">
                <h4 className="text-20">Requirements</h4>
                <ul className="ul-list y-gap-15 pt-30">
                  <li>
                    You will need a copy of Adobe XD 2019 or above. A free trial
                    can be downloaded from Adobe.
                  </li>
                  <li>No previous design experience is needed.</li>
                  <li>No previous Adobe XD skills are needed.</li>
                </ul>
              </div>
            </div>

            <div id="course-content" className="pt-60 lg:pt-40">
              <h2 className="text-20 fw-500">Course Content</h2>

              <div className="d-flex justify-between items-center mt-30">
                <div className="">27 sections • 95 lectures</div>
                <a href="#" className="underline text-purple-1">
                  Expand All Sections
                </a>
              </div>

              <div className="mt-10">
                <div className="accordion -block-2 text-left js-accordion">
                  <div className="accordion__item">
                    <div className="accordion__button py-20 px-30 bg-light-4">
                      <div className="d-flex items-center">
                        <div className="accordion__icon">
                          <div
                            className="icon"
                            data-feather="chevron-down"
                          ></div>
                          <div className="icon" data-feather="chevron-up"></div>
                        </div>
                        <span className="text-17 fw-500 text-dark-1">
                          Course Content
                        </span>
                      </div>

                      <div>5 lectures • 87 min</div>
                    </div>

                    <div className="accordion__content">
                      <div className="accordion__content__inner px-30 py-30">
                        <div className="y-gap-20">
                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Introduction to the User Experience Course
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Getting started with your Adobe XD project
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                What is UI vs UX - User Interface vs User
                                Experience vs Product Designer
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Wireframing (low fidelity) in Adobe XD</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Viewing your prototype on a mobile device
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Sharing your design</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__item">
                    <div className="accordion__button py-20 px-30 bg-light-4">
                      <div className="d-flex items-center">
                        <div className="accordion__icon">
                          <div
                            className="icon"
                            data-feather="chevron-down"
                          ></div>
                          <div className="icon" data-feather="chevron-up"></div>
                        </div>
                        <span className="text-17 fw-500 text-dark-1">
                          The Brief
                        </span>
                      </div>

                      <div>5 lectures • 87 min</div>
                    </div>

                    <div className="accordion__content">
                      <div className="accordion__content__inner px-30 py-30">
                        <div className="y-gap-20">
                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Introduction to the User Experience Course
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Getting started with your Adobe XD project
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                What is UI vs UX - User Interface vs User
                                Experience vs Product Designer
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Wireframing (low fidelity) in Adobe XD</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Viewing your prototype on a mobile device
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Sharing your design</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__item">
                    <div className="accordion__button py-20 px-30 bg-light-4">
                      <div className="d-flex items-center">
                        <div className="accordion__icon">
                          <div
                            className="icon"
                            data-feather="chevron-down"
                          ></div>
                          <div className="icon" data-feather="chevron-up"></div>
                        </div>
                        <span className="text-17 fw-500 text-dark-1">
                          Type, Color &amp; Icon Introduction
                        </span>
                      </div>

                      <div>5 lectures • 87 min</div>
                    </div>

                    <div className="accordion__content">
                      <div className="accordion__content__inner px-30 py-30">
                        <div className="y-gap-20">
                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Introduction to the User Experience Course
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Getting started with your Adobe XD project
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                What is UI vs UX - User Interface vs User
                                Experience vs Product Designer
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Wireframing (low fidelity) in Adobe XD</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Viewing your prototype on a mobile device
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Sharing your design</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__item">
                    <div className="accordion__button py-20 px-30 bg-light-4">
                      <div className="d-flex items-center">
                        <div className="accordion__icon">
                          <div
                            className="icon"
                            data-feather="chevron-down"
                          ></div>
                          <div className="icon" data-feather="chevron-up"></div>
                        </div>
                        <span className="text-17 fw-500 text-dark-1">
                          Prototyping a App - Introduction
                        </span>
                      </div>

                      <div>5 lectures • 87 min</div>
                    </div>

                    <div className="accordion__content">
                      <div className="accordion__content__inner px-30 py-30">
                        <div className="y-gap-20">
                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Introduction to the User Experience Course
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Getting started with your Adobe XD project
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                What is UI vs UX - User Interface vs User
                                Experience vs Product Designer
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Wireframing (low fidelity) in Adobe XD</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Viewing your prototype on a mobile device
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Sharing your design</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion__item">
                    <div className="accordion__button py-20 px-30 bg-light-4">
                      <div className="d-flex items-center">
                        <div className="accordion__icon">
                          <div
                            className="icon"
                            data-feather="chevron-down"
                          ></div>
                          <div className="icon" data-feather="chevron-up"></div>
                        </div>
                        <span className="text-17 fw-500 text-dark-1">
                          Wireframe Feedback
                        </span>
                      </div>

                      <div>5 lectures • 87 min</div>
                    </div>

                    <div className="accordion__content">
                      <div className="accordion__content__inner px-30 py-30">
                        <div className="y-gap-20">
                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Introduction to the User Experience Course
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Getting started with your Adobe XD project
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                What is UI vs UX - User Interface vs User
                                Experience vs Product Designer
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Wireframing (low fidelity) in Adobe XD</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>
                                Viewing your prototype on a mobile device
                              </div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
                              </a>
                            </div>
                          </div>

                          <div className="d-flex justify-between">
                            <div className="d-flex items-center">
                              <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                <div className="icon-play text-9"></div>
                              </div>
                              <div>Sharing your design</div>
                            </div>

                            <div className="d-flex x-gap-20 items-center">
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                Preview
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                5 question
                              </a>
                              <a
                                href="#"
                                className="text-14 lh-1 text-purple-1 underline"
                              >
                                03:56
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

            <div id="instructors" className="pt-60 lg:pt-40">
              <h2 className="text-20 fw-500">Instructor</h2>

              <div className="mt-30">
                <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                  <div className="size-120">
                    <img
                      className="object-cover"
                      src="/assets/img/misc/verified/1.png"
                      alt="image"
                    />
                  </div>

                  <div className="">
                    <h5 className="text-17 lh-14 fw-500">Floyd Miles</h5>
                    <p className="mt-5">President of Sales</p>

                    <div className="d-flex x-gap-20 y-gap-10 flex-wrap items-center pt-10">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center mr-8">
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="text-14 lh-12 text-yellow-1 ml-5">
                            4.5
                          </div>
                        </div>
                        <div className="text-13 lh-1">Instructor Rating</div>
                      </div>

                      <div className="d-flex items-center text-light-1">
                        <div className="icon-comment text-13 mr-8"></div>
                        <div className="text-13 lh-1">23,987 Reviews</div>
                      </div>

                      <div className="d-flex items-center text-light-1">
                        <div className="icon-person-3 text-13 mr-8"></div>
                        <div className="text-13 lh-1">692 Students</div>
                      </div>

                      <div className="d-flex items-center text-light-1">
                        <div className="icon-wall-clock text-13 mr-8"></div>
                        <div className="text-13 lh-1">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <p>
                    Back in 2010, I started brainspin with a desire to design
                    compelling and engaging apps. For over 7 years, I have
                    designed many high profile web and iPhone applications. The
                    applications range from 3D medical aided web applications to
                    project management applications for niche industries.
                    <br />
                    <br />I am also the founder of a large local design
                    organization, Salt Lake Designers, where I and other local
                    influencers help cultivate the talents of up and coming UX
                    designers through workshops and panel discussions.
                  </p>
                </div>
              </div>
            </div>

            <div id="reviews" className="pt-60 lg:pt-40">
              <div className="blogPost -comments">
                <div className="blogPost__content">
                  <h2 className="text-20 fw-500">Student feedback</h2>
                  <div className="row x-gap-10 y-gap-10 pt-30">
                    <div className="col-md-4">
                      <div className="d-flex items-center justify-center flex-column py-50 text-center bg-light-6 rounded-8">
                        <div className="text-60 lh-11 text-dark-1 fw-500">
                          4.8
                        </div>
                        <div className="d-flex x-gap-5 mt-10">
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                        </div>
                        <div className="mt-10">Course Rating</div>
                      </div>
                    </div>

                    <div className="col-md-8">
                      <div className="py-20 px-30 bg-light-6 rounded-8">
                        <div className="row y-gap-15">
                          <div className="col-12">
                            <div className="d-flex items-center">
                              <div className="progress-bar w-1/1 mr-15">
                                <div className="progress-bar__bg bg-light-12"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/1"></div>
                              </div>
                              <div className="d-flex x-gap-5 pr-15">
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                              </div>
                              <div className="text-dark-1">70%</div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex items-center">
                              <div className="progress-bar w-1/1 mr-15">
                                <div className="progress-bar__bg bg-light-12"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/2"></div>
                              </div>
                              <div className="d-flex x-gap-5 pr-15">
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                              </div>
                              <div className="text-dark-1">15%</div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex items-center">
                              <div className="progress-bar w-1/1 mr-15">
                                <div className="progress-bar__bg bg-light-12"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/3"></div>
                              </div>
                              <div className="d-flex x-gap-5 pr-15">
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                              </div>
                              <div className="text-dark-1">20%</div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex items-center">
                              <div className="progress-bar w-1/1 mr-15">
                                <div className="progress-bar__bg bg-light-12"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/5"></div>
                              </div>
                              <div className="d-flex x-gap-5 pr-15">
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                              </div>
                              <div className="text-dark-1">3%</div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex items-center">
                              <div className="progress-bar w-1/1 mr-15">
                                <div className="progress-bar__bg bg-light-12"></div>
                                <div className="progress-bar__bar bg-purple-1 w-1/7"></div>
                              </div>
                              <div className="d-flex x-gap-5 pr-15">
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                                <div className="icon-star text-11 text-yellow-1"></div>
                              </div>
                              <div className="text-dark-1">2%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-20 fw-500 mt-60 lg:mt-40">Reviews</h2>
                  <ul className="comments__list mt-30">
                    <li className="comments__item">
                      <div className="comments__item-inner md:direction-column">
                        <div className="comments__img mr-20">
                          <div
                            className="bg-image rounded-full js-lazy"
                            data-bg="img/avatars/1.png"
                            style={{
                              backgroundImage: `url('img/avatars/1.png')`,
                            }}
                          ></div>
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="stars"></div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The best LMS Design
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              This course is a very applicable. Professor Ng
                              explains precisely each algorithm and even tries
                              to give an intuition for mathematical and
                              statistic concepts behind each algorithm. Thank
                              you very much.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <span className="text-13 text-purple-1">
                              Was this review helpful?
                            </span>
                            <button className="button text-13 -sm -purple-1 text-white">
                              Yes
                            </button>
                            <button className="button text-13 -sm -light-7 text-purple-1">
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="comments__item">
                      <div className="comments__item-inner md:direction-column">
                        <div className="comments__img mr-20">
                          <div
                            className="bg-image rounded-full js-lazy"
                            data-bg="img/avatars/1.png"
                            style={{
                              backgroundImage: `url('img/avatars/1.png')`,
                            }}
                          ></div>
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="stars"></div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            The best LMS Design
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              This course is a very applicable. Professor Ng
                              explains precisely each algorithm and even tries
                              to give an intuition for mathematical and
                              statistic concepts behind each algorithm. Thank
                              you very much.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <span className="text-13 text-purple-1">
                              Was this review helpful?
                            </span>
                            <button className="button text-13 -sm -purple-1 text-white">
                              Yes
                            </button>
                            <button className="button text-13 -sm -light-7 text-purple-1">
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="comments__item">
                      <div className="d-flex justify-center">
                        <button className="text-purple-1 lh-12 underline fw-500">
                          View All Reviews
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="respondForm pt-60">
                <h3 className="text-20 fw-500">Write a Review</h3>

                <div className="mt-30">
                  <h4 className="text-16 fw-500">What is it like to Course?</h4>
                  <div className="d-flex x-gap-10 pt-10">
                    <div className="icon-star text-14 text-yellow-1"></div>
                    <div className="icon-star text-14 text-yellow-1"></div>
                    <div className="icon-star text-14 text-yellow-1"></div>
                    <div className="icon-star text-14 text-yellow-1"></div>
                    <div className="icon-star text-14 text-yellow-1"></div>
                  </div>
                </div>

                <form
                  className="contact-form respondForm__form row y-gap-30 pt-30"
                  action="#"
                >
                  <div className="col-12">
                    <label
                      className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                      htmlFor="title"
                    >
                      Review Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Great Courses"
                    />
                  </div>
                  <div className="col-12">
                    <label
                      className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                      htmlFor="comment"
                    >
                      Review Content
                    </label>
                    <textarea
                      name="comment"
                      placeholder="Message"
                      rows="8"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
