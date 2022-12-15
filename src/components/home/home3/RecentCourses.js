import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterCourses from "../home2/FilterCourses";
import useClickOutside from "../../Hooks/useClickOutside";

function RecentCourses() {
  const [courses, setCourses] = useState([]);
  const [isViewFilterOpen, setViewFilterOpen] = useState(false);

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const [ratvalue, setRatValue] = useState("");
  // const handleRatChange = (event) => {
  //   setRatValue(event.target.value);
  // };
  const newCourse = courses
    ?.filter((ratcourse) => {
      return ratvalue === ""
        ? ratcourse
        : ratcourse.populerCourseRating?.includes(ratvalue);
    })
    .map((course) => {
      return course;
    });

  let domNode = useClickOutside(() => {
    setViewFilterOpen(false);
  });

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div ref={domNode} data-anim-wrap className="container">
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Recent courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

          <div class="col-lg-auto">
            <div class="d-inline-block">
              <div
                style={{}}
                onClick={() =>
                  setViewFilterOpen((isViewFilterOpen) => !isViewFilterOpen)
                }
                class=" dropdown js-dropdown js-category-active"
              >
                <div
                  style={{
                    width: "200px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  class="dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1"
                  data-el-toggle=".js-category-toggle"
                  data-el-toggle-active=".js-category-active"
                >
                  <span class="js-dropdown-title">
                    {ratvalue === ""
                      ? "Popular Most Viwed"
                      : ratvalue.charAt(0).toUpperCase() + ratvalue.slice(1)}
                  </span>
                  <span className="">
                    {isViewFilterOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </span>

                  {/* <ArrowDropDownIcon /> */}
                  {/* <i class="icon text-9 ml-40 icon-chevron-down"></i> */}
                </div>

                <div
                  className={
                    isViewFilterOpen
                      ? "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle -is-el-visible"
                      : "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle "
                  }
                >
                  <div class="text-14 y-gap-15 js-dropdown-list">
                    <div onClick={() => setRatValue("")}>
                      <button class="d-block js-dropdown-link">none</button>
                    </div>
                    <div onClick={() => setRatValue("great")}>
                      <button class="d-block js-dropdown-link">Great</button>
                    </div>

                    <div onClick={() => setRatValue("good")}>
                      <button class="d-block js-dropdown-link">Good</button>
                    </div>

                    <div onClick={() => setRatValue("medium")}>
                      <button class="d-block js-dropdown-link">Medium</button>
                    </div>

                    <div onClick={() => setRatValue("low")}>
                      <button class="d-block js-dropdown-link">Low</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <div className="col-lg-auto">
            <div className="d-inline-block">
              <div className="dropdown js-dropdown js-category-active">
                <Box sx={{ minWidth: 220 }}>
                  <FormControl
                    fullWidth
                    className="dropdown__button text-14"
                    style={{ height: "100%" }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Popular Most Viwed
                    </InputLabel>
                    <Select
                      // className="-dark-bg-dark-2 -dark-border-white-10"
                      style={{ color: "black" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={ratvalue}
                      label="Popular Most Viwed"
                      onChange={handleRatChange}
                    >
                      <MenuItem value={""}>none</MenuItem>
                      <MenuItem value={"great"}>Great</MenuItem>
                      <MenuItem value={"good"}>Good</MenuItem>
                      <MenuItem value={"medium"}>Medium</MenuItem>
                      <MenuItem value={"low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row y-gap-30 justify-center pt-50">
          {newCourse.length <= 0 ? (
            <h1>Nothing to show</h1>
          ) : (
            newCourse
              ?.slice(0, 8)
              .map((course) => (
                <FilterCourses key={course.id} course={course} />
              ))
          )}
        </div>

        <div className="row justify-center pt-60 lg:pt-40">
          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              All Courses
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentCourses;
