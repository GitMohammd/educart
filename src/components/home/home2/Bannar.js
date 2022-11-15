import React from "react";

function Bannar() {
  return (
    <section data-anim-wrap className="mainSlider -type-1 js-mainSlider">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div data-anim-child="fade" className="mainSlider__bg">
            <div
              className="bg-image js-lazy"
              data-bg="assets/img/home-2/mainSlider/bg.png"
              style={{
                backgroundImage: `url("assets/img/home-2/mainSlider/bg.png")`,
              }}
            ></div>
          </div>
        </div>

        <div className="swiper-slide">
          <div data-anim-child="fade" className="mainSlider__bg">
            <div
              className="bg-image js-lazy"
              data-bg="assets/img/home-2/mainSlider/bg.png"
              style={{
                backgroundImage: `url("assets/img/home-2/mainSlider/bg.png")`,
              }}
            ></div>
          </div>
        </div>

        <div className="swiper-slide">
          <div data-anim-child="fade" className="mainSlider__bg">
            <div
              className="bg-image js-lazy"
              data-bg="assets/img/home-2/mainSlider/bg.png"
              style={{
                backgroundImage: `url("assets/img/home-2/mainSlider/bg.png")`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-8">
            <div className="mainSlider__content">
              <h1
                data-anim-child="slide-up delay-3"
                className="mainSlider__title text-white"
              >
                Learn Your Way With Educrat To
                <span className="text-green-1 underline">Web Design</span>
              </h1>
              <p
                data-anim-child="slide-up delay-4"
                className="mainSlider__text text-white"
              >
                More than 6.500 online courses
              </p>
              <div
                data-anim-child="slide-up delay-5"
                className="mainSlider__form"
              >
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                />
                <button className="button -md -purple-1 text-white">
                  <i className="icon icon-search mr-15"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          data-anim-child="slide-up delay-6"
          className="row y-gap-20 justify-center mainSlider__items"
        >
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="mainSlider-item text-center">
              <img src="/assets/img/home-2/mainSlider/icons/1.svg" alt="icon" />
              <h4 className="text-20 fw-500 lh-18 text-white mt-8">
                100,000 online courses
              </h4>
              <p className="text-15 text-white">
                Explore a variety of fresh topics
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="mainSlider-item text-center">
              <img src="/assets/img/home-2/mainSlider/icons/2.svg" alt="icon" />
              <h4 className="text-20 fw-500 lh-18 text-white mt-8">
                Expert instruction
              </h4>
              <p className="text-15 text-white">
                Find the right instructor for you
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6">
            <div className="mainSlider-item text-center">
              <img src="/assets/img/home-2/mainSlider/icons/3.svg" alt="icon" />
              <h4 className="text-20 fw-500 lh-18 text-white mt-8">
                Lifetime access
              </h4>
              <p className="text-15 text-white">Learn on your schedule</p>
            </div>
          </div>
        </div>
      </div>

      <button className="swiper-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev">
        <i className="icon icon-arrow-left text-24"></i>
      </button>

      <button className="swiper-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next">
        <i className="icon icon-arrow-right text-24"></i>
      </button>
    </section>
  );
}

export default Bannar;
