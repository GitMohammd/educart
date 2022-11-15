import React from "react";

function BestSeller4() {
  return (
    <section className="page-header -type-5 bg-white">
      <div className="page-header__bg">
        <div
          className="bg-image js-lazy"
          data-bg="img/event-single/bg.png"
        ></div>
      </div>

      <div className="container">
        <div className="page-header__content pt-90 pb-">
          <div className="row y-gap-30 relative">
            <div className="col-xl-7 col-lg-8">
              <div className="d-flex x-gap-15 y-gap-10 pb-20">
                <div>
                  <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                    BEST SELLER
                  </div>
                </div>
                <div>
                  <div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                    NEW
                  </div>
                </div>
                <div>
                  <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                    POPULAR
                  </div>
                </div>
              </div>

              <div data-anim="slide-up delay-1">
                <h1 className="text-30 lh-14 pr-60 lg:pr-0">
                  User Experience Design Essentials - Adobe XD UI UX Design
                </h1>
              </div>

              <p className="col-xl-9 mt-20">
                Use XD to get a job in UI Design, User Interface, User
                Experience design, UX design & Web Design
              </p>

              <div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                <div className="d-flex items-center text-light-1">
                  <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                  <div className="d-flex x-gap-10 items-center">
                    <div className="icon-star text-9 text-yellow-1"></div>
                    <div className="icon-star text-9 text-yellow-1"></div>
                    <div className="icon-star text-9 text-yellow-1"></div>
                    <div className="icon-star text-9 text-yellow-1"></div>
                    <div className="icon-star text-9 text-yellow-1"></div>
                  </div>
                  <div className="text-14 lh-1 ml-10">(1991)</div>
                </div>

                <div className="d-flex items-center text-light-1">
                  <div className="icon icon-person-3 text-13"></div>
                  <div className="text-14 ml-8">
                    853 enrolled on this course
                  </div>
                </div>

                <div className="d-flex items-center text-light-1">
                  <div className="icon icon-wall-clock text-13"></div>
                  <div className="text-14 ml-8">Last updated 11/2021</div>
                </div>
              </div>

              <div className="d-flex items-center pt-20">
                <div
                  className="bg-image size-30 rounded-full js-lazy"
                  data-bg="img/avatars/small-1.png"
                  style={{
                    backgroundImage: `url('assets/img/avatars/small-1.png')`,
                  }}
                ></div>
                <div className="text-14 lh-1 ml-10">Ali Tufan</div>
              </div>
            </div>

            <div className="courses-single-info">
              <div className="bg-white shadow-2 rounded-8 border-light py-10 px-10">
                <div className="relative">
                  <img
                    className="w-1/1"
                    src="/assets/img/misc/1.png"
                    alt="image"
                  />
                  <div className="absolute-full-center d-flex justify-center items-center">
                    <a
                      href="#"
                      className="d-flex justify-center items-center size-60 rounded-full bg-white"
                    >
                      <div className="icon-play text-18"></div>
                    </a>
                  </div>
                </div>

                <div className="courses-single-info__content pt-30 pb-20 px-20">
                  <div className="d-flex justify-between items-center mb-30">
                    <div className="text-24 lh-1 text-dark-1 fw-500">
                      $96.00
                    </div>
                    <div className="lh-1 line-through">$76.00</div>
                  </div>

                  <button className="button -md -purple-1 text-white w-1/1">
                    Add To Cart
                  </button>
                  <button className="button -md -outline-dark-1 text-dark-1 w-1/1 mt-10">
                    Buy Now
                  </button>

                  <div className="text-14 lh-1 text-center mt-30">
                    30-Day Money-Back Guarantee
                  </div>

                  <div className="mt-25">
                    <div className="d-flex justify-between py-8 ">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-video-file"></div>
                        <div className="ml-10">Lessons</div>
                      </div>
                      <div>20</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-puzzle"></div>
                        <div className="ml-10">Quizzes</div>
                      </div>
                      <div>3</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-clock-2"></div>
                        <div className="ml-10">Duration</div>
                      </div>
                      <div>13 Hours</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-bar-chart-2"></div>
                        <div className="ml-10">Skill level</div>
                      </div>
                      <div>Beginner</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-translate"></div>
                        <div className="ml-10">Language</div>
                      </div>
                      <div>English</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-badge"></div>
                        <div className="ml-10">Certificate</div>
                      </div>
                      <div>Yes</div>
                    </div>

                    <div className="d-flex justify-between py-8 border-top-light">
                      <div className="d-flex items-center text-dark-1">
                        <div className="icon-infinity"></div>
                        <div className="ml-10">Full lifetime access</div>
                      </div>
                      <div>Yes</div>
                    </div>
                  </div>

                  <div className="d-flex justify-center pt-15">
                    <a
                      href="#"
                      className="d-flex justify-center items-center size-40 rounded-full"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="d-flex justify-center items-center size-40 rounded-full"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="d-flex justify-center items-center size-40 rounded-full"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>

                    <a
                      href="#"
                      className="d-flex justify-center items-center size-40 rounded-full"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
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

export default BestSeller4;
