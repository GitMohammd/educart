import React from "react";
import { Link } from "react-router-dom";

function UpcommigEvent7() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-6">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Upcoming Events</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <Link
              to={"/eventList1"}
              className="button -icon -purple-3 -rounded text-purple-1"
            >
              Browse Events
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 pt-60">
          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-2"
              className="blogCard -type-1 rounded-8 border-light shadow-1 overflow-hidden"
            >
              <div className="blogCard__image ratio ratio-3:2">
                <img
                  className="img-ratio"
                  src="/assets/img/home-3/blog/1.png"
                  alt="image"
                />
              </div>
              <div className="px-30 py-30 bg-white">
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mb-15"
                >
                  <div className="icon-calendar-2"></div>
                  <div className="ml-8">6 April, 2022</div>
                </a>
                <h4 className="text-17 lh-15 fw-500">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mt-15"
                >
                  <div className="icon-location"></div>
                  <div className="ml-8">London, UK</div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-3"
              className="blogCard -type-1 rounded-8 border-light shadow-1 overflow-hidden"
            >
              <div className="blogCard__image ratio ratio-3:2">
                <img
                  className="img-ratio"
                  src="/assets/img/home-3/blog/2.png"
                  alt="image"
                />
              </div>
              <div className="px-30 py-30 bg-white">
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mb-15"
                >
                  <div className="icon-calendar-2"></div>
                  <div className="ml-8">6 April, 2022</div>
                </a>
                <h4 className="text-17 lh-15 fw-500">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mt-15"
                >
                  <div className="icon-location"></div>
                  <div className="ml-8">London, UK</div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-4"
              className="blogCard -type-1 rounded-8 border-light shadow-1 overflow-hidden"
            >
              <div className="blogCard__image ratio ratio-3:2">
                <img
                  className="img-ratio"
                  src="/assets/img/home-3/blog/3.png"
                  alt="image"
                />
              </div>
              <div className="px-30 py-30 bg-white">
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mb-15"
                >
                  <div className="icon-calendar-2"></div>
                  <div className="ml-8">6 April, 2022</div>
                </a>
                <h4 className="text-17 lh-15 fw-500">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mt-15"
                >
                  <div className="icon-location"></div>
                  <div className="ml-8">London, UK</div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-5"
              className="blogCard -type-1 rounded-8 border-light shadow-1 overflow-hidden"
            >
              <div className="blogCard__image ratio ratio-3:2">
                <img
                  className="img-ratio"
                  src="/assets/img/home-3/blog/4.png"
                  alt="image"
                />
              </div>
              <div className="px-30 py-30 bg-white">
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mb-15"
                >
                  <div className="icon-calendar-2"></div>
                  <div className="ml-8">6 April, 2022</div>
                </a>
                <h4 className="text-17 lh-15 fw-500">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <a
                  href="#"
                  className="d-flex items-center text-14 lh-1 text-light-1 mt-15"
                >
                  <div className="icon-location"></div>
                  <div className="ml-8">London, UK</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcommigEvent7;
