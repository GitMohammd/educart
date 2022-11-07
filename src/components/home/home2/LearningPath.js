import React from "react";

function LearningPath() {
  return (
    <section className="cta -type-1 layout-pt-lg layout-pb-lg">
      <div data-parallax="0.6" className="cta__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          data-bg="assets/img/home-2/cta/bg.png"
          style={{ backgroundImage: `url("assets/img/home-2/cta/bg.png")` }}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-45 md:text-30 text-white">
              Find the right learning path for you
            </h2>
          </div>

          <div className="w-100"></div>

          <div className="col-lg-4 col-md-8">
            <p className="text-white mt-15">
              Match your goals to our programs, explore your options and map out
              your path to success.
            </p>
          </div>

          <div className="w-100"></div>

          <div className="col-auto">
            <a
              href="#"
              className="button -md -outline-white text-white mt-45 md:mt-20"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningPath;
