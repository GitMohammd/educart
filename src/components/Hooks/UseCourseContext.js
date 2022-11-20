import React, { useEffect, useState } from "react";

const UseCourseContext = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return null;
};

export default UseCourseContext;
