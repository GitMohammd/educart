import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterCourses from "./FilterCourses";

function PopulerCourses2() {
  const [courses, setCourses] = useState([]);
  // const [filterCourses, setFilterCourses] = useState([]);
  // console.log(filterCourses, "filterCourses");

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const [value, setValue] = useState("");
  const [cataValue, setCataValue] = useState("");
  const [ratvalue, setRatValue] = useState("");
  const [diffvalue, setDiffValue] = useState("");
  console.log(typeof ratvalue, ratvalue);

  const newCourse = courses
    ?.filter((catacourse) => {
      return cataValue === ""
        ? catacourse
        : catacourse.popular?.includes(cataValue);
    })
    .filter((ratcourse) => {
      return ratvalue === ""
        ? ratcourse
        : ratcourse.populerCourseRating?.includes(ratvalue);
    })
    .filter((diffcourse) => {
      return diffvalue === ""
        ? diffcourse
        : diffcourse.difficulty?.includes(diffvalue);
    })
    .map((course) => {
      return course;
    });

  // const filterCourses = console.log(typeof newCourse, "newCourse");
  const handleCatChange = (event) => {
    setCataValue(event.target.value);
  };
  const handleRatChange = (event) => {
    setRatValue(event.target.value);
  };

  const handleDiffChange = (event) => {
    setDiffValue(event.target.value);
  };

  const filteredCourse =
    newCourse.length > 7 ? newCourse.slice(0, 8) : newCourse;

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle">
              <h2 className="sectionTitle__title">Our Most Popular Courses</h2>

              <p className="sectionTitle__text">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div className="col-lg-auto">
            <div className="d-flex items-center">
              <div className="text-dark-1">Filter By:</div>

              <div className="d-flex x-gap-20 items-center pl-15">
                <div>
                  <div className="dropdown js-dropdown js-drop1-active">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl
                        fullWidth
                        className="dropdown__button text-14"
                        style={{ height: "100%" }}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Category
                        </InputLabel>
                        <Select
                          // className="-dark-bg-dark-2 -dark-border-white-10"
                          style={{ color: "black" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={cataValue}
                          label="Category"
                          onChange={handleCatChange}
                        >
                          <MenuItem value={""}>None</MenuItem>
                          <MenuItem value={"design"}>Design</MenuItem>
                          <MenuItem value={"illustration"}>
                            Illustration
                          </MenuItem>
                          <MenuItem value={"lifestyle"}>Lifestyle</MenuItem>
                          <MenuItem value={"business"}>Business</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div>
                  <div className="dropdown js-dropdown js-drop2-active">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl
                        fullWidth
                        className="dropdown__button text-14"
                        style={{ height: "100%" }}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Rating
                        </InputLabel>
                        <Select
                          className="-dark-bg-dark-2 -dark-border-white-10"
                          style={{ color: "black" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={ratvalue}
                          label="Rating"
                          onChange={handleRatChange}
                        >
                          <MenuItem value={""}>None</MenuItem>
                          <MenuItem value={"great"}>Great</MenuItem>
                          <MenuItem value={"good"}>Good</MenuItem>
                          <MenuItem value={"medium"}>Medium</MenuItem>
                          <MenuItem value={"low"}>Low</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    {/*

                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop2-toggle">
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Great
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Good
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Medium
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Low
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div>
                  <div className="dropdown js-dropdown js-drop3-active">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl
                        fullWidth
                        className="dropdown__button text-14"
                        style={{ height: "100%" }}
                      >
                        <InputLabel id="demo-simple-select-label">
                          Difficulty
                        </InputLabel>
                        <Select
                          className="-dark-bg-dark-2 -dark-border-white-10"
                          style={{ color: "black" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={diffvalue}
                          label="Difficulty"
                          onChange={handleDiffChange}
                        >
                          <MenuItem value={""}>None</MenuItem>
                          <MenuItem value={"easy"}>Easy</MenuItem>
                          <MenuItem value={"medium"}>Medium</MenuItem>
                          <MenuItem value={"hard"}>Hard</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-center pt-50">
          {/* <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-1">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/1.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
          </div> */}

          {filteredCourse?.map((course) => (
            <FilterCourses key={course.id} course={course} />
          ))}

          {/*
          <div className="col-lg-3 col-md-6">
            <div data-anim-child="slide-up delay-3">
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/3.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/4.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/5.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/6.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
                    Instagram Marketing 2021: Complete Guide To Instagram
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
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/7.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
              <a
                href="courses-single-1.html"
                className="coursesCard -type-1 -hover-shadow border-light rounded-8"
              >
                <div className="relative">
                  <div className="coursesCard__image overflow-hidden rounded-top-8">
                    <img
                      className="w-1/1"
                      src="/assets/img/coursesCards/8.png"
                      alt="image"
                    />
                    <div className="coursesCard__image_overlay rounded-top-8"></div>
                  </div>
                  <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                </div>

                <div className="h-100 pt-15 pb-10 px-20">
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
          </div> */}
        </div>

        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <a href="#" className="button -md -outline-purple-1 text-purple-1">
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopulerCourses2;
