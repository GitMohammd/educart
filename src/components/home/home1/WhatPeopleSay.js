import React from 'react'

function WhatPeopleSay() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-purple-1">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">

                <div className="sectionTitle ">

                  <h2 className="sectionTitle__title text-green-1">What People Say</h2>

                  <p className="sectionTitle__text text-white">Lorem ipsum dolor sit amet, consectetur.</p>

                </div>

              </div>
            </div>

            <div data-anim-wrap className="js-section-slider pt-50" data-gap="30" data-pagination data-slider-cols="base-3 xl-3 lg-2 md-2 sm-1">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-1" className="testimonials -type-1">
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">Great Work</h4>
                      <p className="testimonials__text"> “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="assets/img/testimonials/1.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">Courtney Henry</div>
                          <div className="testimonials-footer__text">Web Designer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-2" className="testimonials -type-1">
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">Great Work</h4>
                      <p className="testimonials__text"> “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="assets/img/testimonials/2.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">Ronald Richards</div>
                          <div className="testimonials-footer__text">President of Sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-3" className="testimonials -type-1">
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">Great Work</h4>
                      <p className="testimonials__text"> “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="assets/img/testimonials/3.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">Annette Black</div>
                          <div className="testimonials-footer__text">Nursing Assistant</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div data-anim-child="slide-left delay-4" className="testimonials -type-1">
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">Great Work</h4>
                      <p className="testimonials__text"> “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="assets/img/testimonials/4.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">Courtney Henry</div>
                          <div className="testimonials-footer__text">Web Designer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40">
                <div className="col-auto">
                  <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-prev">
                    <i className="icon icon-arrow-left text-24"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next">
                    <i className="icon icon-arrow-right text-24"></i>
                  </button>
                </div>
              </div>

            </div>

            <div data-anim-wrap className="row y-gap-30 counter__row">

              <div className="col-lg-3 col-sm-6">
                <div data-anim-child="slide-left delay-1" className="counter -type-1">
                  <div className="counter__number">350,000+</div>
                  <div className="counter__title">Students worldwide</div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div data-anim-child="slide-left delay-2" className="counter -type-1">
                  <div className="counter__number">496,00+</div>
                  <div className="counter__title">Total course views</div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div data-anim-child="slide-left delay-3" className="counter -type-1">
                  <div className="counter__number">19,000+</div>
                  <div className="counter__title">Five-star course reviews</div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div data-anim-child="slide-left delay-4" className="counter -type-1">
                  <div className="counter__number">987,000+</div>
                  <div className="counter__title">Students community</div>
                </div>
              </div>

            </div>
          </div>
        </section>
  )
}

export default WhatPeopleSay