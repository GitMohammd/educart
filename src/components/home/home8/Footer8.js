import React from "react";

function Footer8() {
  return (
    <footer className="footer -type-5 pt-60 bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 pb-60">
          <div className="col-xl-3 col-lg-5 col-md-6">
            <div className="footer-header__logo">
              <img src="/assets/img/general/logo-dark.svg" alt="logo" />
            </div>

            <div className="mt-30">
              <div className="text-17 text-white">Call Us</div>
              <div className="text-17 lh-1 fw-500 text-white mt-5">
                800 388 80 90
              </div>
            </div>

            <div className="mt-30 pr-20">
              <div className="lh-17 text-white">
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
                hi@educrat.com
              </div>
            </div>

            <div className="footer-header-socials mt-30">
              <div className="footer-header-socials__list d-flex items-center text-white">
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center"
                >
                  <i className="icon-facebook"></i>
                </a>
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="#"
                  className="size-40 d-flex justify-center items-center"
                >
                  <i className="icon-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-6">
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

          <div className="col-xl-4 col-lg-8">
            <div className="text-17 fw-500 text-white uppercase mb-25">
              CATEGORIES
            </div>
            <div className="row justify-between y-gap-20">
              <div className="col-lg-auto col-md-6">
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

              <div className="col-lg-auto col-md-6">
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

          <div className="col-xl-2 offset-xl-1 col-lg-4 col-md-6">
            <div className="text-17 fw-500 text-white uppercase mb-25">
              SUPPORT
            </div>
            <div className="d-flex y-gap-10 flex-column text-white">
              <a href="#">Documentation</a>
              <a href="#">FAQS</a>
              <a href="#">Dashboard</a>
              <a href="#">Contact</a>
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

export default Footer8;
