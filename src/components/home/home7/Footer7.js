import React from "react";

function Footer7() {
  return (
    <footer class="footer -type-4 bg-white border-top-light">
      <div class="container">
        <div class="row y-gap-30 justify-between pt-60">
          <div class="col-lg-7 col-md-6">
            <div class="text-17 fw-500 text-dark-1 uppercase mb-25">
              GET IN TOUCH
            </div>
            <form action="post" class="form-single-field -base mt-15">
              <input
                class="py-20 px-30 bg-light-3 rounded-200 text-dark-1"
                type="text"
                placeholder="Your Email"
              />
              <button class="button -purple-1 rounded-full" type="submit">
                <div class="icon-arrow-right text-24 text-white"></div>
              </button>
            </form>
          </div>

          <div class="col-xl-4 col-lg-5 col-md-6">
            <div class="footer-header__logo">
              <img src="assets/img/general/logo-dark.svg" alt="logo" />
            </div>

            <div class="d-flex justify-between mt-30">
              <div class="">
                <div class="">Toll Free Customer Care</div>
                <div class="text-18 lh-1 fw-500 text-dark-1 mt-5">
                  +(1) 123 456 7890
                </div>
              </div>
              <div class="">
                <div class="">Need live support?</div>
                <div class="text-18 lh-1 fw-500 text-dark-1 mt-5">
                  hi@educrat.comv
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row y-gap-30 justify-between pt-60 pb-60">
          <div class="col-lg-7 col-md-6">
            <div class="row y-gap-30">
              <div class="col-lg-4 col-md-4">
                <div class="text-17 fw-500 text-dark-1 uppercase mb-25">
                  ABOUT
                </div>
                <div class="d-flex y-gap-10 flex-column">
                  <a href="#">About Us</a>
                  <a href="#">Learner Stories</a>
                  <a href="#">Careers</a>
                  <a href="#">Press</a>
                  <a href="#">Leadership</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>

              <div class="col-lg-8 col-md-8">
                <div class="text-17 fw-500 text-dark-1 uppercase mb-25">
                  CATEGORIES
                </div>
                <div class="row justify-between y-gap-20">
                  <div class="col-md-6">
                    <div class="d-flex y-gap-10 flex-column">
                      <a href="#">Development</a>
                      <a href="#">Business</a>
                      <a href="#">Finance & Accounting</a>
                      <a href="#">IT & Software</a>
                      <a href="#">Office Productivity</a>
                      <a href="#">Design</a>
                      <a href="#">Marketing</a>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="d-flex y-gap-10 flex-column">
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

          <div class="col-xl-4 col-lg-5 col-md-6">
            <div class="">
              <div class="text-17 uppercase text-whitedark-1 fw-500">
                Take your learning with you
              </div>
              <div class="d-flex mt-15">
                <a href="#">
                  <img src="assets/img/footer/apps-2/1.png" alt="image" />
                </a>
                <a href="#" class="ml-10">
                  <img src="assets/img/footer/apps-2/2.png" alt="image" />
                </a>
              </div>
            </div>

            <div class="footer-header-socials mt-60">
              <div class="text-17 uppercase text-dark-1 fw-500">
                Follow us on social media
              </div>
              <div class="footer-header-socials__list d-flex items-center mt-15">
                <a href="#" class="size-40 d-flex justify-center items-center">
                  <i class="icon-facebook"></i>
                </a>
                <a href="#" class="size-40 d-flex justify-center items-center">
                  <i class="icon-twitter"></i>
                </a>
                <a href="#" class="size-40 d-flex justify-center items-center">
                  <i class="icon-instagram"></i>
                </a>
                <a href="#" class="size-40 d-flex justify-center items-center">
                  <i class="icon-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="py-30 border-top-light-15">
          <div class="row justify-between items-center y-gap-20">
            <div class="col-auto">
              <div class="d-flex items-center h-100">
                © 2022 Educrat. All Right Reserved.
              </div>
            </div>

            <div class="col-auto">
              <div class="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div class="d-flex x-gap-15">
                    <a href="#">Help</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Notice</a>
                    <a href="#">Security</a>
                    <a href="#">Terms of Use</a>
                  </div>
                </div>

                <div>
                  <a href="#" class="button -md -light-3 px-15 rounded-200">
                    <i class="icon-worldwide mr-10"></i>English
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

export default Footer7;
