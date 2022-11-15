import React from "react";

function BecomeInstructorContent() {
  return (
    <section className=" layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="tabs -active-purple-2 js-tabs">
              <div className="tabs__controls d-flex js-tabs-controls">
                <button
                  className="tabs__button js-tabs-button is-active"
                  data-tab-target=".-tab-item-1"
                  type="button"
                >
                  Become an Instructor
                </button>
                <button
                  className="tabs__button js-tabs-button ml-30"
                  data-tab-target=".-tab-item-2"
                  type="button"
                >
                  Instructor Rules
                </button>
                <button
                  className="tabs__button js-tabs-button ml-30"
                  data-tab-target=".-tab-item-3"
                  type="button"
                >
                  Start with Courses
                </button>
              </div>

              <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-active">
                  <p className="text-light-1">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                    <br />
                    <br />
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                </div>
                <div className="tabs__pane -tab-item-2">
                  <p className="text-light-1">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </div>
                <div className="tabs__pane -tab-item-3">
                  <p className="text-light-1">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between layout-pt-lg">
          <div className="col-lg-3 col-md-6">
            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 bg-white rounded-8">
              <div className="coursesCard__image">
                <img src="/assets/img/home-5/learning/1.svg" alt="image" />
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
            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 bg-white rounded-8">
              <div className="coursesCard__image">
                <img src="/assets/img/home-5/learning/2.svg" alt="image" />
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
            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 bg-white rounded-8">
              <div className="coursesCard__image">
                <img src="/assets/img/home-5/learning/3.svg" alt="image" />
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
            <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 bg-white rounded-8">
              <div className="coursesCard__image">
                <img src="/assets/img/home-5/learning/4.svg" alt="image" />
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

export default BecomeInstructorContent;
