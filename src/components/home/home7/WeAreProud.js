import React from "react";

function WeAreProud() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-7">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">We are Proud</h2>

              <p className="sectionTitle__text ">
                Certificate courses are instructed by highly educated and
                qualified instructors who hold doctoral and master’s level
                degrees.
              </p>
            </div>
          </div>
        </div>

        <div data-anim-wrap className="row y-gap-30 pt-60 lg:pt-40">
          <div className="col-lg-3 col-sm-6">
            <div data-anim-child="fade delay-1" className="counter -type-1">
              <div className="counter__number text-purple-1">350,000+</div>
              <div className="counter__title text-light-1">
                Students worldwide
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div data-anim-child="fade delay-2" className="counter -type-1">
              <div className="counter__number text-purple-1">496,00+</div>
              <div className="counter__title text-light-1">
                Total course views
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div data-anim-child="fade delay-3" className="counter -type-1">
              <div className="counter__number text-purple-1">19,000+</div>
              <div className="counter__title text-light-1">
                Five-star course reviews
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div data-anim-child="fade delay-4" className="counter -type-1">
              <div className="counter__number text-purple-1">987,000+</div>
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

export default WeAreProud;
