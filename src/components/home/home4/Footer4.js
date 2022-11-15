import React from "react";

function Footer4() {
  return (
    <footer className="footer -type-1 -dark bg-light-9">
      <div className="container">
        <div className="footer-header border-bottom-dark">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
                <img src="/assets/img/general/logo-dark.svg" alt="logo" />
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-dark-1">
                  Follow us on social media
                </div>
                <div className="footer-header-socials__list">
                  <a href="#">
                    <i className="text-14 fa fa-facebook"></i>
                  </a>

                  <a href="#">
                    <i className="text-14 fa fa-twitter"></i>
                  </a>

                  <a href="#">
                    <i className="text-14 fa fa-instagram"></i>
                  </a>

                  <a href="#">
                    <i className="text-14 fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-columns">
          <div className="row y-gap-30">
            <div className="col-xl-2 col-md-4">
              <div className="text-17 fw-500 uppercase mb-25">ABOUT</div>
              <div className="d-flex y-gap-10 flex-column">
                <a href="#">About Us</a>
                <a href="#">Learner Stories</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Leadership</a>
                <a href="#">Contact Us</a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-8 col-md-8">
              <div className="text-17 fw-500 uppercase mb-25">CATEGORIES</div>
              <div className="row justify-between y-gap-20">
                <div className="col-md-6">
                  <div className="d-flex y-gap-10 flex-column">
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
                  <div className="d-flex y-gap-10 flex-column">
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

            <div className="col-xl-2 offset-xl-1 col-md-4 col-sm-6">
              <div className="text-17 fw-500 uppercase mb-25">SUPPORT</div>
              <div className="d-flex y-gap-10 flex-column">
                <a href="#">Documentation</a>
                <a href="#">FAQS</a>
                <a href="#">Dashboard</a>
                <a href="#">Contact</a>
              </div>
            </div>

            <div className="col-xl-3 ol-md-4 col-sm-6">
              <div className="text-17 fw-500 uppercase mb-25">GET IN TOUCH</div>
              <div className="footer-columns-form">
                <div>We don’t send spam so don’t worry.</div>
                <form action="post">
                  <div className="form-group">
                    <input type="text" placeholder="Email..." />
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-footer border-top-dark">
          <div className="row justify-between y-gap-20">
            <div className="col-md-6">
              <div className="footer-footer__copyright">
                © 2022 Educrat. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="footer-footer__right">
                <div className="footer-footer__list">
                  <a href="#">Help</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookie Notice</a>
                  <a href="#">Security</a>
                  <a href="#">Terms of Use</a>
                </div>

                <div className="ml-20">
                  <a
                    href="#"
                    className="button -white px-30 py-20 rounded-200 text-black"
                  >
                    English
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

export default Footer4;
