import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FilterCourses from "../home2/FilterCourses";

function RecentCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const [ratvalue, setRatValue] = useState("");
  const handleRatChange = (event) => {
    setRatValue(event.target.value);
  };
  const newCourse = courses
    ?.filter((ratcourse) => {
      return ratvalue === "" ? ratcourse : ratcourse.rating?.includes(ratvalue);
    })
    .map((course) => {
      return course;
    });
  console.log(newCourse);
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-15 justify-between items-center">
          <div className="col-lg-6">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Recent courses</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>

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
          </div>
        </div>

        <div className="row y-gap-30 justify-center pt-50">
          {newCourse.length <= 0 ? (
            <h1>Nothing to show</h1>
          ) : (
            newCourse?.map((course) => (
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
