import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedCourses6() {
  const [courses, setCourses] = useState([]);
  const [catagory, setCatagory] = useState("");

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const filterPopulerCourse = courses?.filter((popcourse) => {
    return catagory === "" ? popcourse : popcourse.popular?.includes(catagory);
  });
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container tabs -pills-2 js-tabs">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Explore Featured Courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-auto">
            <div className="tabs__controls row justify-center x-gap-10 bg-light-3 rounded-200 py-5 js-tabs-controls">
              <div onClick={() => setCatagory("")} className="col-auto">
                <button
                  className={`tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button${
                    catagory === "" ? " is-active" : " "
                  }`}
                  data-tab-target=".-tab-item-1"
                  type="button"
                >
                  All Categories
                </button>
              </div>

              <div onClick={() => setCatagory("design")} className="col-auto">
                <button
                  className={`tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button${
                    catagory === "design" ? " is-active" : " "
                  }`}
                  data-tab-target=".-tab-item-2"
                  type="button"
                >
                  Design
                </button>
              </div>

              <div
                onClick={() => setCatagory("illustration")}
                className="col-auto"
              >
                <button
                  className={`tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button${
                    catagory === "illustration" ? " is-active" : " "
                  }`}
                  data-tab-target=".-tab-item-3"
                  type="button"
                >
                  Illustration
                </button>
              </div>

              <div
                onClick={() => setCatagory("animation")}
                className="col-auto"
              >
                <button
                  className={`tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button${
                    catagory === "animation" ? " is-active" : " "
                  }`}
                  data-tab-target=".-tab-item-4"
                  type="button"
                >
                  Animation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-active">
            <div className="row y-gap-30 justify-center">
              {filterPopulerCourse.slice(0, 6).map((course) => (
                <div
                  key={course.id}
                  data-anim-child="slide-up delay-1"
                  className="col-lg-6"
                >
                  <Link
                    to={`/courseSingle1/${course.id}`}
                    className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                  >
                    <div className="coursesCard__image max-w-250 rounded-8">
                      <img
                        className="w-1/1 rounded-8"
                        src={course.img}
                        alt="image"
                      />
                    </div>

                    <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                      <div className="coursesCard__stars">
                        <img
                          src="/assets/img/coursesCards/icons/review.svg"
                          alt="review"
                        />
                      </div>
                      <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                        {course.name}
                      </div>

                      <div className="d-flex x-gap-15 items-center py-10">
                        <div className="d-flex items-center">
                          <div className="mr-10">
                            <img
                              src="/assets/img/coursesCards/icons/1.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1 text-light-1">
                            6 lesson
                          </div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="mr-10">
                            <img
                              src="/assets/img/coursesCards/icons/2.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1 text-light-1">
                            {course.time}
                          </div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="mr-10">
                            <img
                              src="/assets/img/coursesCards/icons/3.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1 text-light-1">
                            {course.lavel}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-between items-center pt-10 border-top-light">
                        <div className="d-flex items-center">
                          <img src={course.providerImg} alt="image" />
                          <div className="text-light-1 ml-10">Ali Tufan</div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="fw-500 mr-10 line-through text-light-1">
                            $179
                          </div>
                          <div className="text-18 fw-500 text-dark-1">$79</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* <div data-anim-child="slide-up delay-1" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Learn Figma - UI/UX Design Essential Training
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-2" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Python Bootcamp From Zero to Hero in Python
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-3" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Angular - The Complete Guide (2022 Edition)
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-4" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      The Ultimate Drawing Course Beginner to Advanced
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-5" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Photography Masterclass: A Complete Guide to Photography
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-6" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Blender Creator: Learn 3D Modelling for Beginners
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div> */}
            </div>
          </div>

          <div className="tabs__pane -tab-item-2 ">
            <div className="row y-gap-30 justify-center">
              <div data-anim-child="slide-up delay-1" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Learn Figma - UI/UX Design Essential Training
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-2" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Python Bootcamp From Zero to Hero in Python
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-3" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Angular - The Complete Guide (2022 Edition)
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-4" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      The Ultimate Drawing Course Beginner to Advanced
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-5" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Photography Masterclass: A Complete Guide to Photography
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-6" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Blender Creator: Learn 3D Modelling for Beginners
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="tabs__pane -tab-item-3 ">
            <div className="row y-gap-30 justify-center">
              <div data-anim-child="slide-up delay-1" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Learn Figma - UI/UX Design Essential Training
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-2" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Python Bootcamp From Zero to Hero in Python
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-3" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Angular - The Complete Guide (2022 Edition)
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-4" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      The Ultimate Drawing Course Beginner to Advanced
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-5" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Photography Masterclass: A Complete Guide to Photography
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-6" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Blender Creator: Learn 3D Modelling for Beginners
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="tabs__pane -tab-item-4 ">
            <div className="row y-gap-30 justify-center">
              <div data-anim-child="slide-up delay-1" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Learn Figma - UI/UX Design Essential Training
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-2" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/2.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Python Bootcamp From Zero to Hero in Python
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-3" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Angular - The Complete Guide (2022 Edition)
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-4" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      The Ultimate Drawing Course Beginner to Advanced
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-5" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Photography Masterclass: A Complete Guide to Photography
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div data-anim-child="slide-up delay-6" className="col-lg-6">
                <a
                  href="#"
                  className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
                >
                  <div className="coursesCard__image max-w-250 rounded-8">
                    <img
                      className="w-1/1 rounded-8"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                  </div>

                  <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
                    <div className="coursesCard__stars">
                      <img
                        src="/assets/img/coursesCards/icons/review.svg"
                        alt="review"
                      />
                    </div>
                    <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
                      Complete Blender Creator: Learn 3D Modelling for Beginners
                    </div>

                    <div className="d-flex x-gap-15 items-center py-10">
                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/1.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          6 lesson
                        </div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/2.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">3h 56m</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="mr-10">
                          <img
                            src="/assets/img/coursesCards/icons/3.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-14 lh-1 text-light-1">
                          Beginner
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center pt-10 border-top-light">
                      <div className="d-flex items-center">
                        <img
                          src="/assets/img/general/avatar-1.png"
                          alt="image"
                        />
                        <div className="text-light-1 ml-10">Ali Tufan</div>
                      </div>

                      <div className="d-flex items-center">
                        <div className="fw-500 mr-10 line-through text-light-1">
                          $179
                        </div>
                        <div className="text-18 fw-500 text-dark-1">$79</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses6;
