import React from "react";

function SettingsContent() {
  return (
    <div className="">
      <div className="dashboard__main">
        <div className="dashboard__content bg-light-4">
          <div className="row pb-50 mb-10">
            <div className="col-auto">
              <h1 className="text-30 lh-12 fw-700">Settings</h1>
              <div className="mt-10">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            <div className="col-12">
              <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                <div className="tabs -active-purple-2 js-tabs pt-0">
                  <div className="tabs__controls d-flex x-gap-30 items-center pt-20 px-30 border-bottom-light js-tabs-controls">
                    <button
                      className="tabs__button text-light-1 js-tabs-button is-active"
                      data-tab-target=".-tab-item-1"
                      type="button"
                    >
                      Edit Profile
                    </button>
                    <button
                      className="tabs__button text-light-1 js-tabs-button"
                      data-tab-target=".-tab-item-2"
                      type="button"
                    >
                      Password
                    </button>
                    <button
                      className="tabs__button text-light-1 js-tabs-button"
                      data-tab-target=".-tab-item-3"
                      type="button"
                    >
                      Social Profiles
                    </button>
                    <button
                      className="tabs__button text-light-1 js-tabs-button"
                      data-tab-target=".-tab-item-4"
                      type="button"
                    >
                      Notifications
                    </button>
                    <button
                      className="tabs__button text-light-1 js-tabs-button"
                      data-tab-target=".-tab-item-5"
                      type="button"
                    >
                      Close Account
                    </button>
                  </div>

                  <div className="tabs__content py-30 px-30 js-tabs-content">
                    <div className="tabs__pane -tab-item-1 is-active">
                      <div className="row y-gap-20 x-gap-20 items-center">
                        <div className="col-auto">
                          <img
                            className="size-100"
                            src="/assets/img/dashboard/edit/1.png"
                            alt="image"
                          />
                        </div>

                        <div className="col-auto">
                          <div className="text-16 fw-500 text-dark-1">
                            Your avatar
                          </div>
                          <div className="text-14 lh-1 mt-10">
                            PNG or JPG no bigger than 800px wide and tall.
                          </div>

                          <div className="d-flex x-gap-10 y-gap-10 flex-wrap pt-15">
                            <div>
                              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                                <div className="icon-cloud text-16"></div>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex justify-center items-center size-40 rounded-8 bg-light-3">
                                <div className="icon-bin text-16"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-top-light pt-30 mt-30">
                        <form action="#" className="contact-form row y-gap-30">
                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              First Name
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="First Name"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Last Name
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="Last Name"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Phone
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="Phone"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Birthday
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="Birthday"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Address Line 1
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="Address Line 1"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Address Line 2
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="Address Line 2"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              State
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="State"
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Country
                            </label>

                            <input
                              type="text"
                              name="name"
                              placeholder="Country"
                            />
                          </div>

                          <div className="col-12">
                            <label
                              className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                              htmlFor="name"
                            >
                              Personal info
                            </label>

                            <textarea
                              name="name"
                              placeholder="Text..."
                              rows="7"
                            ></textarea>
                          </div>

                          <div className="col-12">
                            <button className="button -md -purple-1 text-white">
                              Update Profile
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="tabs__pane -tab-item-2">
                      <form action="#" className="contact-form row y-gap-30">
                        <div className="col-md-7">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            Current password
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="Current password"
                          />
                        </div>

                        <div className="col-md-7">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            New password
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="New password"
                          />
                        </div>

                        <div className="col-md-7">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            Confirm New Password
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="Confirm New Password"
                          />
                        </div>

                        <div className="col-12">
                          <button className="button -md -purple-1 text-white">
                            Save Password
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="tabs__pane -tab-item-3">
                      <form action="#" className="contact-form row y-gap-30">
                        <div className="col-md-6">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            Twitter
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="Twitter Profile"
                          />
                        </div>

                        <div className="col-md-6">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            Facebook
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="Facebook Profile"
                          />
                        </div>

                        <div className="col-md-6">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            Instagram
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="Instagram Profile"
                          />
                        </div>

                        <div className="col-md-6">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            LinkedIn Profile URL
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="LinkedIn Profile"
                          />
                        </div>

                        <div className="col-12">
                          <button className="button -md -purple-1 text-white">
                            Save Social Profile
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="tabs__pane -tab-item-4">
                      <form action="#" className="contact-form">
                        <div className="row">
                          <div className="col-12">
                            <div className="text-16 fw-500 text-dark-1">
                              Notifications - Choose when and how to be notified
                            </div>
                            <p className="text-14 lh-13 mt-5">
                              Select push and email notifications you'd like to
                              receive
                            </p>
                          </div>
                        </div>

                        <div className="pt-60">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">
                                Choose when and how to be notified
                              </div>
                            </div>
                          </div>

                          <div className="pt-30">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Subscriptions
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-top-light pt-20 mt-20">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Recommended Courses
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-top-light pt-20 mt-20">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Replies to my comments
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-top-light pt-20 mt-20">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Activity on my comments
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-60">
                          <div className="row y-gap-20 justify-between">
                            <div className="col-auto">
                              <div className="text-16 fw-500 text-dark-1">
                                Email notifications
                              </div>
                            </div>
                          </div>

                          <div className="pt-30">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Send me emails about my Cursus activity and
                                  updates I requested
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-top-light pt-20 mt-20">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Promotions, course recommendations, and
                                  helpful resources from Cursus.
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-top-light pt-20 mt-20">
                            <div className="row y-gap-20 justify-between">
                              <div className="col-auto">
                                <div className="text-16 fw-500 text-dark-1">
                                  Announcements from instructors whose course(s)
                                  I’m enrolled in.
                                </div>
                                <p className="text-14 lh-13 mt-5">
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="col-auto">
                                <div className="form-switch">
                                  <div
                                    className="switch"
                                    data-switch=".js-switch-content"
                                  >
                                    <input type="checkbox" />
                                    <span className="switch__slider"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row pt-30">
                          <div className="col-12">
                            <button className="button -md -purple-1 text-white">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="tabs__pane -tab-item-5">
                      <form action="#" className="contact-form row y-gap-30">
                        <div className="col-12">
                          <div className="text-16 fw-500 text-dark-1">
                            Close account
                          </div>
                          <p className="mt-10">
                            Warning: If you close your account, you will be
                            unsubscribed from all your 5 courses, and will lose
                            access forever.
                          </p>
                        </div>

                        <div className="col-md-7">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="name"
                          >
                            Enter Password
                          </label>

                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="col-12">
                          <button className="button -md -purple-1 text-white">
                            Close Account
                          </button>
                        </div>
                      </form>
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

export default SettingsContent;
