import React from "react";

function MasterSkills() {
  return (
    <section data-anim-wrap className="masthead -type-4">
      <div className="container">
        <div className="row y-gap-50 justify-center items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="masthead__content">
              <h1
                data-anim-child="slide-up delay-3"
                className="masthead__title"
              >
                Master the Skills to
                <br />
                Drive your{" "}
                <span className="text-purple-1 underline">Career</span>
              </h1>
              <p
                data-anim-child="slide-up delay-4"
                className="masthead__text pt-15"
              >
                Free online courses from the world’s leading experts.
                <br className="md:d-none" />
                Join 17 million learners today
              </p>
              <div
                data-anim-child="slide-up delay-5"
                className="masthead__button row x-gap-20 y-gap-20 pt-30"
              >
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -purple-1 -rounded text-white"
                  >
                    Join For Free
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -outline-dark-1 -rounded text-dark-1"
                  >
                    Find Courses
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div data-anim-child="slide-up delay-6" className="masthead__image">
              <img src="/assets/img/home-5/masthead/bg.svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MasterSkills;
