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

          <div class="col-lg-auto">
            <div class="d-flex items-center">
              <div class="text-dark-1">Filter By:</div>

              <div class="d-flex x-gap-20 items-center pl-15">
                <div>
                  <div class="dropdown js-dropdown js-drop1-active">
                    <div
                      class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                      data-el-toggle=".js-drop1-toggle"
                      data-el-toggle-active=".js-drop1-active"
                    >
                      <span class="js-dropdown-title">Category</span>
                      <i class="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle">
                      <div class="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Animation
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Illustration
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Lifestyle
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Business
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dropdown js-dropdown js-drop2-active">
                    <div
                      class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                      data-el-toggle=".js-drop2-toggle"
                      data-el-toggle-active=".js-drop2-active"
                    >
                      <span class="js-dropdown-title">Rating</span>
                      <i class="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop2-toggle">
                      <div class="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Great
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Good
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Medium
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Low
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="dropdown js-dropdown js-drop3-active">
                    <div
                      class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                      data-el-toggle=".js-drop3-toggle"
                      data-el-toggle-active=".js-drop3-active"
                    >
                      <span class="js-dropdown-title">Diffiulty</span>
                      <i class="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle">
                      <div class="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Hard
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Meduium
                          </a>
                        </div>

                        <div>
                          <a href="#" class="d-block js-dropdown-link">
                            Easy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
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
          </div> */}
        </div>

        <div className="row y-gap-30 justify-center pt-50">
          {filteredCourse?.map((course) => (
            <FilterCourses key={course.id} course={course} />
          ))}
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
