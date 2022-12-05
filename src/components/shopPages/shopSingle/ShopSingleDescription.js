import { Reviews } from "@mui/icons-material";
import React, { useState } from "react";

function ShopSingleDescription() {
  const [description, setDescription] = useState(true);
  const [review, setReview] = useState(false);

  const handleClick = (prop) => {
    if (prop === "descriptions") {
      setDescription(true);
      setReview(false);
    }
    if (prop === "reviews") {
      setReview(true);
      setDescription(false);
    }
  };
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="tabs -active-purple-1 js-tabs">
        <div className="row pt-30 border-top-dark">
          <div className="col-12">
            <div className="tabs__controls d-flex justify-center js-tabs-controls">
              <button
                onClick={() => handleClick("descriptions")}
                className={
                  description
                    ? "tabs__button js-tabs-button is-active"
                    : "tabs__button js-tabs-button"
                }
                data-tab-target=".-tab-item-1"
                type="button"
              >
                Description
              </button>
              <button
                onClick={() => handleClick("reviews")}
                className={
                  review
                    ? "tabs__button js-tabs-button ml-30 is-active"
                    : "tabs__button js-tabs-button ml-30"
                }
                data-tab-target=".-tab-item-2"
                type="button"
              >
                Reviews (2)
              </button>
            </div>
          </div>

          <div className="container pt-60">
            <div className="row justify-center">
              <div className="col-xl-8 col-lg-10 justify-center">
                <div className="tabs__content js-tabs-content">
                  <div
                    className={
                      description && !review
                        ? "tabs__pane -tab-item-1 is-active"
                        : "tabs__pane -tab-item-1 "
                    }
                  >
                    <h4 className="text-18 fw-500">
                      What makes a good brand book?
                    </h4>
                    <p className="mt-30">
                      Sed viverra ipsum nunc aliquet bibendum enim facilisis
                      gravida. Diam phasellus vestibulum lorem sed risus
                      ultricies. Magna sit amet purus gravida quis blandit. Arcu
                      cursus vitae congue mauris. Nunc mattis enim ut tellus
                      elementum sagittis vitae et leo. Semper risus in hendrerit
                      gravida rutrum quisque non. At urna condimentum mattis
                      pellentesque id nibh tortor. A erat nam at lectus urna
                      duis convallis convallis tellus. Sit amet mauris commodo
                      quis imperdiet massa. Vitae congue eu consequat ac felis.
                    </p>
                  </div>

                  <div
                    className={
                      !description && review
                        ? "tabs__pane -tab-item-2 is-active"
                        : "tabs__pane -tab-item-2 "
                    }
                  >
                    <div className="blogPost -comments">
                      <div className="blogPost__content">
                        <h2 className="text-20 fw-500">Reviews</h2>

                        <ul className="comments__list mt-30">
                          <li className="comments__item">
                            <div className="comments__item-inner md:direction-column">
                              <div className="comments__img mr-20">
                                <div
                                  className="bg-image rounded-full js-lazy"
                                  data-bg="img/avatars/1.png"
                                ></div>
                              </div>

                              <div className="comments__body md:mt-15">
                                <div className="comments__header">
                                  <h4 className="text-17 fw-500 lh-15">
                                    Ali Tufan
                                    <span className="text-13 text-light-1 fw-400">
                                      3 Days ago
                                    </span>
                                  </h4>

                                  <div className="stars"></div>
                                </div>

                                <h5 className="text-15 fw-500 mt-15">
                                  The best LMS Design
                                </h5>
                                <div className="comments__text mt-10">
                                  <p>
                                    This course is a very applicable. Professor
                                    Ng explains precisely each algorithm and
                                    even tries to give an intuition for
                                    mathematical and statistic concepts behind
                                    each algorithm. Thank you very much.
                                  </p>
                                </div>

                                <div className="comments__helpful mt-20">
                                  <span className="text-13 text-purple-1">
                                    Was this review helpful?
                                  </span>
                                  <button className="button text-13 -sm -purple-1 text-white">
                                    Yes
                                  </button>
                                  <button className="button text-13 -sm -light-7 text-purple-1">
                                    No
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li className="comments__item">
                            <div className="comments__item-inner md:direction-column">
                              <div className="comments__img mr-20">
                                <div
                                  className="bg-image rounded-full js-lazy"
                                  data-bg="img/avatars/1.png"
                                ></div>
                              </div>

                              <div className="comments__body md:mt-15">
                                <div className="comments__header">
                                  <h4 className="text-17 fw-500 lh-15">
                                    Ali Tufan
                                    <span className="text-13 text-light-1 fw-400">
                                      3 Days ago
                                    </span>
                                  </h4>

                                  <div className="stars"></div>
                                </div>

                                <h5 className="text-15 fw-500 mt-15">
                                  The best LMS Design
                                </h5>
                                <div className="comments__text mt-10">
                                  <p>
                                    This course is a very applicable. Professor
                                    Ng explains precisely each algorithm and
                                    even tries to give an intuition for
                                    mathematical and statistic concepts behind
                                    each algorithm. Thank you very much.
                                  </p>
                                </div>

                                <div className="comments__helpful mt-20">
                                  <span className="text-13 text-purple-1">
                                    Was this review helpful?
                                  </span>
                                  <button className="button text-13 -sm -purple-1 text-white">
                                    Yes
                                  </button>
                                  <button className="button text-13 -sm -light-7 text-purple-1">
                                    No
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="respondForm pt-30">
                      <h3 className="text-20 fw-500">Write a Review</h3>

                      <div className="mt-30">
                        <h4 className="text-16 fw-500">
                          What is it like to Course?
                        </h4>
                        <div className="d-flex x-gap-10 pt-10">
                          <div className="icon-star text-14 text-yellow-1"></div>
                          <div className="icon-star text-14 text-yellow-1"></div>
                          <div className="icon-star text-14 text-yellow-1"></div>
                          <div className="icon-star text-14 text-yellow-1"></div>
                          <div className="icon-star text-14 text-yellow-1"></div>
                        </div>
                      </div>

                      <form
                        className="contact-form respondForm__form row y-gap-30 pt-30"
                        action="#"
                      >
                        <div className="col-12">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="title"
                          >
                            Review Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Great Courses"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                            htmlFor="comment"
                          >
                            Review Content
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
                            Submit Review
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
      </div>
    </section>
  );
}

export default ShopSingleDescription;
