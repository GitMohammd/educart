import React from "react";

function DescriptionInstructor() {
  return (
    <section className="page-header -type-3">
      <div className="page-header__bg bg-purple-1"></div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="page-header__content">
              <div className="page-header__img">
                <img src="/assets/img/Instructors-single/1.png" alt="image" />
              </div>

              <div className="page-header__info">
                <h1 className="text-30 lh-14 fw-700 text-white">Ali Tufan</h1>
                <div className="text-white">UX Designer</div>
                <div className="d-flex x-gap-20 pt-15">
                  <div className="d-flex items-center text-white">
                    <div className="icon-play mr-10"></div>
                    <div className="text-13 lh-1">Instructor Rating</div>
                  </div>

                  <div className="d-flex items-center text-white">
                    <div className="icon-play mr-10"></div>
                    <div className="text-13 lh-1">23,987 Reviews</div>
                  </div>

                  <div className="d-flex items-center text-white">
                    <div className="icon-play mr-10"></div>
                    <div className="text-13 lh-1">692 Students</div>
                  </div>

                  <div className="d-flex items-center text-white">
                    <div className="icon-play mr-10"></div>
                    <div className="text-13 lh-1">15 Course</div>
                  </div>
                </div>
              </div>

              <div className="d-flex items-center mt-30">
                <button className="button -md -green-1 text-dark-1">
                  Send Message
                </button>

                <div className="d-flex items-center x-gap-15 text-white ml-25">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionInstructor;
