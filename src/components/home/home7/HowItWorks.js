import React from "react";

function HowItWorks() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div
          data-anim-wrap
          className="row y-gap-30 justify-between items-center"
        >
          <div className="col-xl-5 col-lg-6 order-2 order-lg-1">
            <h2
              data-anim-child="slide-up delay-1"
              className="text-45 lg:text-40 md:text-30 text-dark-1"
            >
              How it <span className="text-purple-1">Works</span>
            </h2>
            <p data-anim-child="slide-up delay-2" className="text-dark-1 mt-20">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
              nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
            </p>

            <div
              data-anim-child="slide-up delay-3"
              className="row y-gap-30 pt-60 lg:pt-40"
            >
              <div className="col-12">
                <div className="featureIcon -type-1">
                  <div className="featureIcon__icon bg-light-7">
                    <img src="assets/img/home-7/about/icons/1.svg" alt="icon" />
                  </div>
                  <div className="featureIcon__content ml-30 md:ml-20">
                    <h4 className="text-17 fw-500">Create Account</h4>
                    <p className="mt-5">
                      Lorem ipsum is placeholder text commonly used
                      <br className="lg:d-none" /> in the graphic, print, and
                      publishing industries
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="featureIcon -type-1">
                  <div className="featureIcon__icon bg-light-7">
                    <img src="assets/img/home-7/about/icons/2.svg" alt="icon" />
                  </div>
                  <div className="featureIcon__content ml-30 md:ml-20">
                    <h4 className="text-17 fw-500">Select Courses</h4>
                    <p className="mt-5">
                      Lorem ipsum is placeholder text commonly used
                      <br className="lg:d-none" /> in the graphic, print, and
                      publishing industries
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="featureIcon -type-1">
                  <div className="featureIcon__icon bg-light-7">
                    <img src="assets/img/home-7/about/icons/3.svg" alt="icon" />
                  </div>
                  <div className="featureIcon__content ml-30 md:ml-20">
                    <h4 className="text-17 fw-500">Enjoy Your Courses</h4>
                    <p className="mt-5">
                      Lorem ipsum is placeholder text commonly used
                      <br className="lg:d-none" /> in the graphic, print, and
                      publishing industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="composition -type-5">
              <div className="-el-1">
                <img src="assets/img/home-7/about/1.png" alt="image" />
              </div>

              <div className="-el-2">
                <img src="assets/img/home-7/about/2.png" alt="image" />
              </div>

              <div className="-el-3">
                <div className="sm:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 shadow-6">
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

              <div className="-el-4">
                <div className="img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 shadow-6">
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

              <div className="-el-5">
                <div className="sm:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 shadow-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
