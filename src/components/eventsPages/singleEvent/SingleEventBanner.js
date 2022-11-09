import React from "react";

function SingleEventBanner() {
  return (
    <section className="page-header -type-2">
      <div className="page-header__bg">
        <div
          className="bg-image js-lazy"
          data-bg="img/event-single/bg.png"
          style={{ backgroundImage: `url("assets/img/event-single/bg.png")` }}
        ></div>
      </div>

      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="page-header__info d-flex items-center">
                <div className="d-flex items-center text-white mr-15">
                  <div className="icon icon-calendar-2"></div>
                  <div className="text-14 ml-8">6 April, 2022</div>
                </div>

                <div className="d-flex items-center text-white mr-15">
                  <div className="icon icon-location"></div>
                  <div className="text-14 ml-8">London, UK</div>
                </div>
              </div>

              <div data-anim="slide-up delay-1">
                <h1 className="page-header__title text-white mt-20">
                  Build Education Website Using WordPress
                </h1>
              </div>

              <div data-anim="slide-up delay-2">
                <div className="d-flex x-gap-50 pt-12">
                  <div className="text-white">
                    <div className="text-40 lh-12 fw-700">20</div>
                    <div className="text-15">Days</div>
                  </div>

                  <div className="text-white">
                    <div className="text-40 lh-12 fw-700">32</div>
                    <div className="text-15">Hours</div>
                  </div>

                  <div className="text-white">
                    <div className="text-40 lh-12 fw-700">57</div>
                    <div className="text-15">Minutes</div>
                  </div>

                  <div className="text-white">
                    <div className="text-40 lh-12 fw-700">13</div>
                    <div className="text-15">Seconds</div>
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

export default SingleEventBanner;
