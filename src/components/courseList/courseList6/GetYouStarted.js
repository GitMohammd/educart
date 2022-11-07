import React from "react";

function GetYouStarted() {
  return (
    <section class="layout-pt-md layout-pb-md">
      <div data-anim-wrap class="container">
        <div class="tabs -pills js-tabs">
          <div class="row y-gap-20 justify-between items-center">
            <div class="col-auto">
              <h2 data-anim-child="slide-up delay-1" class="text-24 lh-12">
                Courses to get you started
              </h2>
            </div>

            <div class="col-auto">
              <div class="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
                <div>
                  <button
                    class="tabs__button px-20 py-8 rounded-8 js-tabs-button is-active"
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    All
                  </button>
                </div>

                <div>
                  <button
                    class="tabs__button px-20 py-8 rounded-8 js-tabs-button "
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Trending
                  </button>
                </div>

                <div>
                  <button
                    class="tabs__button px-20 py-8 rounded-8 js-tabs-button "
                    data-tab-target=".-tab-item-3"
                    type="button"
                  >
                    Popular
                  </button>
                </div>

                <div>
                  <button
                    class="tabs__button px-20 py-8 rounded-8 js-tabs-button "
                    data-tab-target=".-tab-item-4"
                    type="button"
                  >
                    Fetured
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="tabs__content pt-60 lg:pt-50 js-tabs-content">
            <div class="tabs__pane -tab-item-1 is-active">
              <div
                class="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/1.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Learn Figma - UI/UX Design Essential Training
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/2.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                            <div>
                              <div class="px-15 rounded-200 bg-purple-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-white">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <div>
                              <div class="px-15 rounded-200 bg-green-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-dark-1">
                                  Best sellers
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Python Bootcamp From Zero to Hero in Python
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/3.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Angular - The Complete Guide (2022 Edition)
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/4.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Ultimate Drawing Course Beginner to Advanced
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/5.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Photography Masterclass: A Complete Guide to
                            Photography
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/6.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/7.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/8.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Complete Financial Analyst Training &amp;
                            Investing Course
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <button class="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i class="icon icon-arrow-left text-24"></i>
                </button>

                <button class="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i class="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>

            <div class="tabs__pane -tab-item-2 ">
              <div
                class="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/1.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Learn Figma - UI/UX Design Essential Training
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/2.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                            <div>
                              <div class="px-15 rounded-200 bg-purple-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-white">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <div>
                              <div class="px-15 rounded-200 bg-green-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-dark-1">
                                  Best sellers
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Python Bootcamp From Zero to Hero in Python
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/3.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Angular - The Complete Guide (2022 Edition)
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/4.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Ultimate Drawing Course Beginner to Advanced
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/5.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Photography Masterclass: A Complete Guide to
                            Photography
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/6.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/7.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/8.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Complete Financial Analyst Training &amp;
                            Investing Course
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <button class="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i class="icon icon-arrow-left text-24"></i>
                </button>

                <button class="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i class="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>

            <div class="tabs__pane -tab-item-3 ">
              <div
                class="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/1.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Learn Figma - UI/UX Design Essential Training
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/2.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                            <div>
                              <div class="px-15 rounded-200 bg-purple-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-white">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <div>
                              <div class="px-15 rounded-200 bg-green-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-dark-1">
                                  Best sellers
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Python Bootcamp From Zero to Hero in Python
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/3.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Angular - The Complete Guide (2022 Edition)
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/4.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Ultimate Drawing Course Beginner to Advanced
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/5.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Photography Masterclass: A Complete Guide to
                            Photography
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/6.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/7.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/8.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Complete Financial Analyst Training &amp;
                            Investing Course
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <button class="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i class="icon icon-arrow-left text-24"></i>
                </button>

                <button class="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i class="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>

            <div class="tabs__pane -tab-item-4 ">
              <div
                class="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-1">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/1.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Learn Figma - UI/UX Design Essential Training
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-2">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/2.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                            <div>
                              <div class="px-15 rounded-200 bg-purple-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-white">
                                  Popular
                                </span>
                              </div>
                            </div>

                            <div>
                              <div class="px-15 rounded-200 bg-green-1">
                                <span class="text-11 lh-1 uppercase fw-500 text-dark-1">
                                  Best sellers
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Python Bootcamp From Zero to Hero in Python
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-3">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/3.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Angular - The Complete Guide (2022 Edition)
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-4">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/4.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Ultimate Drawing Course Beginner to Advanced
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-5">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/5.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Photography Masterclass: A Complete Guide to
                            Photography
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-6">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/6.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Instagram Marketing 2021: Complete Guide To
                            Instagram
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-7">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/7.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            Complete Blender Creator: Learn 3D Modelling for
                            Beginners
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div data-anim-child="slide-up delay-8">
                      <a
                        href="courses-single-1.html"
                        class="coursesCard -type-1 "
                      >
                        <div class="relative">
                          <div class="coursesCard__image overflow-hidden rounded-8">
                            <img
                              class="w-1/1"
                              src="assets/img/coursesCards/8.png"
                              alt="image"
                            />
                            <div class="coursesCard__image_overlay rounded-8"></div>
                          </div>
                          <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>

                        <div class="h-100 pt-15">
                          <div class="d-flex items-center">
                            <div class="text-14 lh-1 text-yellow-1 mr-10">
                              4.5
                            </div>
                            <div class="d-flex x-gap-5 items-center">
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                              <div class="icon-star text-9 text-yellow-1"></div>
                            </div>
                            <div class="text-13 lh-1 ml-10">(1991)</div>
                          </div>

                          <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
                            The Complete Financial Analyst Training &amp;
                            Investing Course
                          </div>

                          <div class="d-flex x-gap-10 items-center pt-10">
                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/1.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">6 lesson</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/2.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">3h 56m</div>
                            </div>

                            <div class="d-flex items-center">
                              <div class="mr-8">
                                <img
                                  src="assets/img/coursesCards/icons/3.svg"
                                  alt="icon"
                                />
                              </div>
                              <div class="text-14 lh-1">Beginner</div>
                            </div>
                          </div>

                          <div class="coursesCard-footer">
                            <div class="coursesCard-footer__author">
                              <img
                                src="assets/img/general/avatar-1.png"
                                alt="image"
                              />
                              <div>Ali Tufan</div>
                            </div>

                            <div class="coursesCard-footer__price">
                              <div>$179</div>
                              <div>$79</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <button class="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev">
                  <i class="icon icon-arrow-left text-24"></i>
                </button>

                <button class="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next">
                  <i class="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetYouStarted;
