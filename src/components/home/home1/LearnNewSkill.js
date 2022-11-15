import React from "react";

function LearnNewSkill() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-beige-1">
      <div data-anim-wrap className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
            <div className="about-content">
              <h2
                data-anim-child="slide-up delay-1"
                className="about-content__title"
              >
                <span>Learn</span> new skills when and where you like.
              </h2>
              <p
                data-anim-child="slide-up delay-2"
                className="about-content__text"
              >
                Use the list below to bring attention to your product’s key
                <br /> differentiator.
              </p>
              <div
                data-anim-child="slide-up delay-3"
                className="y-gap-20 pt-30"
              >
                <div className="d-flex items-center">
                  <div className="about-content-list__icon">
                    <i className="icon" data-feather="check"></i>
                  </div>
                  <div className="about-content-list__title">
                    Hand-picked authors
                  </div>
                </div>

                <div className="d-flex items-center">
                  <div className="about-content-list__icon">
                    <i className="icon" data-feather="check"></i>
                  </div>
                  <div className="about-content-list__title">
                    Easy to follow curriculum
                  </div>
                </div>

                <div className="d-flex items-center">
                  <div className="about-content-list__icon">
                    <i className="icon" data-feather="check"></i>
                  </div>
                  <div className="about-content-list__title">Free courses</div>
                </div>

                <div className="d-flex items-center">
                  <div className="about-content-list__icon">
                    <i className="icon" data-feather="check"></i>
                  </div>
                  <div className="about-content-list__title">
                    Money-back guarantee
                  </div>
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-4"
                className="about-content__btn"
              >
                <a href="#">Join Free</a>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
            <div data-anim-child="slide-up delay-5" className="about-image">
              <img src="/assets/img/about/1.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnNewSkill;
