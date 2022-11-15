import React from "react";

function LearningSolutions() {
  return (
    <section className="layout-pt-lg layout-pb-lg js-mouse-move-container">
      <div className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <h2 className="text-45 lg:text-40 md:text-30 text-dark-1">
              Online learning solutions
              <br className="xl:d-none" />
              that meet your needs.
            </h2>
            <p className="text-dark-1 mt-20">
              Use the list below to bring attention to your product’s key
              <br className="lg:d-none" />
              differentiator.
            </p>

            <div className="row y-gap-30 pt-60 lg:pt-40">
              <div className="col-12">
                <div className="featureIcon -type-1">
                  <div className="featureIcon__icon bg-green-2">
                    <img
                      src="/assets/img/home-2/learning/icons/1.svg"
                      alt="icon"
                    />
                  </div>

                  <div className="featureIcon__content ml-30 md:ml-20">
                    <h4 className="text-17 fw-500">Leadership development</h4>
                    <p className="mt-5">
                      Lorem ipsum is placeholder text commonly used
                      <br className="lg:d-none" />
                      in the graphic, print, and publishing industries
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="featureIcon -type-1">
                  <div className="featureIcon__icon bg-purple-2">
                    <img
                      src="/assets/img/home-2/learning/icons/2.svg"
                      alt="icon"
                    />
                  </div>

                  <div className="featureIcon__content ml-30 md:ml-20">
                    <h4 className="text-17 fw-500">Digital transformation</h4>
                    <p className="mt-5">
                      Lorem ipsum is placeholder text commonly used
                      <br className="lg:d-none" />
                      in the graphic, print, and publishing industries
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="featureIcon -type-1">
                  <div className="featureIcon__icon bg-orange-2">
                    <img
                      src="/assets/img/home-2/learning/icons/3.svg"
                      alt="icon"
                    />
                  </div>

                  <div className="featureIcon__content ml-30 md:ml-20">
                    <h4 className="text-17 fw-500">
                      Innovation &amp; design thinking
                    </h4>
                    <p className="mt-5">
                      Lorem ipsum is placeholder text commonly used
                      <br className="lg:d-none" />
                      in the graphic, print, and publishing industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="elements-image">
              <div className="elements-image__img1">
                <img
                  className="js-mouse-move"
                  data-move="40"
                  src="/assets/img/home-2/learning/1.png"
                  alt="image"
                />
              </div>

              <div className="elements-image__img2">
                <img
                  className="js-mouse-move"
                  data-move="70"
                  src="/assets/img/home-2/learning/2.png"
                  alt="image"
                />
              </div>

              <div
                data-move="60"
                className="elements-image__el1 lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <img src="/assets/img/masthead/4.png" alt="icon" />
                <div className="ml-20">
                  <div className="text-dark-1 text-16 fw-500 lh-1">
                    Ali Tufan
                  </div>
                  <div className="mt-3">UX/UI Designer</div>
                  <div className="d-flex x-gap-5 mt-3">
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                    <div>
                      <div className="icon-star text-yellow-1 text-11"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-move="30"
                className="elements-image__el2 lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                  <img src="/assets/img/masthead/1.svg" alt="icon" />
                </div>
                <div className="ml-20">
                  <div className="text-orange-1 text-16 fw-500 lh-1">
                    3.000 +
                  </div>
                  <div className="mt-3">Free Courses</div>
                </div>
              </div>

              <div
                data-move="30"
                className="elements-image__el3 sm:d-none shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
              >
                <div className="img-el__side">
                  <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                    <img src="/assets/img/masthead/2.svg" alt="icon" />
                  </div>
                </div>
                <div className="">
                  <div className="text-purple-1 text-16 fw-500 lh-1">
                    Congrats!
                  </div>
                  <div className="mt-3">Your Admission Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningSolutions;
