import React from "react";

function ContentMain() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50 justify-between">
          <div className="col-lg-4">
            <h3 className="text-24 fw-500">Keep In Touch With Us.</h3>
            <p className="mt-25">
              Neque convallis a cras semper auctor. Libero id faucibus nisl
              tincidunt egetnvallis.
            </p>

            <div className="y-gap-30 pt-60 lg:pt-40">
              <div className="d-flex items-center">
                <div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                  <img src="assets/img/contact-1/1.svg" alt="icon" />
                </div>
                <div className="ml-20">
                  328 Queensberry Street, North
                  <br /> Melbourne VIC 3051, Australia.
                </div>
              </div>

              <div className="d-flex items-center">
                <div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                  <img src="assets/img/contact-1/2.svg" alt="icon" />
                </div>
                <div className="ml-20">+(1) 123 456 7890</div>
              </div>

              <div className="d-flex items-center">
                <div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
                  <img src="assets/img/contact-1/3.svg" alt="icon" />
                </div>
                <div className="ml-20">hi@educrat.com</div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="text-24 fw-500">Send a Message.</h3>
            <p className="mt-25">
              Neque convallis a cras semper auctor. Libero id faucibus nisl
              <br /> tincidunt egetnvallis.
            </p>

            <form
              className="contact-form row y-gap-30 pt-60 lg:pt-40"
              action="#"
            >
              <div className="col-md-6">
                <label
                  className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  for="title"
                >
                  Name
                </label>
                <input type="text" name="title" placeholder="Name..." />
              </div>
              <div className="col-md-6">
                <label
                  className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  for="title"
                >
                  Email Address
                </label>
                <input type="text" name="title" placeholder="Email..." />
              </div>
              <div className="col-12">
                <label
                  className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  for="comment"
                >
                  Message...
                </label>
                <textarea
                  name="comment"
                  placeholder="Message"
                  rows="8"
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="button -md -purple-1 text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentMain;
