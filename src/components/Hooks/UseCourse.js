import React, { useEffect, useState } from "react";

const UseCourse = () => {
  // const [cart, setCart] = useState(0);
  // const [courseId, setCourseId] = useState([]);
  // console.log(cart, courseId);
  // let newCourseId = [...courseId];
  // console.log(cart, "courseId, courseId");

  const AddCart = (id) => {
    let cart = 0;

    console.log(cart);
    cart = cart + 1;
    // let newCourseId = [...courseId, id];
    // setCourseId(newCourseId);
  };

  return AddCart;
};

export default UseCourse;
