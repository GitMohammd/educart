import React from "react";

function TrustedTeacher() {
  return (
    <section className="section-bg layout-pt-lg layout-pb-sm bg-light-4">
      <div className="section-bg__item -full">
        <div
          className="bg-image js-lazy"
          data-bg="img/home-6/svg/bg.png"
          style={{ backgroundImage: `url("assets/img/home-6/svg/bg.png")` }}
        ></div>
      </div>

      <div data-anim-wrap className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="composition -type-2">
              <div className="-el-1">
                <div className="bg-white rounded-8 px-40 py-40">
                  <div className="text-18 text-dark-1 lh-11 fw-500">
                    <span className="text-purple-1">200+</span> Verified Teacher
                  </div>

                  <div className="y-gap-20 pt-25">
                    <div className="d-flex items-center">
                      <img src="/assets/img/home-6/trust/1.png" alt="image" />
                      <div className="ml-20">
                        <div className="text-15 text-dark-1 lh-11 fw-500">
                          Marvin McKinney
                        </div>
                        <div className="text-13 lh-1 mt-5">Designer</div>
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <img src="/assets/img/home-6/trust/2.png" alt="image" />
                      <div className="ml-20">
                        <div className="text-15 text-dark-1 lh-11 fw-500">
                          Ralph Edwards
                        </div>
                        <div className="text-13 lh-1 mt-5">Designer</div>
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <img src="/assets/img/home-6/trust/3.png" alt="image" />
                      <div className="ml-20">
                        <div className="text-15 text-dark-1 lh-11 fw-500">
                          Annette Black
                        </div>
                        <div className="text-13 lh-1 mt-5">Designer</div>
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <img src="/assets/img/home-6/trust/4.png" alt="image" />
                      <div className="ml-20">
                        <div className="text-15 text-dark-1 lh-11 fw-500">
                          Jane Cooper
                        </div>
                        <div className="text-13 lh-1 mt-5">Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-el-2">
                <div className="bg-white rounded-8">
                  <img
                    className="w-1/1"
                    src="/assets/img/home-6/trust/big.png"
                    alt="image"
                  />
                  <div className="px-20 py-20">
                    <div className="text-17 fw-500 text-dark-1">
                      Wade Warren
                    </div>
                    <div className="text-15 lh-1 mt-5">
                      Marketing Coordinator
                    </div>
                    <div className="d-flex x-gap-15 pt-15">
                      <div className="d-flex items-center">
                        <div className="icon-star text-11 text-yellow-1 mr-10"></div>
                        <div className="text-13 lh-12 text-yellow-1">4.5</div>
                      </div>

                      <div className="d-flex items-center">
                        <img
                          className="shrink-0 mr-10"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div className="text-13 lh-12">692 Students</div>
                      </div>

                      <div className="d-flex items-center">
                        <img
                          className="shrink-0 mr-10"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div className="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-10">
            <h2 className="text-30 lh-15">
              Truested By Best
              <br className="lg:d-none" /> Teachers
            </h2>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <div className="y-gap-20 pt-25">
              <div className="d-flex items-center">
                <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                  <i className="text-white size-12" data-feather="check"></i>
                </div>
                <div className="fw-500 text-dark-1">
                  Last Education of Bachelor Degree
                </div>
              </div>

              <div className="d-flex items-center">
                <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                  <i className="text-white size-12" data-feather="check"></i>
                </div>
                <div className="fw-500 text-dark-1">
                  More Than 15 Years Experience
                </div>
              </div>

              <div className="d-flex items-center">
                <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                  <i className="text-white size-12" data-feather="check"></i>
                </div>
                <div className="fw-500 text-dark-1">
                  12 Education Award Winning
                </div>
              </div>
            </div>

            <div className="d-inline-block mt-35">
              <a href="#" className="button -md -dark-2 text-white">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedTeacher;
