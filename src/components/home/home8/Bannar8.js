import React from "react";

function Bannar8() {
  return (
    <section data-anim-wrap className="masthead -type-5">
      <div className="masthead__bg"></div>

      <div className="masthead__container">
        <div className="row y-gap-50 items-center">
          <div className="col-lg-6">
            <div className="masthead__content">
              <div
                data-anim-child="slide-up delay-2"
                className="text-17 lh-15 text-orange-1 fw-500 mb-10"
              >
                Start learning for free
              </div>
              <h1
                data-anim-child="slide-up delay-2"
                className="masthead__title"
              >
                Studies can now be done online much easily
              </h1>
              <p data-anim-child="slide-up delay-3" className="mt-5">
                You can access 7900+ different courses from 600
                <br className="lg:d-none" />
                professional trainers for free
              </p>
              <div
                data-anim-child="slide-up delay-4"
                className="row items-center x-gap-20 y-gap-20 pt-20"
              >
                <div className="col-auto">
                  <a href="#" className="button -md -orange-1 text-white">
                    Join For Free
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -outline-light-5 text-dark-1"
                  >
                    Find Courses
                  </a>
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-5"
                className="row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30"
              >
                <div className="col-xl-4 col-auto">
                  <div className="text-dark-1">
                    <div className="mr-10">
                      <img
                        src="/assets/img/home-8/hero/icons/1.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="fw-500 lh-11 mt-10">
                      Over 12 million
                      <br /> students
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-auto">
                  <div className="text-dark-1">
                    <div className="mr-10">
                      <img
                        src="/assets/img/home-8/hero/icons/2.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="fw-500 lh-11 mt-10">
                      More than
                      <br /> 60,000 courses
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-auto">
                  <div className="text-dark-1">
                    <div className="mr-10">
                      <img
                        src="/assets/img/home-8/hero/icons/3.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="fw-500 lh-11 mt-10">
                      Learn anything
                      <br /> online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div data-anim-child="slide-up delay-6" className="masthead__image">
              <img src="/assets/img/home-8/hero/image.png" alt="imege" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bannar8;
