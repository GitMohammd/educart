import React from "react";

function EducationCourses() {
  return (
    <section data-anim-wrap className="masthead -type-5">
      <div className="masthead__bg pr-60 md:pr-0">
        <img src="assets/img/home-6/hero/bg.png" alt="image" />
      </div>

      <div className="container">
        <div className="row y-gap-50 items-center justify-between">
          <div className="col-lg-6">
            <div className="masthead__content">
              <h1
                data-anim-child="slide-up delay-1"
                className="masthead__title"
              >
                More Than{" "}
                <span className="text-purple-1 underline">3.500+</span>
                <br className="md:d-none" />
                Education Courses
                <br className="md:d-none" />
                Online Join Us Today
              </h1>

              <div
                data-anim-child="slide-up delay-2"
                className="row items-center x-gap-30 y-gap-20 pt-30"
              >
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -dark-1 -rounded text-white"
                  >
                    Get Started
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="d-flex items-center">
                    <div className="d-flex justify-center items-center size-60 rounded-full border-dark-1-lg">
                      <div className="icon-play text-20 text-dark-1 pl-5"></div>
                    </div>
                    <div className="ml-10">Watch Video</div>
                  </a>
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-3"
                className="row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30"
              >
                <div className="col-xl-4">
                  <div className="d-flex items-center text-dark-1">
                    <div className="mr-10">
                      <img
                        src="assets/img/home-6/hero/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="fw-500 lh-1 pt-3">
                      Over 12 million students
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="d-flex items-center text-dark-1">
                    <div className="mr-10">
                      <img
                        src="assets/img/home-6/hero/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="fw-500 lh-1 pt-3">
                      More than 60,000 courses
                    </div>
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="d-flex items-center text-dark-1">
                    <div className="mr-10">
                      <img
                        src="assets/img/home-6/hero/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="fw-500 lh-1 pt-3">
                      Learn anything online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="composition -type-1 js-mouse-move-container">
              <div className="-img-1">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="assets/img/home-6/hero/2.png"
                  alt="image"
                />
              </div>
              <div className="-img-2">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="assets/img/home-6/hero/1.png"
                  alt="image"
                />
              </div>
              <div className="-img-3">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="assets/img/home-6/hero/3.png"
                  alt="image"
                />
              </div>

              <div data-move="30" className="-el-1 md:d-none js-mouse-move">
                <div className="img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8">
                  <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                    <img src="assets/img/masthead/1.svg" alt="icon" />
                  </div>
                  <div className="ml-20">
                    <div className="text-orange-1 text-16 fw-500 lh-1">
                      3.000 +
                    </div>
                    <div className="mt-3">Free Courses</div>
                  </div>
                </div>
              </div>

              <div data-move="60" className="-el-2 md:d-none js-mouse-move">
                <div className="img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8">
                  <img src="assets/img/masthead/4.png" alt="icon" />
                  <div className="ml-20">
                    <div className="text-dark-1 text-16 fw-500 lh-1">
                      Ali Tufan
                    </div>
                    <div className="mt-3">UX/UI Designer</div>
                    <div className="d-flex x-gap-5 mt-3">
                      <div>
                        <div className="icon-star text-yellow-1 text-11"></div>
                      </div>
                      <div>
                        <div className="icon-star text-yellow-1 text-11"></div>
                      </div>
                      <div>
                        <div className="icon-star text-yellow-1 text-11"></div>
                      </div>
                      <div>
                        <div className="icon-star text-yellow-1 text-11"></div>
                      </div>
                      <div>
                        <div className="icon-star text-yellow-1 text-11"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-move="30" className="-el-3 md:d-none js-mouse-move">
                <div className="img-el px-40 py-20 shadow-4 d-flex items-center bg-white rounded-8">
                  <div className="img-el__side">
                    <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                      <img src="assets/img/masthead/2.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-purple-1 text-16 fw-500 lh-1">
                      Congrats!
                    </div>
                    <div className="mt-3">Your Admission Completed</div>
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

export default EducationCourses;
