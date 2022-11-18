import React from "react";
import { Link } from "react-router-dom";

function PopulerCourseContent() {
  return (
    <div className="tabs__content pt-60 js-tabs-content">
      <div className="tabs__pane -tab-item-1 is-active">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <Link to="/courseSingle1" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-2 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-3 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-4 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-5 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-6 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-7 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs__pane -tab-item-8 ">
        <div className="row y-gap-30 justify-center">
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Learn Figma - UI/UX Design Essential Training
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-2">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                    <div>
                      <div className="px-15 rounded-200 bg-purple-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-white">
                          Popular
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="px-15 rounded-200 bg-green-1">
                        <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                          Best sellers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Python Bootcamp From Zero to Hero in Python
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Angular - The Complete Guide (2022 Edition)
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-4">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Ultimate Drawing Course Beginner to Advanced
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-5">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Photography Masterclass: A Complete Guide to Photography
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-6">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Instagram Marketing 2021: Complete Guide To Instagram Growth
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>
                    import PopulerCourseContent from "./PopulerCourseContent";
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-7">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    Complete Blender Creator: Learn 3D Modelling for Beginners
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-8">
              <a href="courses-single-1.html" className="coursesCard -type-1 ">
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
                    <div className="d-flex x-gap-5 items-center">
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                      <div className="icon-star text-9 text-yellow-1"></div>
                    </div>
                    <div className="text-13 lh-1 ml-10">(1991)</div>
                  </div>

                  <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                    The Complete Financial Analyst Training &amp; Investing
                    Course
                  </div>

                  <div className="d-flex x-gap-10 items-center pt-10">
                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/1.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">6 lesson</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/2.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">3h 56m</div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="mr-8">
                        <img
                          src="/assets/img/coursesCards/icons/3.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-14 lh-1">Beginner</div>
                    </div>
                  </div>

                  <div className="coursesCard-footer">
                    <div className="coursesCard-footer__author">
                      <img src="/assets/img/general/avatar-1.png" alt="image" />
                      <div>Ali Tufan</div>
                    </div>

                    <div className="coursesCard-footer__price">
                      <div>$179</div>
                      <div>$79</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulerCourseContent;
