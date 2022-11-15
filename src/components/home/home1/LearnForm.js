import React from "react";

function LearnForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div data-anim-wrap className="container">
        <div className="row y-gap-20 items-center">
          <div className="col-xl-7 col-lg-7">
            <div data-anim-child="slide-up delay-1" className="app-image">
              <img src="/assets/img/app/1.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="app-content">
              <h2
                data-anim-child="slide-up delay-3"
                className="app-content__title"
              >
                Learn From
                <br /> <span>Anywhere</span>
              </h2>
              <p
                data-anim-child="slide-up delay-4"
                className="app-content__text"
              >
                Take classes on the go with the educrat app. Stream or download
                to watch on the plane, the subway, or wherever you learn best.
              </p>
              <div
                data-anim-child="slide-up delay-5"
                className="app-content__buttons"
              >
                <a href="#">
                  <img src="/assets/img/app/buttons/1.svg" alt="button" />
                </a>
                <a href="#">
                  <img src="/assets/img/app/buttons/2.svg" alt="button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnForm;
