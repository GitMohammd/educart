import React from "react";

function Bannar7() {
  return (
    <section data-anim-wrap className="masthead -type-6">
      <div className="masthead__bg">
        <img src="assets/img/home-7/hero/1.svg" alt="blob" />
        <img src="assets/img/home-7/hero/2.svg" alt="blob" />
        <img src="assets/img/home-7/hero/bg.png" alt="background" />

        <div
          className="absolute-full-center"
          id="js-masthead-1-particles"
        ></div>
      </div>

      <div className="container">
        <div className="row y-gap-50 items-center">
          <div className="col-lg-5">
            <div className="masthead__content">
              <div
                data-anim-child="slide-up delay-3"
                className="text-17 lh-15 text-purple-1 fw-500 mb-10"
              >
                Start learning for free
              </div>
              <h1
                data-anim-child="slide-up delay-3"
                className="masthead__title"
              >
                Build data skills
                <br />
                <span className="text-purple-1">online</span>
              </h1>
              <p data-anim-child="slide-up delay-4" className="mt-5">
                Data drives everything. Get the skills you need
                <br className="lg:d-none" />
                for the future of work.
              </p>
              <div
                data-anim-child="slide-up delay-5"
                className="row items-center x-gap-20 y-gap-20 pt-20"
              >
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -gradient-1 -rounded text-white"
                  >
                    Join For Free
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -outline-light-5 -rounded text-dark-1"
                  >
                    Find Courses
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              data-anim-child="slide-up delay-6"
              className="masthead__image relative"
            >
              <img src="assets/img/home-7/hero/image.png" alt="image" />
              <div className="absolute-full-center d-flex justify-center items-center">
                <a
                  href="#"
                  className="d-flex justify-center items-center size-60 rounded-full bg-white"
                >
                  <div className="icon-play text-18"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bannar7;
