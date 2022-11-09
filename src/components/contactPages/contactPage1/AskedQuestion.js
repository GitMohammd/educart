import React from "react";

function AskedQuestion() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Frequently Asked Questions.
              </h2>

              <p className="sectionTitle__text ">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>

            <div className="accordion -block text-left pt-60 lg:pt-40 js-accordion">
              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    Do you offer discounts for students?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    Do you offer special pricing for big teams?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    What is the past experience of your teachers?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    What is the course refund policy?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    Do you offer discounts for non-profits?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
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

export default AskedQuestion;
