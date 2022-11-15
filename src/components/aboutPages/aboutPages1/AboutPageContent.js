import React from "react";

function AboutPageContent() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50 justify-between items-center">
          <div className="col-lg-6 pr-50 sm:pr-15">
            <div className="composition -type-8">
              <div className="-el-1">
                <img src="/assets/img/about-1/1.png" alt="image" />
              </div>
              <div className="-el-2">
                <img src="/assets/img/about-1/2.png" alt="image" />
              </div>
              <div className="-el-3">
                <img src="/assets/img/about-1/3.png" alt="image" />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <h2 className="text-30 lh-16">
              Welcome to Educrat Enhance your skills with best Online courses
            </h2>
            <p className="text-dark-1 mt-30">
              You can start and finish one of these popular courses in under a
              day – for free! Check out the list below.. Take the course for
              free
            </p>
            <p className="pr-50 lg:pr-0 mt-25">
              Neque convallis a cras semper auctor. Libero id faucibus nisl
              tincidunt egetnvallis a cras semper auctonvallis a cras semper
              aucto. Neque convallis a cras semper auctor. Liberoe convallis a
              cras semper atincidunt egetnval
            </p>
            <div className="d-inline-block">
              <a href="#" className="button -md -purple-1 text-white mt-30">
                Start Learning For Free{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPageContent;
