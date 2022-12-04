import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function Footer() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [involveEmail, setInvolveEmail] = useState("");
  console.log(involveEmail.email.length, snackbarOpen);
  const { vertical, horizontal, open } = snackbarOpen;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    (await data.email.length) ? setSnackbarOpen(true) : setSnackbarOpen(false);

    (await data.email.length) ? setInvolveEmail(data) : setInvolveEmail(data);
  };

  const handleClick = () => {
    // involveEmail.email.length ? setSnackbarOpen(true) : setSnackbarOpen(false);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <footer className="footer -type-1 bg-dark-1 -green-links">
      <div className="container">
        <div className="footer-header">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
                <img src="/assets/img/footer/footer-logo.svg" alt="logo" />
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-white">
                  Follow us on social media
                </div>
                <div className="footer-header-socials__list">
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="icon-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-columns">
          <div className="row y-gap-30">
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                ABOUT
              </div>
              <div className="d-flex y-gap-10 flex-column">
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

            <div className="col-xl-2 offset-xl-1 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                SUPPORT
              </div>
              <div className="d-flex y-gap-10 flex-column">
                <a href="#">Documentation</a>
                <a href="#">FAQS</a>
                <a href="#">Dashboard</a>
                <a href="#">Contact</a>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                GET IN TOUCH
              </div>
              <div className="footer-columns-form">
                <div>We don’t send spam so don’t worry.</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input type="email" {...register("email")} />
                    <button onClick={handleClick} type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <Snackbar
                autoHideDuration={4000}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                message="I love snacks"
                key={"bottom" + "center"}
              >
                <Alert
                  onClose={handleSnackbarClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  This is a success message!
                </Alert>
              </Snackbar>
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

export default Footer;
