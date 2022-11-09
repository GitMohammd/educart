import React from "react";

function SingleBlogHeader() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div data-anim="slide-up delay-1">
                  <div className="text-14 text-purple-1 uppercase fw-500 mb-8">
                    EDUCATION
                  </div>

                  <h1 className="page-header__title lh-14">
                    Getting Started The Web
                    <br />
                    Development JavaScript in 2022
                  </h1>

                  <p className="page-header__text">August 10, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div
            className="ratio ratio-16:9 rounded-8 bg-image js-lazy"
            data-bg="img/blog/blog-single/images.png"
            style={{
              backgroundImage: `url('assets/img/blog/blog-single/images.png')`,
            }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default SingleBlogHeader;
