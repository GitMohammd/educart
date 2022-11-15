import React from "react";

function LearnNewSkill6() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
            <h3 className="text-45 md:text-30 lh-12">
              <span className="text-purple-1">Learn</span> new skills when
              <br className="lg:d-none" /> and where you like.
            </h3>
            <p className="mt-20">
              Use the list below to bring attention to your product’s key
              <br className="lg:d-none" /> differentiator.
            </p>
            <div className="d-inline-block mt-30">
              <a href="#" className="button -md -dark-1 text-white">
                Join Free
              </a>
            </div>
          </div>

          <div className="col-lg-6 lg:order-1">
            <div className="composition -type-3">
              <div className="-el-1">
                <div className="bg-dark-1 py-50 px-30 rounded-8">
                  <div className="y-gap-20 pt-25">
                    <div className="d-flex items-center">
                      <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                        <i
                          className="text-white size-12"
                          data-feather="check"
                        ></i>
                      </div>
                      <div className="fw-500 text-white">
                        Hand-picked authors
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                        <i
                          className="text-white size-12"
                          data-feather="check"
                        ></i>
                      </div>
                      <div className="fw-500 text-white">
                        Easy to follow curriculum
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                        <i
                          className="text-white size-12"
                          data-feather="check"
                        ></i>
                      </div>
                      <div className="fw-500 text-white">Free courses</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                        <i
                          className="text-white size-12"
                          data-feather="check"
                        ></i>
                      </div>
                      <div className="fw-500 text-white">
                        Money-back guarantee
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-el-2">
                <img
                  className="w-1/1"
                  src="/assets/img/home-6/learn/1.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnNewSkill6;
