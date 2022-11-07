import React from "react";

function News$Events() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">News & Events</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              Browse Blog
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          <div className="col-lg-4 col-md-6">
            <div
              data-anim-child="slide-left delay-2"
              className="blogCard -type-1"
            >
              <div className="blogCard__image">
                <img src="assets/img/blog/1.png" alt="image" />
              </div>
              <div className="blogCard__content">
                <a href="#" className="blogCard__category">
                  EDUCATION
                </a>
                <h4 className="blogCard__title">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <div className="blogCard__date">December 16, 2022</div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              data-anim-child="slide-left delay-3"
              className="blogCard -type-1"
            >
              <div className="blogCard__image">
                <img src="assets/img/blog/2.png" alt="image" />
              </div>
              <div className="blogCard__content">
                <a href="#" className="blogCard__category">
                  DESIGN
                </a>
                <h4 className="blogCard__title">
                  How to design a simple, yet unique and memorable brand
                  identity
                </h4>
                <div className="blogCard__date">December 16, 2022</div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row y-gap-30">
              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-4"
                  className="eventCard -type-4"
                >
                  <div className="eventCard__date bg-light-7 mr-20">
                    <span className="text-30 lh-1 fw-700">15</span>
                    <span className="text-18 lh-1 fw-500 uppercase mt-10">
                      JUNE
                    </span>
                  </div>
                  <div className="eventCard__content">
                    <div className="text-13 lh-1 fw-500 uppercase text-purple-1">
                      Courses
                    </div>
                    <h4 className="text-17 lh-15 fw-500 mt-10">
                      Medical Chemistry: The Molecular Basis
                    </h4>
                  </div>
                </a>
              </div>

              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-5"
                  className="eventCard -type-4"
                >
                  <div className="eventCard__date bg-light-7 mr-20">
                    <span className="text-30 lh-1 fw-700">15</span>
                    <span className="text-18 lh-1 fw-500 uppercase mt-10">
                      JUNE
                    </span>
                  </div>
                  <div className="eventCard__content">
                    <div className="text-13 lh-1 fw-500 uppercase text-purple-1">
                      Courses
                    </div>
                    <h4 className="text-17 lh-15 fw-500 mt-10">
                      Medical Chemistry: The Molecular Basis
                    </h4>
                  </div>
                </a>
              </div>

              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-6"
                  className="eventCard -type-4"
                >
                  <div className="eventCard__date bg-light-7 mr-20">
                    <span className="text-30 lh-1 fw-700">15</span>
                    <span className="text-18 lh-1 fw-500 uppercase mt-10">
                      JUNE
                    </span>
                  </div>
                  <div className="eventCard__content">
                    <div className="text-13 lh-1 fw-500 uppercase text-purple-1">
                      Courses
                    </div>
                    <h4 className="text-17 lh-15 fw-500 mt-10">
                      Medical Chemistry: The Molecular Basis
                    </h4>
                  </div>
                </a>
              </div>

              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-7"
                  className="eventCard -type-4"
                >
                  <div className="eventCard__date bg-light-7 mr-20">
                    <span className="text-30 lh-1 fw-700">15</span>
                    <span className="text-18 lh-1 fw-500 uppercase mt-10">
                      JUNE
                    </span>
                  </div>
                  <div className="eventCard__content">
                    <div className="text-13 lh-1 fw-500 uppercase text-purple-1">
                      Courses
                    </div>
                    <h4 className="text-17 lh-15 fw-500 mt-10">
                      Medical Chemistry: The Molecular Basis
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News$Events;
