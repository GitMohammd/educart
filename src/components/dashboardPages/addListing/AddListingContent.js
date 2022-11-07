import React from "react";

function AddListingContent() {
  return (
    <div className="dashboard -home-9 js-dashboard-home-9">
      <div className="dashboard__sidebar scroll-bar-1">
        <div className="sidebar -dashboard">
          <div className="sidebar__item ">
            <a
              href="dashboard.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-discovery mr-15"></i>
              Dashboard
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-courses.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-play-button mr-15"></i>
              My Courses
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-bookmarks.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-bookmark mr-15"></i>
              Bookmarks
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-messages.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-message mr-15"></i>
              Messages
            </a>
          </div>

          <div className="sidebar__item -is-active -dark-bg-dark-2">
            <a
              href="dshb-listing.html"
              className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
            >
              <i className="text-20 icon-list mr-15"></i>
              Create Course
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-reviews.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-comment mr-15"></i>
              Reviews
            </a>
          </div>

          <div className="sidebar__item ">
            <a
              href="dshb-settings.html"
              className="d-flex items-center text-17 lh-1 fw-500 "
            >
              <i className="text-20 icon-setting mr-15"></i>
              Settings
            </a>
          </div>

          <div className="sidebar__item ">
            <a href="#" className="d-flex items-center text-17 lh-1 fw-500 ">
              <i className="text-20 icon-power mr-15"></i>
              Logout
            </a>
          </div>
        </div>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
              <div className="mt-10">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>

          <div className="row y-gap-60">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
                </div>

                <div className="py-30 px-30">
                  <form className="contact-form row y-gap-30" action="#">
                    <div className="col-12">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Course Title*
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Learn Figma - UI/UX Design Essential Training"
                      />
                    </div>

                    <div className="col-12">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Short Description*
                      </label>

                      <textarea
                        name="name"
                        placeholder="Description"
                        rows="7"
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Course Description*
                      </label>

                      <textarea
                        name="name"
                        placeholder="Description"
                        rows="7"
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        What will students learn in your course?*
                      </label>

                      <textarea
                        name="name"
                        placeholder="Description"
                        rows="7"
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Requirements*
                      </label>

                      <textarea
                        name="name"
                        placeholder="Description"
                        rows="7"
                      ></textarea>
                    </div>

                    <div className="col-md-6">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Course Level*
                      </label>

                      <input type="text" name="name" placeholder="Select" />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Audio Language*
                      </label>

                      <input type="text" name="name" placeholder="Select" />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Close Caption*
                      </label>

                      <input type="text" name="name" placeholder="Select" />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                        for="name"
                      >
                        Course Category*
                      </label>

                      <input type="text" name="name" placeholder="Select" />
                    </div>
                  </form>

                  <div className="row y-gap-20 justify-between pt-15">
                    <div className="col-auto">
                      <button className="button -md -outline-purple-1 text-purple-1">
                        Prev
                      </button>
                    </div>

                    <div className="col-auto">
                      <button className="button -md -purple-1 text-white">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Curriculum</h2>
                </div>

                <div className="py-30 px-30">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="text-16 lh-1 fw-500">
                        Introduction to JavaScript
                      </h4>
                    </div>

                    <div className="col-12">
                      <div className="accordion -block-2 text-left js-accordion">
                        <div className="accordion__item -dark-bg-dark-1 mt-10">
                          <div className="accordion__button py-20 px-30 bg-light-4">
                            <div className="d-flex items-center">
                              <div className="icon icon-drag mr-10"></div>
                              <span className="text-16 lh-14 fw-500 text-dark-1">
                                Introduction
                              </span>
                            </div>

                            <div className="d-flex x-gap-10 items-center">
                              <a href="" className="icon icon-edit mr-5"></a>
                              <a href="" className="icon icon-bin"></a>
                              <div className="accordion__icon mr-0">
                                <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="accordion__content__inner px-30 py-30">
                              <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                <div>
                                  <a
                                    href="#"
                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion__item -dark-bg-dark-1 mt-10">
                          <div className="accordion__button py-20 px-30 bg-light-4">
                            <div className="d-flex items-center">
                              <div className="icon icon-drag mr-10"></div>
                              <span className="text-16 lh-14 fw-500 text-dark-1">
                                Installing Development Software
                              </span>
                            </div>

                            <div className="d-flex x-gap-10 items-center">
                              <a href="" className="icon icon-edit mr-5"></a>
                              <a href="" className="icon icon-bin"></a>
                              <div className="accordion__icon mr-0">
                                <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="accordion__content__inner px-30 py-30">
                              <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                <div>
                                  <a
                                    href="#"
                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion__item -dark-bg-dark-1 mt-10">
                          <div className="accordion__button py-20 px-30 bg-light-4">
                            <div className="d-flex items-center">
                              <div className="icon icon-drag mr-10"></div>
                              <span className="text-16 lh-14 fw-500 text-dark-1">
                                Hello World Project from GitHub
                              </span>
                            </div>

                            <div className="d-flex x-gap-10 items-center">
                              <a href="" className="icon icon-edit mr-5"></a>
                              <a href="" className="icon icon-bin"></a>
                              <div className="accordion__icon mr-0">
                                <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="accordion__content__inner px-30 py-30">
                              <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                <div>
                                  <a
                                    href="#"
                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                  >
                                    Add Article +
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row pt-30">
                    <div className="col-12">
                      <h4 className="text-16 lh-1 fw-500">
                        Introduction to JavaScript
                      </h4>
                    </div>

                    <div className="col-12">
                      <div className="accordion -block-2 text-left js-accordion">
                        <div className="accordion__item -dark-bg-dark-1 mt-10">
                          <div className="accordion__button py-20 px-30 bg-light-4">
                            <div className="d-flex items-center">
                              <div className="icon icon-drag mr-10"></div>
                              <span className="text-16 lh-1 fw-500 text-dark-1">
                                Introduction
                              </span>
                            </div>

                            <div className="d-flex x-gap-10 items-center">
                              <a href="" className="icon icon-edit mr-5"></a>
                              <a href="" className="icon icon-bin"></a>
                              <div className="accordion__icon mr-0">
                                <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="accordion__content__inner px-30 py-30">
                              <div className="d-flex">
                                <a
                                  href="#"
                                  className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                                <a
                                  href="#"
                                  className="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10"
                                >
                                  Add Article +
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion__item -dark-bg-dark-1 mt-10">
                          <div className="accordion__button py-20 px-30 bg-light-4">
                            <div className="d-flex items-center">
                              <div className="icon icon-drag mr-10"></div>
                              <span className="text-16 lh-1 fw-500 text-dark-1">
                                Installing Development Software
                              </span>
                            </div>

                            <div className="d-flex x-gap-10 items-center">
                              <a href="" className="icon icon-edit mr-5"></a>
                              <a href="" className="icon icon-bin"></a>
                              <div className="accordion__icon mr-0">
                                <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="accordion__content__inner px-30 py-30">
                              <div className="d-flex">
                                <a
                                  href="#"
                                  className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                                <a
                                  href="#"
                                  className="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10"
                                >
                                  Add Article +
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion__item -dark-bg-dark-1 mt-10">
                          <div className="accordion__button py-20 px-30 bg-light-4">
                            <div className="d-flex items-center">
                              <div className="icon icon-drag mr-10"></div>
                              <span className="text-16 lh-1 fw-500 text-dark-1">
                                Hello World Project from GitHub
                              </span>
                            </div>

                            <div className="d-flex x-gap-10 items-center">
                              <a href="" className="icon icon-edit mr-5"></a>
                              <a href="" className="icon icon-bin"></a>
                              <div className="accordion__icon mr-0">
                                <div className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                <div className="d-flex items-center justify-center icon icon-chevron-up"></div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="accordion__content__inner px-30 py-30">
                              <div className="d-flex">
                                <a
                                  href="#"
                                  className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                >
                                  Add Article +
                                </a>
                                <a
                                  href="#"
                                  className="button -sm py-15 -purple-3 text-purple-1 fw-500 ml-10"
                                >
                                  Add Article +
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row y-gap-20 justify-between pt-30">
                    <div className="col-auto sm:w-1/1">
                      <button className="button -md -outline-purple-1 text-purple-1 sm:w-1/1">
                        Prev
                      </button>
                    </div>

                    <div className="col-auto sm:w-1/1">
                      <button className="button -md -purple-1 text-white sm:w-1/1">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="d-flex items-center py-20 px-30 border-bottom-light">
                  <h2 className="text-17 lh-1 fw-500">Media</h2>
                </div>

                <div className="py-30 px-30">
                  <div className="row y-gap-50">
                    <div className="col-12">
                      <form className="contact-form d-flex lg:flex-column">
                        <div className="relative shrink-0">
                          <img
                            className="w-1/1"
                            src="assets/img/dashboard/media/1.png"
                            alt="image"
                          />

                          <div className="absolute-full-center d-flex justify-end py-20 px-20">
                            <a
                              href="#"
                              className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                            >
                              <i className="icon-bin text-16"></i>
                            </a>
                          </div>
                        </div>

                        <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                          <div className="form-upload col-12">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              for="name"
                            >
                              Course thumbnail*
                            </label>
                            <div className="form-upload__wrap">
                              <input
                                type="text"
                                name="name"
                                placeholder="Cover-1.png"
                              />
                              <button className="button -dark-3 text-white">
                                Upload Files
                              </button>
                            </div>
                          </div>

                          <p className="mt-10">
                            Upload your course image here. It must meet our
                            course image quality standards to be accepted.
                            Important guidelines: 750x440 pixels; .jpg, .jpeg,.
                            gif, or .png. no text on the image.
                          </p>
                        </div>
                      </form>
                    </div>

                    <div className="col-12">
                      <form className="contact-form d-flex lg:flex-column">
                        <div className="relative shrink-0">
                          <img
                            className="w-1/1"
                            src="assets/img/dashboard/media/2.png"
                            alt="image"
                          />

                          <div className="absolute-full-center d-flex justify-end py-20 px-20">
                            <a
                              href="#"
                              className="d-flex justify-center items-center bg-white size-40 rounded-8 shadow-1"
                            >
                              <i className="icon-bin text-16"></i>
                            </a>
                          </div>
                        </div>

                        <div className="w-1/1 ml-30 lg:ml-0 lg:mt-20">
                          <div className="form-upload col-12">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              for="name"
                            >
                              Video URL*
                            </label>
                            <div className="form-upload__wrap">
                              <input
                                type="text"
                                name="name"
                                placeholder="Video-1.mp3"
                              />
                              <button className="button -dark-3 text-white">
                                Upload Files
                              </button>
                            </div>
                          </div>

                          <p className="mt-10">
                            Enter a valid video URL. Students who watch a
                            well-made promo video are 5X more likely to enroll
                            in your course.
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row y-gap-20 justify-between pt-30">
                    <div className="col-auto">
                      <button className="button -md -outline-purple-1 text-purple-1">
                        Prev
                      </button>
                    </div>

                    <div className="col-auto">
                      <button className="button -md -purple-1 text-white">
                        Next
                      </button>
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

export default AddListingContent;
