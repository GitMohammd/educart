import React from "react";

function FeaturedCourses() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-5">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50 justify-between items-center">
          <div className="col-xl-3 col-lg-4">
            <div className="sectionTitle -light">
              <h2 className="sectionTitle__title ">Featured Courses</h2>

              <p className="sectionTitle__text ">
                Hand-picked Instructor and expertly crafted courses, designed
                for the modern students and entrepreneur.
              </p>
            </div>

            <div className="d-inline-block mt-60 lg:mt-25">
              <a href="#" className="button -icon -purple-1 text-white">
                Browse All Courses
                <i className="icon-arrow-top-right text-13 ml-10"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-xl-1">
            <div data-anim-child="slide-up delay-1">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 shadow-3 rounded-8 bg-white"
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

                <div className="h-100 pt-20 pb-15 pl-30 pr-40">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                      <img src="assets/img/general/avatar-1.png" alt="image" />
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

          <div className="col-lg-4 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 shadow-3 rounded-8 bg-white"
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
                      <div className="px-15 rounded-200 bg-orange-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          New
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-20 pb-15 pl-30 pr-40">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
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
                    Complete Python Bootcamp From Zero to Hero in Python
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
                      <img src="assets/img/general/avatar-1.png" alt="image" />
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
    </section>
  );
}

export default FeaturedCourses;
