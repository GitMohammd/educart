import React from "react";

function SignUpContent() {
  return (
    <section className="form-page">
      <div className="form-page__img bg-dark-1">
        <div className="form-page-composition">
          <div className="-bg">
            <img
              data-move="30"
              className="js-mouse-move"
              src="/assets/img/login/bg.png"
              alt="bg"
            />
          </div>
          <div className="-el-1">
            <img
              data-move="20"
              className="js-mouse-move"
              src="/assets/img/home-9/hero/bg.png"
              alt="image"
            />
          </div>
          <div className="-el-2">
            <img
              data-move="40"
              className="js-mouse-move"
              src="/assets/img/home-9/hero/1.png"
              alt="icon"
            />
          </div>
          <div className="-el-3">
            <img
              data-move="40"
              className="js-mouse-move"
              src="/assets/img/home-9/hero/2.png"
              alt="icon"
            />
          </div>
          <div className="-el-4">
            <img
              data-move="40"
              className="js-mouse-move"
              src="/assets/img/home-9/hero/3.png"
              alt="icon"
            />
          </div>
        </div>
      </div>

      <div className="form-page__content lg:py-50">
        <div className="container">
          <div className="row justify-center items-center">
            <div className="col-xl-8 col-lg-9">
              <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                <h3 className="text-30 lh-13">Sign Up</h3>
                <p className="mt-10">
                  Already have an account?{" "}
                  <a href="login.html" className="text-purple-1">
                    Log in
                  </a>
                </p>

                <form
                  className="contact-form respondForm__form row y-gap-20 pt-30"
                  action="#"
                >
                  <div className="col-lg-6">
                    <label
                      className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                      for="title"
                    >
                      Email address *
                    </label>
                    <input type="text" name="title" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                      for="title"
                    >
                      Username *
                    </label>
                    <input type="text" name="title" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                      for="title"
                    >
                      Password *
                    </label>
                    <input type="text" name="title" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <label
                      className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                      for="title"
                    >
                      Confirm Password *
                    </label>
                    <input type="text" name="title" placeholder="Name" />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                    >
                      Register
                    </button>
                  </div>
                </form>

                <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                  Or sign in using
                </div>

                <div className="d-flex x-gap-20 items-center justify-between pt-20">
                  <div>
                    <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                      Log In via Facebook
                    </button>
                  </div>
                  <div>
                    <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                      Log In via Google+
                    </button>
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

export default SignUpContent;
