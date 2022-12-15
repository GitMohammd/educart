import React, { useState } from "react";

function SimplePricing() {
  const [price, setPrice] = useState(false);
  const handlePrice = (e) => {
    setPrice(e.target.checked);
  };
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Simple Pricing</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>

            <div className="d-flex justify-center items-center pt-60 lg:pt-30">
              <div className="text-14 text-dark-1">Monthly</div>
              <div className="form-switch px-20">
                <div className="switch" data-switch=".js-switch-content">
                  <input onClick={(e) => handlePrice(e)} type="checkbox" />
                  <span className="switch__slider"></span>
                </div>
              </div>
              <div className="text-14 text-dark-1">
                Annually <span className="text-purple-1">Save 30%</span>
              </div>
            </div>
          </div>
        </div>

        <div
          data-anim-wrap
          className="row y-gap-30 justify-between pt-60 lg:pt-50"
        >
          <div
            className="col-lg-4 col-md-6"
            data-anim-child="slide-right delay-1"
          >
            <div className="priceCard -type-1 rounded-16 overflow-hidden">
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  Basic
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  Free
                </div>
                <div className="priceCard__period text-white mt-5">
                  per month
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    All Operating Supported
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    Great Interface
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    Allows encryption
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    Face recognized system
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    24/7 Full support
                  </div>
                </div>

                <div className="priceCard__button mt-30">
                  <a className="button -md -purple-3 text-purple-1" href="#">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-anim-child="slide-right delay-2"
          >
            <div className="priceCard -type-1 rounded-16 overflow-hidden">
              <div className="priceCard__header py-40 pl-50 bg-purple-1">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  Professional
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  ${price ? "359" : "599"}
                </div>
                <div className="priceCard__period text-white mt-5">
                  per month
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-purple-1">
                <div className="priceCard__text text-white">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  <div className="text-white">
                    <i className="pr-8" data-feather="check"></i>
                    All Operating Supported
                  </div>

                  <div className="text-white">
                    <i className="pr-8" data-feather="check"></i>
                    Great Interface
                  </div>

                  <div className="text-white">
                    <i className="pr-8" data-feather="check"></i>
                    Allows encryption
                  </div>

                  <div className="text-white">
                    <i className="pr-8" data-feather="check"></i>
                    Face recognized system
                  </div>

                  <div className="text-white">
                    <i className="pr-8" data-feather="check"></i>
                    24/7 Full support
                  </div>
                </div>

                <div className="priceCard__button mt-30">
                  <a className="button -md -white text-purple-1" href="#">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-anim-child="slide-right delay-3"
          >
            <div className="priceCard -type-1 rounded-16 overflow-hidden">
              <div className="priceCard__header py-40 pl-50 bg-dark-2">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  Business
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  ${price ? "789" : "999.59"}
                </div>
                <div className="priceCard__period text-white mt-5">
                  per month
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    All Operating Supported
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    Great Interface
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    Allows encryption
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    Face recognized system
                  </div>

                  <div>
                    <i className="text-purple-1 pr-8" data-feather="check"></i>
                    24/7 Full support
                  </div>
                </div>

                <div className="priceCard__button mt-30">
                  <a className="button -md -purple-3 text-purple-1" href="#">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimplePricing;
