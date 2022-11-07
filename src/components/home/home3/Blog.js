import React from "react";

function Blog() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div
          data-anim-child="slide-left delay-1"
          className="row y-gap-20 justify-between items-center"
        >
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Blog</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
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

        <div className="row y-gap-30 pt-60">
          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-2"
              className="blogCard -type-1"
            >
              <div className="blogCard__image">
                <img src="assets/img/home-3/blog/1.png" alt="image" />
              </div>
              <div className="blogCard__content mt-20">
                <a href="#" className="blogCard__category">
                  EDUCATION
                </a>
                <h4 className="blogCard__title text-17 lh-15 mt-5">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <div className="blogCard__date text-14 mt-5">
                  December 16, 2022
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-3"
              className="blogCard -type-1"
            >
              <div className="blogCard__image">
                <img src="assets/img/home-3/blog/2.png" alt="image" />
              </div>
              <div className="blogCard__content mt-20">
                <a href="#" className="blogCard__category">
                  EDUCATION
                </a>
                <h4 className="blogCard__title text-17 lh-15 mt-5">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <div className="blogCard__date text-14 mt-5">
                  December 16, 2022
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-4"
              className="blogCard -type-1"
            >
              <div className="blogCard__image">
                <img src="assets/img/home-3/blog/3.png" alt="image" />
              </div>
              <div className="blogCard__content mt-20">
                <a href="#" className="blogCard__category">
                  EDUCATION
                </a>
                <h4 className="blogCard__title text-17 lh-15 mt-5">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <div className="blogCard__date text-14 mt-5">
                  December 16, 2022
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-5"
              className="blogCard -type-1"
            >
              <div className="blogCard__image">
                <img src="assets/img/home-3/blog/4.png" alt="image" />
              </div>
              <div className="blogCard__content mt-20">
                <a href="#" className="blogCard__category">
                  EDUCATION
                </a>
                <h4 className="blogCard__title text-17 lh-15 mt-5">
                  Eco-Education in Our Lives: We Can Change the Future
                </h4>
                <div className="blogCard__date text-14 mt-5">
                  December 16, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
