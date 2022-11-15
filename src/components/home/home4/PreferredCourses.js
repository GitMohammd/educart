import React from "react";

function PreferredCourses() {
  return (
    <section
      data-anim-wrap
      className="masthead -type-3 bg-light-6 js-mouse-move-container"
    >
      <div className="container">
        <div className="row y-gap-30 items-center justify-center">
          <div className="col-xl-7 col-lg-11 relative z-5">
            <div className="masthead__content pl-32 lg:pl-0">
              <h1
                data-anim-child="slide-up delay-1"
                className="masthead__title"
              >
                Find Your Preferred
                <br /> <span className="text-purple-1">Courses</span> & Improve
                Your Skills
              </h1>
              <p
                data-anim-child="slide-up delay-2"
                className="masthead__text text-17 text-dark-1 mt-25"
              >
                Build skills with courses, certificates, and degrees online from
                <br className="lg:d-none" />
                world-class universities and companies.
              </p>

              <div
                data-anim-child="slide-up delay-3"
                className="masthead-search mt-30"
              >
                <div className="masthead-search__form">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What do you want to learn today?"
                    />
                    <button className="button -purple-1 text-white">
                      <i className="icon icon-search"></i>
                    </button>
                  </form>
                </div>

                <div className="masthead-search__searches mt-40">
                  Trending Search:
                  <a href="#">Development</a>,<a href="#">Business</a>,
                  <a href="#">Design</a>,<a href="#">Merketing</a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-anim-child="slide-up delay-5"
            className="col-xl-5 col-lg-7 relative z-2"
          >
            <div className="masthead-image">
              <div className="masthead-image__img1">
                <div className="masthead-image__shape xl:d-none">
                  <img
                    src="/assets/img/home-4/masthead/shape.svg"
                    alt="image"
                  />
                </div>
                <img
                  data-move="20"
                  className="js-mouse-move"
                  src="/assets/img/home-4/masthead/1.png"
                  alt="image"
                />
              </div>

              <div className="masthead-image__el1">
                <div
                  data-move="40"
                  className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                >
                  <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                    <img src="/assets/img/masthead/1.svg" alt="icon" />
                  </div>
                  <div className="ml-20">
                    <div className="text-orange-1 text-16 fw-500 lh-1">
                      3.000 +
                    </div>
                    <div className="mt-3">Free Courses</div>
                  </div>
                </div>
              </div>

              <div className="masthead-image__el2">
                <div
                  data-move="40"
                  className="shadow-4 img-el -w-260 px-40 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                >
                  <div className="img-el__side">
                    <div className="size-50 d-flex justify-center items-center bg-dark-1 rounded-full">
                      <img src="/assets/img/masthead/2.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="">
                    <div className="text-purple-1 text-16 fw-500 lh-1">
                      Congrats!
                    </div>
                    <div className="mt-3">Your Admission Completed</div>
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

export default PreferredCourses;
