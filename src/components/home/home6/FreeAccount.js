import React from "react";

function FreeAccount() {
  return (
    <section className="layout-pt-lg bg-purple-1">
      <div data-anim-wrap className="container">
        <div className="row y-gap-30 items-center">
          <div className="col-lg-5">
            <div className="bg-white rounded-16 px-30 py-30">
              <h3 className="text-20 lh-15 text-center">
                Create Your <span className="text-purple-1">Free Account</span>
              </h3>
              <form action="post" className="contact-form row y-gap-30 pt-30">
                <div className="col-12">
                  <label
                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input type="text" name="email" placeholder="Email..." />
                </div>
                <div className="col-12">
                  <label
                    className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                  />
                </div>
                <div className="col-12">
                  <button className="button -md -purple-1 w-1/1 text-white">
                    Start Learning For Free
                  </button>
                  <div className="text-13 lh-17 mt-15">
                    By continuing, you accept our Terms of Use, our Privacy
                    Policy and that your data is stored in the USA. You confirm
                    you are at least 16 years old (13 if you are an authorized
                    Classrooms user).
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="offset-xl-2 col-xl-4 offset-lg-1 col-lg-5 col-md-9">
            <h2 className="text-30 lh-13 text-white">
              Register Now and Get a 70% Discount
            </h2>
            <p className="text-lg text-white mt-10">
              Get 100 Online Courses For Free
            </p>

            <div className="js-countdown">
              <div className="row x-gap-50 y-gap-30 pt-60 lg:pt-30">
                <div className="col-md-auto col-6">
                  <div className="text-center text-white">
                    <div className="text-45 lh-12 fw-700 js-countdown-days">
                      20
                    </div>
                    <div className="mt-5">Days</div>
                  </div>
                </div>

                <div className="col-md-auto col-6">
                  <div className="text-center text-white">
                    <div className="text-45 lh-12 fw-700 js-countdown-hours">
                      32
                    </div>
                    <div className="mt-5">Hours</div>
                  </div>
                </div>

                <div className="col-md-auto col-6">
                  <div className="text-center text-white">
                    <div className="text-45 lh-12 fw-700 js-countdown-minutes">
                      57
                    </div>
                    <div className="mt-5">Minutes</div>
                  </div>
                </div>

                <div className="col-md-auto col-6">
                  <div className="text-center text-white">
                    <div className="text-45 lh-12 fw-700 js-countdown-seconds">
                      13
                    </div>
                    <div className="mt-5">Seconds</div>
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

export default FreeAccount;
