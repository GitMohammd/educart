import React from "react";
import { Link } from "react-router-dom";

function StartLearning() {
  return (
    <section data-anim-wrap className="masthead -type-2">
      <div className="masthead__bg">
        <div
          className="bg-image js-lazy"
          data-bg="img/home-3/masthead/bg.png"
          style={{
            backgroundImage: `url("assets/img/home-3/masthead/bg.png")`,
          }}
        ></div>
      </div>

      <div className="container">
        <div className="row y-gap-50 justify-center items-center">
          <div className="col-xl-6 col-lg-11">
            <div className="masthead__content">
              <div
                data-anim-child="slide-up delay-2"
                className="masthead__subtitle fw-500 text-green-1 text-17 lh-15"
              >
                Start learning for free
              </div>
              <h1
                data-anim-child="slide-up delay-3"
                className="masthead__title text-white mt-10"
              >
                Explore your creativity with thousands of online classes.
              </h1>
              <div
                data-anim-child="slide-up delay-4"
                className="masthead__button mt-20"
              >
                <Link
                  to={"/courselist1"}
                  className="button -md -white text-dark-1"
                >
                  Find Courses
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-11">
            <div data-anim-child="slide-up delay-6" className="masthead-form">
              <h4 className="masthead-form__title text-center text-20 lh-15 fw-500 mb-30">
                Create Your <span className="text-purple-1">Free Account</span>
              </h4>

              <form action="#">
                <div className="masthead-form__group">
                  <label>Email Address</label>
                  <input type="text" placeholder="Your Email" />
                </div>

                <div className="masthead-form__group">
                  <label>Password</label>
                  <input type="text" placeholder="Your Password" />
                </div>

                <div className="masthead-form__group">
                  <button
                    type="submit"
                    className="button -md -purple-1 text-white"
                  >
                    Start Learning For Free
                  </button>
                </div>

                <div className="masthead-form__desc">
                  By continuing, you accept our Terms of Use, our Privacy Policy
                  and that your data is stored in the USA. You confirm you are
                  at least 16 years old (13 if you are an authorized Classrooms
                  user).
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartLearning;
