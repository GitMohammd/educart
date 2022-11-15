import React from "react";

function ExpertInstruction() {
  return (
    <section className="layout-pt-sm layout-pb-sm border-bottom-light">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-xl-3 col-md-6">
            <div className="d-flex items-center">
              <div className="mr-20">
                <img src="/assets/img/home-3/masthead/icons/1.svg" alt="icon" />
              </div>

              <div>
                <h4 className="text-20 fw-500">100,000 online courses</h4>
                <div className="text-dark-1">
                  Explore a variety of fresh topics
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="d-flex items-center">
              <div className="mr-20">
                <img src="/assets/img/home-3/masthead/icons/2.svg" alt="icon" />
              </div>

              <div>
                <h4 className="text-20 fw-500">Expert instruction</h4>
                <div className="text-dark-1">
                  Find the right instructor for you
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="d-flex items-center">
              <div className="mr-20">
                <img src="/assets/img/home-3/masthead/icons/3.svg" alt="icon" />
              </div>

              <div>
                <h4 className="text-20 fw-500">Lifetime access</h4>
                <div className="text-dark-1">Learn on your schedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertInstruction;
