import React from "react";

function HelpCenterContent() {
  return (
    <section className="layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-6 col-lg-8">
            <form className="form-single-field -help" action="post">
              <input
                type="text"
                placeholder="Enter a question, topic or keyword"
              />
              <button className="button -purple-1 text-white" type="submit">
                <div className="icon-search text-20 mr-15"></div>
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="row y-gap-30 justify-between pt-90 lg:pt-50">
          <div className="col-lg-4 col-md-6">
            <div className="py-40 px-45 rounded-16 bg-light-4">
              <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                <img src="/assets/img/help-center/1.svg" alt="icon" />
              </div>
              <h4 className="text-20 lh-11 fw-500 mt-25">Getting Started</h4>
              <p className="mt-10">
                Lorem ipsum is placeholder text commonly used in site.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="py-40 px-45 rounded-16 bg-light-4">
              <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                <img src="/assets/img/help-center/2.svg" alt="icon" />
              </div>
              <h4 className="text-20 lh-11 fw-500 mt-25">Account / Profile</h4>
              <p className="mt-10">
                Lorem ipsum is placeholder text commonly used in site.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="py-40 px-45 rounded-16 bg-light-4">
              <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                <img src="/assets/img/help-center/3.svg" alt="icon" />
              </div>
              <h4 className="text-20 lh-11 fw-500 mt-25">Troubleshooting</h4>
              <p className="mt-10">
                Lorem ipsum is placeholder text commonly used in site.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="py-40 px-45 rounded-16 bg-light-4">
              <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                <img src="/assets/img/help-center/4.svg" alt="icon" />
              </div>
              <h4 className="text-20 lh-11 fw-500 mt-25">Purchase / Refunds</h4>
              <p className="mt-10">
                Lorem ipsum is placeholder text commonly used in site.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="py-40 px-45 rounded-16 bg-light-4">
              <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                <img src="/assets/img/help-center/5.svg" alt="icon" />
              </div>
              <h4 className="text-20 lh-11 fw-500 mt-25">Course Taking</h4>
              <p className="mt-10">
                Lorem ipsum is placeholder text commonly used in site.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="py-40 px-45 rounded-16 bg-light-4">
              <div className="d-flex justify-center items-center size-70 rounded-full bg-white">
                <img src="/assets/img/help-center/6.svg" alt="icon" />
              </div>
              <h4 className="text-20 lh-11 fw-500 mt-25">Mobile General</h4>
              <p className="mt-10">
                Lorem ipsum is placeholder text commonly used in site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCenterContent;
