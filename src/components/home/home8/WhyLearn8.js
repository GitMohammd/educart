import React from "react";

function WhyLearn8() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-5">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div data-anim-child="slide-up delay-1" className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title text-white">
                Why learn with our courses?
              </h2>

              <p className="sectionTitle__text text-white">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          <div data-anim-child="slide-up delay-2" className="col-lg-4 col-md-6">
            <div className="stepCard -type-1 -stepCard-hover">
              <div className="stepCard__content">
                <div className="stepCard__icon">
                  <i className="icon-online-learning-4 text-64 text-green-1"></i>
                </div>
                <h4 className="stepCard__title">01. Learn</h4>
                <p className="stepCard__text">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </p>
              </div>
            </div>
          </div>

          <div data-anim-child="slide-up delay-3" className="col-lg-4 col-md-6">
            <div className="stepCard -type-1 -stepCard-hover">
              <div className="stepCard__content">
                <div className="stepCard__icon">
                  <i className="icon-graduation-1 text-64 text-green-1"></i>
                </div>
                <h4 className="stepCard__title">02. Graduate</h4>
                <p className="stepCard__text">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </p>
              </div>
            </div>
          </div>

          <div data-anim-child="slide-up delay-4" className="col-lg-4 col-md-6">
            <div className="stepCard -type-1 -stepCard-hover">
              <div className="stepCard__content">
                <div className="stepCard__icon">
                  <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                </div>
                <h4 className="stepCard__title">03. Work</h4>
                <p className="stepCard__text">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyLearn8;
