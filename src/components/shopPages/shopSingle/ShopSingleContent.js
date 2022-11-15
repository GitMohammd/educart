import React from "react";

function ShopSingleContent() {
  return (
    <section className="layout-pt-lg layout-pb-md">
      <div className="container">
        <div className="row y-gap-60 justify-between items-center">
          <div className="col-lg-6">
            <div className="js-shop-slider">
              <div className="shopSingle-preview__image js-slider-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a
                      data-barba
                      href="img/shop/single/1.png"
                      className="gallery__item js-gallery"
                      data-gallery="gallery1"
                    >
                      <div className="ratio ratio-63:57">
                        <img
                          className="absolute-full-center rounded-8"
                          src="/assets/img/shop/single/1.png"
                          alt="project image"
                        />
                      </div>

                      <div className="gallery__button -bottom-right">
                        <i className="icon" data-feather="plus"></i>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      data-barba
                      href="img/shop/single/2.png"
                      className="gallery__item js-gallery"
                      data-gallery="gallery1"
                    >
                      <div className="ratio ratio-63:57">
                        <img
                          className="absolute-full-center rounded-8"
                          src="/assets/img/shop/single/2.png"
                          alt="project image"
                        />
                      </div>

                      <div className="gallery__button -bottom-right">
                        <i className="icon" data-feather="plus"></i>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      data-barba
                      href="img/shop/single/3.png"
                      className="gallery__item js-gallery"
                      data-gallery="gallery1"
                    >
                      <div className="ratio ratio-63:57">
                        <img
                          className="absolute-full-center rounded-8"
                          src="/assets/img/shop/single/3.png"
                          alt="project image"
                        />
                      </div>

                      <div className="gallery__button -bottom-right">
                        <i className="icon" data-feather="plus"></i>
                      </div>
                    </a>
                  </div>

                  <div className="swiper-slide">
                    <a
                      data-barba
                      href="img/shop/single/4.png"
                      className="gallery__item js-gallery"
                      data-gallery="gallery1"
                    >
                      <div className="ratio ratio-63:57">
                        <img
                          className="absolute-full-center rounded-8"
                          src="/assets/img/shop/single/4.png"
                          alt="project image"
                        />
                      </div>

                      <div className="gallery__button -bottom-right">
                        <i className="icon" data-feather="plus"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row y-gap-10 x-gap-10 pt-10 js-slider-pagination">
                <div data-cursor className="col-auto gallery__item">
                  <img
                    className="size-90 object-cover rounded-8"
                    src="/assets/img/shop/single/1.png"
                    alt="project image"
                  />
                </div>

                <div data-cursor className="col-auto gallery__item">
                  <img
                    className="size-90 object-cover rounded-8"
                    src="/assets/img/shop/single/2.png"
                    alt="project image"
                  />
                </div>

                <div data-cursor className="col-auto gallery__item">
                  <img
                    className="size-90 object-cover rounded-8"
                    src="/assets/img/shop/single/3.png"
                    alt="project image"
                  />
                </div>

                <div data-cursor className="col-auto gallery__item">
                  <img
                    className="size-90 object-cover rounded-8"
                    src="/assets/img/shop/single/4.png"
                    alt="project image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="pb-90 md:pb-0">
              <h2 className="text-30 fw-500 mt-4">Wild Cosmos blue hoodie</h2>
              <div className="text-24 fw-500 text-purple-1 mt-15">$18.00</div>

              <div className="mt-30">
                <p>
                  Besides, random text risks to be unintendedly humorous or
                  offensive, an unacceptable risk in corporate environments and
                  its many variants have been employed.
                </p>
              </div>

              <div className="shopSingle-info__action row x-gap-20 y-gap-20 pt-30">
                <div className="col-auto">
                  <div className="input-counter js-input-counter">
                    <input
                      className="input-counter__counter"
                      type="number"
                      placeholder="value..."
                      value="0"
                    />

                    <div className="input-counter__controls">
                      <button className="input-counter__up js-down">
                        <i className="icon" data-feather="minus"></i>
                      </button>

                      <button className="input-counter__down js-up">
                        <i className="icon" data-feather="plus"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <button className="button h-50 px-45 -purple-1 text-white">
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="pt-30">
                <button className="d-flex items-center text-light-1">
                  <i className="icon size-20 mr-8" data-feather="heart"></i>
                  Add to withlist
                </button>
              </div>

              <div className="pt-30">
                <p>Category: Classic</p>
                <p>Tags: Men, Sports, Women</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopSingleContent;
