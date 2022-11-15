import React from "react";

function BestInstructor8() {
  return (
    <section class="layout-pt-lg layout-pb-lg">
      <div class="container">
        <div class="row y-gap-50">
          <div class="col-xl-3 col-lg-4 col-md-8">
            <div class="sectionTitle ">
              <h2 class="sectionTitle__title ">
                Learn from the best instructors
              </h2>

              <p class="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliquam id dolor.
              </p>
            </div>

            <div class="d-inline-block">
              <a href="#" class="button -icon -red-2 text-orange-1 mt-30">
                View All İnstructors
                <i class="icon-arrow-top-right text-13 ml-10"></i>
              </a>
            </div>
          </div>

          <div class="offset-xl-1 col-lg-8">
            <div
              class="overflow-hidden js-section-slider"
              data-loop
              data-pagination
              data-slider-cols="xl-3 lg-3 md-2 sm-2"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="d-flex flex-column items-center">
                    <div>
                      <img src="/assets/img/speakers/1.png" alt="image" />
                    </div>
                    <div class="d-flex items-center mt-20">
                      <div class="icon-star text-9 text-yellow-1 mr-5"></div>
                      <div class="text-yellow-1">4.5</div>
                    </div>
                    <h5 class="text-17 fw-500 mt-10">Jerome Bell</h5>
                    <p class="mt-5">Marketing Coordinator</p>

                    <div class="d-flex x-gap-15 items-center pt-5">
                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div class="text-13 lh-1">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div class="text-13 lh-1">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="d-flex flex-column items-center">
                    <div>
                      <img src="/assets/img/speakers/2.png" alt="image" />
                    </div>
                    <div class="d-flex items-center mt-20">
                      <div class="icon-star text-9 text-yellow-1 mr-5"></div>
                      <div class="text-yellow-1">4.5</div>
                    </div>
                    <h5 class="text-17 fw-500 mt-10">Bessie Cooper</h5>
                    <p class="mt-5">President of Sales</p>

                    <div class="d-flex x-gap-15 items-center pt-5">
                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div class="text-13 lh-1">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div class="text-13 lh-1">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="d-flex flex-column items-center">
                    <div>
                      <img src="/assets/img/speakers/3.png" alt="image" />
                    </div>
                    <div class="d-flex items-center mt-20">
                      <div class="icon-star text-9 text-yellow-1 mr-5"></div>
                      <div class="text-yellow-1">4.5</div>
                    </div>
                    <h5 class="text-17 fw-500 mt-10">Kristin Watson</h5>
                    <p class="mt-5">Nursing Assistant</p>

                    <div class="d-flex x-gap-15 items-center pt-5">
                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div class="text-13 lh-1">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <div class="mr-10">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div class="text-13 lh-1">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
                <div class="col-auto">
                  <div class="pagination -arrows js-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestInstructor8;
