import React from "react";

function ReSources() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Resources & News</h2>

              <p className="sectionTitle__text ">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>

          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              Browse Blog
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          <div
            data-anim-child="slide-left delay-2"
            className="col-lg-4 col-md-6"
          >
            <a href="#" className="blogCard -type-1">
              <div className="blogCard__image">
                <img src="/assets/img/blog/1.png" alt="image" />
              </div>
              <div className="blogCard__content">
                <div className="blogCard__category">EDUCATION</div>
                <h4 className="blogCard__title">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <div className="blogCard__date">December 16, 2022</div>
              </div>
            </a>
          </div>

          <div
            data-anim-child="slide-left delay-3"
            className="col-lg-4 col-md-6"
          >
            <a href="#" className="blogCard -type-1">
              <div className="blogCard__image">
                <img src="/assets/img/blog/2.png" alt="image" />
              </div>
              <div className="blogCard__content">
                <div className="blogCard__category">DESIGN</div>
                <h4 className="blogCard__title">
                  How to design a simple, yet unique and memorable brand
                  identity
                </h4>
                <div className="blogCard__date">December 16, 2022</div>
              </div>
            </a>
          </div>

          <div className="col-lg-4">
            <div className="row y-gap-30">
              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-4"
                  className="blogCard -type-2"
                >
                  <div className="blogCard__image">
                    <img src="/assets/img/blog/small/1.png" alt="image" />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">COURSES</div>
                    <h4 className="blogCard__title">
                      Medical Chemistry: The Molecular Basis
                    </h4>
                    <div className="blogCard__date">December 16, 2022</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-5"
                  className="blogCard -type-2"
                >
                  <div className="blogCard__image">
                    <img src="/assets/img/blog/small/2.png" alt="image" />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">DEVELOPMENT</div>
                    <h4 className="blogCard__title">
                      Qualification for Students’ Satisfaction Rate
                    </h4>
                    <div className="blogCard__date">December 16, 2022</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-12 col-md-6">
                <a
                  href="#"
                  data-anim-child="slide-left delay-6"
                  className="blogCard -type-2"
                >
                  <div className="blogCard__image">
                    <img src="/assets/img/blog/small/3.png" alt="image" />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">LIFESTYLE</div>
                    <h4 className="blogCard__title">
                      Simple Words about Science Complications
                    </h4>
                    <div className="blogCard__date">December 16, 2022</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReSources;
