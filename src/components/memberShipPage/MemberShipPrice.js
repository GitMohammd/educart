import React, { useState } from "react";

function MemberShipPrice() {
  const [save30, setSave30] = useState(false);
  const handleSave = (e) => {
    setSave30(e.target.checked);
    console.log(e.target.checked);
  };
  return (
    <section className="layout-pt-sm layout-pb-md">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="d-flex justify-center items-center">
              <div className="text-14 text-dark-1">Monthly</div>
              <div className="form-switch px-20">
                <div className="switch" data-switch=".js-switch-content">
                  <input onClick={handleSave} type="checkbox" />
                  <span className="switch__slider"></span>
                </div>
              </div>
              <div className="text-14 text-dark-1">
                Annually <span className="text-purple-1">Save 30%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-40">
          <div className="col-lg-4 col-md-6">
            <div className="priceCard -type-1 rounded-16 bg-white shadow-2">
              <div className="priceCard__content py-45 px-60 text-center">
                <div className="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                  Basic
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15">
                  Free
                </div>
                <div className="priceCard__period">per month</div>
                <img
                  className="mt-30"
                  src="/assets/img/pricing/1.svg"
                  alt="icon"
                />
                <div className="priceCard__text text-left pr-15 mt-40">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="text-left y-gap-15 mt-35">
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

                <div className="d-inline-block mt-30">
                  <a className="button -md -purple-3 text-purple-1" href="#">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="priceCard -type-1 rounded-16 bg-white shadow-2">
              <div className="priceCard__content py-45 px-60 text-center">
                <div className="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                  Professional
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15">
                  ${!save30 ? "599.95" : "350.95"}
                </div>
                <div className="priceCard__period">per month</div>
                <img
                  className="mt-30"
                  src="/assets/img/pricing/2.svg"
                  alt="icon"
                />
                <div className="priceCard__text text-left pr-15 mt-40">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="text-left y-gap-15 mt-35">
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

                <div className="d-inline-block mt-30">
                  <a className="button -md -purple-3 text-purple-1" href="#">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="priceCard -type-1 rounded-16 bg-white shadow-2">
              <div className="priceCard__content py-45 px-60 text-center">
                <div className="priceCard__type text-18 lh-11 fw-500 text-dark-1">
                  Business
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15">
                  ${!save30 ? "999.95" : "850.95"}
                </div>
                <div className="priceCard__period">per month</div>
                <img
                  className="mt-30"
                  src="/assets/img/pricing/3.svg"
                  alt="icon"
                />
                <div className="priceCard__text text-left pr-15 mt-40">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="text-left y-gap-15 mt-35">
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

                <div className="d-inline-block mt-30">
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

export default MemberShipPrice;
