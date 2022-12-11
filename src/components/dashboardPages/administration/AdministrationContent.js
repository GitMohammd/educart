import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function AdministrationContent() {
  const [isLeftBar, setLeftBarOpen] = useOutletContext();
  return (
    <div
      className={
        isLeftBar
          ? "dashboard -home-9 js-dashboard-home-9 "
          : "dashboard -home-9 js-dashboard-home-9 -is-sidebar-hidden"
      }
    >
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Site Administration</h1>

              <div className="breadcrumbs mt-10 pt-0 pb-0">
                <div className="breadcrumbs__content">
                  <div className="breadcrumbs__item">
                    <a href="#">Home</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="#">All courses</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="#">User Experience Design</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="#">User Interface</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="tabs -active-purple-2 js-tabs pt-0">
                  <div className="tabs__controls d-flex x-gap-30 flex-wrap items-center pt-20 px-20 border-bottom-light js-tabs-controls">
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button is-active"
                        data-tab-target=".-tab-item-1"
                        type="button"
                      >
                        Site administration
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-2"
                        type="button"
                      >
                        Users
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-3"
                        type="button"
                      >
                        Courses
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-4"
                        type="button"
                      >
                        Grades
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-5"
                        type="button"
                      >
                        Plugins
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-6"
                        type="button"
                      >
                        Appearance
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-7"
                        type="button"
                      >
                        Server
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-8"
                        type="button"
                      >
                        Reports
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="tabs__button text-light-1 js-tabs-button"
                        data-tab-target=".-tab-item-9"
                        type="button"
                      >
                        Development
                      </button>
                    </div>
                  </div>

                  <div className="tabs__content py-40 px-30 js-tabs-content">
                    <div className="tabs__pane -tab-item-1 is-active">
                      <div className="row y-gap-50 x-gap-50">
                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <h4 className="text-18 lh-12 fw-500">Analytics</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            <div>Site information</div>

                            <div>Analytics settings</div>

                            <div>Analytics models</div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <h4 className="text-18 lh-12 fw-500">Competencies</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            <div>Competencies settings</div>

                            <div>Migrate frameworks</div>

                            <div>Import competency framework</div>

                            <div>Export competency framework</div>

                            <div>Competency frameworks</div>

                            <div>Learning plan templates</div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <h4 className="text-18 lh-12 fw-500">Badges</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            <div>Badges settings</div>

                            <div>Manage badges</div>

                            <div>Add a new badge</div>

                            <div>Backpack settings</div>

                            <div>Manage backpacks</div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <div>
                            <h4 className="text-18 lh-12 fw-500">Badges</h4>
                            <div className="d-flex y-gap-10 flex-column pt-15">
                              <div>Manage H5P content types</div>
                            </div>
                          </div>

                          <div className="mt-40">
                            <h4 className="text-18 lh-12 fw-500">Location</h4>
                            <div className="d-flex y-gap-10 flex-column pt-15">
                              <div>Location settings</div>
                            </div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <h4 className="text-18 lh-12 fw-500">Language</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            <div>Language settings</div>

                            <div>Language customisation</div>

                            <div>Language packs</div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <h4 className="text-18 lh-12 fw-500">Messaging</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            <div>Messaging settings</div>

                            <div>Notification settings</div>

                            <div>Jabber</div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <h4 className="text-18 lh-12 fw-500">Security</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            <div>IP blocker</div>

                            <div>Site security settings</div>

                            <div>HTTP security</div>

                            <div>Notifications</div>
                          </div>
                        </div>

                        <div className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1">
                          <div>
                            <h4 className="text-18 lh-12 fw-500">Front page</h4>
                            <div className="d-flex y-gap-10 flex-column pt-15">
                              <div>Front page settings</div>
                            </div>
                          </div>

                          <div className="mt-40">
                            <h4 className="text-18 lh-12 fw-500">Mobile app</h4>
                            <div className="d-flex y-gap-10 flex-column pt-15">
                              <div>Mobile settings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer -dashboard py-30">
          <div className="row items-center justify-between">
            <div className="col-auto">
              <div className="text-13 lh-1">
                © 2022 Educrat. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex items-center flex-wrap x-gap-20">
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Help
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Cookie Notice
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Security
                    </a>
                  </div>
                  <div>
                    <a href="#" className="text-13 lh-1">
                      Terms of Use
                    </a>
                  </div>
                </div>

                <button className="button -md -rounded bg-light-4 text-light-1 ml-30">
                  English
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AdministrationContent;
