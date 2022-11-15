import React from "react";

function InstructionV1Content() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-20 items-center justify-between pb-30">
          <div className="col-auto">
            <div className="text-14 lh-12">
              Showing <span className="text-dark-1 fw-500">250</span> total
              results
            </div>
          </div>

          <div className="col-auto">
            <div className="row x-gap-20 y-gap-20 items-center">
              <div className="col-auto">
                <form className="search-field h-50" action="post">
                  <input
                    className="bg-light-3 pr-50"
                    type="text"
                    placeholder="Search Instructors"
                  />
                  <button className="" type="submit">
                    <div className="icon-search text-20"></div>
                  </button>
                </form>
              </div>
              <div className="col-auto">
                <div className="dropdown js-dropdown js-category-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span className="js-dropdown-title">Category</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="dropdown js-dropdown js-category-active">
                  <div
                    className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                    data-el-toggle=".js-category-toggle"
                    data-el-toggle-active=".js-category-active"
                  >
                    <span className="js-dropdown-title">Sort by: Default</span>
                    <i className="icon text-9 ml-40 icon-chevron-down"></i>
                  </div>

                  <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                    <div className="text-14 y-gap-15 js-dropdown-list">
                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Animation
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Design
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Illustration
                        </a>
                      </div>

                      <div>
                        <a href="#" className="d-block js-dropdown-link">
                          Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-2"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/1.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Floyd Miles</h4>
                <p className="teamCard__text">President of Sales</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-3"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/2.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Cameron Williamson</h4>
                <p className="teamCard__text">Web Designer</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-4"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/3.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Brooklyn Simmons</h4>
                <p className="teamCard__text">Dog Trainer</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-5"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/4.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Wade Warren</h4>
                <p className="teamCard__text">Marketing Coordinator</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-6"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/5.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Bessie Cooper</h4>
                <p className="teamCard__text">Marketing Coordinator</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-7"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/6.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Albert Flores</h4>
                <p className="teamCard__text">Dog Trainer</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-8"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/7.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Cody Fisher</h4>
                <p className="teamCard__text">Web Designer</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              data-anim-child="slide-left delay-9"
              className="teamCard -type-1"
            >
              <div className="teamCard__image">
                <img src="/assets/img/team/8.png" alt="image" />
              </div>
              <div className="teamCard__content">
                <h4 className="teamCard__title">Theresa Webb</h4>
                <p className="teamCard__text">President of Sales</p>
                <div className="teamCard-info">
                  <div className="d-flex items-center">
                    <div className="icon-star text-yellow-1 text-14"></div>
                    <div className="text-13 lh-1 ml-8">4.5</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-person-3 text-14"></div>
                    <div className="text-13 lh-1 ml-8">692 Students</div>
                  </div>

                  <div className="d-flex items-center">
                    <div className="icon-play text-14"></div>
                    <div className="text-13 lh-1 ml-8">15 Course</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <div className="pagination -buttons">
              <button className="pagination__button -prev">
                <div className="icon icon-chevron-left"></div>
              </button>

              <div className="pagination__count">
                <a href="#">1</a>
                <a className="-count-is-active" href="#">
                  2
                </a>
                <a href="#">3</a>
                <span>...</span>
                <a href="#">67</a>
              </div>

              <button className="pagination__button -next">
                <div className="icon icon-chevron-right"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructionV1Content;
