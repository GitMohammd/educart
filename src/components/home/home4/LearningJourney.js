import React from "react";

function LearningJourney() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Start your Learning Journey Today!
              </h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          <div className="col-lg-3 col-md-6">
            <div className="coursesCard -type-3 text-center">
              <div className="coursesCard__icon bg-green-3">
                <img src="/assets/img/home-4/learning/1.svg" alt="icon" />
              </div>

              <div className="coursesCard__content mt-30">
                <h5 className="coursesCard__title text-18 lh-1 fw-500">
                  Learn with Experts
                </h5>
                <p className="coursesCard__text text-14 mt-10">
                  Grursus mal suada faci lisis that ipsum ameti consecte.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="coursesCard -type-3 text-center">
              <div className="coursesCard__icon bg-yellow-2">
                <img src="/assets/img/home-4/learning/2.svg" alt="icon" />
              </div>

              <div className="coursesCard__content mt-30">
                <h5 className="coursesCard__title text-18 lh-1 fw-500">
                  Learn Anything
                </h5>
                <p className="coursesCard__text text-14 mt-10">
                  Grursus mal suada faci lisis that ipsum ameti consecte.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="coursesCard -type-3 text-center">
              <div className="coursesCard__icon bg-blue-2">
                <img src="/assets/img/home-4/learning/3.svg" alt="icon" />
              </div>

              <div className="coursesCard__content mt-30">
                <h5 className="coursesCard__title text-18 lh-1 fw-500">
                  Flexible Learning
                </h5>
                <p className="coursesCard__text text-14 mt-10">
                  Grursus mal suada faci lisis that ipsum ameti consecte.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="coursesCard -type-3 text-center">
              <div className="coursesCard__icon bg-orange-3">
                <img src="/assets/img/home-4/learning/4.svg" alt="icon" />
              </div>

              <div className="coursesCard__content mt-30">
                <h5 className="coursesCard__title text-18 lh-1 fw-500">
                  Industrial Standart
                </h5>
                <p className="coursesCard__text text-14 mt-10">
                  Grursus mal suada faci lisis that ipsum ameti consecte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
