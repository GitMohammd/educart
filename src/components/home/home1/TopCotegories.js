import React from 'react'

function TopCotegories() {
  return (
    <section className="layout-pt-md layout-pb-md">
          <div data-anim-wrap className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">

                <div className="sectionTitle ">

                  <h2 className="sectionTitle__title ">Top Categories</h2>

                  <p className="sectionTitle__text ">Lorem ipsum dolor sit amet, consectetur.</p>

                </div>

              </div>
            </div>

            <div className="overflow-hidden pt-50 js-section-slider" data-gap="30" data-loop data-pagination data-slider-cols="xl-6 lg-4 md-2 sm-2">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-2" className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="assets/img/featureCards/1.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Design Creative</div>
                      <div className="featureCard__text">573+ Courses</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-3" className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="assets/img/featureCards/2.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Sales Marketing</div>
                      <div className="featureCard__text">565+ Courses</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-4" className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="assets/img/featureCards/3.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Development IT</div>
                      <div className="featureCard__text">126+ Courses</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-5" className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="assets/img/featureCards/4.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Engineering Architecture</div>
                      <div className="featureCard__text">35+ Courses</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-6" className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="assets/img/featureCards/5.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Personal Development</div>
                      <div className="featureCard__text">908+ Courses</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-7" className="featureCard -type-1 -featureCard-hover">
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="assets/img/featureCards/6.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">Finance Accounting</div>
                      <div className="featureCard__text">129+ Courses</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                    <i className="icon icon-arrow-left"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <div className="pagination -arrows js-pagination"></div>
                </div>
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-next">
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default TopCotegories