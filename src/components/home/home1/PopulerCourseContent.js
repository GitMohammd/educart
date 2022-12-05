import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";

function PopulerCourseContent() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="tabs__content pt-60 js-tabs-content">
      <div className="tabs__pane -tab-item-1 is-active">
        <div className="row y-gap-30 justify-center">
          {courses.map((course) => (
            <Courses key={course.id} course={course}></Courses>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopulerCourseContent;
