import React from "react";

function Footer2() {
  return (
    <footer className="footer -type-4 bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 justify-between pt-60">
          <div className="col-lg-7 col-md-6">
            <div className="text-17 fw-500 text-white uppercase mb-25">
              GET IN TOUCH
            </div>
            <form action="post" className="form-single-field -base mt-15">
              <input
                className="py-20 px-30 bg-dark-6 rounded-200 text-white"
                type="text"
                placeholder="Your Email"
              />
              <button className="button -white rounded-full" type="submit">
                <div className="icon-arrow-right text-24 text-dark-1"></div>
              </button>
            </form>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="footer-header__logo">
              <img src="/assets/img/footer/footer-logo.svg" alt="logo" />
            </div>

            <div className="d-flex justify-between mt-30">
              <div className="">
                <div className="text-white opac-70">
                  Toll Free Customer Care
                </div>
                <div className="text-18 lh-1 fw-500 text-white mt-5">
                  +(1) 123 456 7890
                </div>
              </div>
              <div className="">
                <div className="text-white opac-70">Need live support?</div>
                <div className="text-18 lh-1 fw-500 text-white mt-5">
                  hi@educrat.comv
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-60 pb-60">
          <div className="col-lg-7 col-md-6">
            <div className="row y-gap-30">
              <div className="col-lg-4 col-md-4">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  ABOUT
                </div>
                <div className="d-flex y-gap-10 flex-column text-white">
                  <a href="#">About Us</a>
                  <a href="#">Learner Stories</a>
                  <a href="#">Careers</a>
                  <a href="#">Press</a>
                  <a href="#">Leadership</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>

              <div className="col-lg-8 col-md-8">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  CATEGORIES
                </div>
                <div className="row justify-between y-gap-20">
                  <div className="col-md-6">
                    <div className="d-flex y-gap-10 flex-column text-white">
                      <a href="#">Development</a>
                      <a href="#">Business</a>
                      <a href="#">Finance & Accounting</a>
                      <a href="#">IT & Software</a>
                      <a href="#">Office Productivity</a>
                      <a href="#">Design</a>
                      <a href="#">Marketing</a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex y-gap-10 flex-column text-white">
                      <a href="#">Lifiestyle</a>
                      <a href="#">Photography & Video</a>
                      <a href="#">Health & Fitness</a>
                      <a href="#">Music</a>
                      <a href="#">UX Design</a>
                      <a href="#">Seo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="">
              <div className="text-17 uppercase text-white fw-500">
                Take your learning with you
              </div>

              <div className="d-flex mt-15">
                <div className="d-flex items-center rounded-8 px-25 py-10 footer-bg-color">
                  <div className="icon-apple text-white text-24"></div>
                  <div className="text-white ml-20">
                    <div className="text-13 lh-12">Download on the</div>
                    <div className="text-15 fw-500 lh-12 mt-3">Apple Store</div>
                  </div>
                </div>

                <div className="d-flex items-center rounded-8 px-25 py-10 footer-bg-color ml-10">
                  <div className="icon-play-market text-white text-24"></div>
                  <div className="text-white ml-20">
                    <div className="text-13 lh-12">Get in on</div>
                    <div className="text-15 fw-500 lh-12 mt-3">Google Play</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-header-socials mt-60">
              <div className="text-17 uppercase text-white fw-500">
                Follow us on social media
              </div>
              <div className="footer-header-socials__list d-flex items-center mt-15">
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center text-white"
                >
                  <i className="icon-facebook"></i>
                </a>
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center text-white"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center text-white"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center text-white"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-30 border-top-light-15">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center h-100 text-white">
                © 2022 Educrat. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15 text-white">
                    <a href="#">Help</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Notice</a>
                    <a href="#">Security</a>
                    <a href="#">Terms of Use</a>
                  </div>
                </div>

                <div>
                  <a
                    href="#"
                    className="button px-30 h-50 -dark-6 rounded-200 text-white"
                  >
                    <i className="icon-worldwide text-20 mr-15"></i>
                    <span className="text-15">English</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
