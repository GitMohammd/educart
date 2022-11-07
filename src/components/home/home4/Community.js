import React from "react";

function Community() {
  return (
    <section className="layout-pt-md layout-pb-md bg-beige-1">
      <div className="container">
        <div data-anim-wrap className="row y-gap-30">
          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-1"
              className="counter -type-1"
            >
              <div className="counter__number text-dark-1">350,000+</div>
              <div className="counter__title text-light-1">
                Students worldwide
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-2"
              className="counter -type-1"
            >
              <div className="counter__number text-dark-1">496,00+</div>
              <div className="counter__title text-light-1">
                Total course views
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-3"
              className="counter -type-1"
            >
              <div className="counter__number text-dark-1">19,000+</div>
              <div className="counter__title text-light-1">
                Five-star course reviews
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              data-anim-child="slide-left delay-4"
              className="counter -type-1"
            >
              <div className="counter__number text-dark-1">987,000+</div>
              <div className="counter__title text-light-1">
                Students community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
