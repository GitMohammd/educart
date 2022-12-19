import React, { useEffect, useState } from "react";
import { useLocalaStogage } from "./useLocalaStogage";

const UseCourseCart = () => {
  const [courseItems, setCourseItems] = useLocalaStogage("educartCourses", []);

  const getCourseQuantity = (id) => {
    return courseItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCourseQuantity = (id) => {
    setCourseItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCourseQuantity = (id) => {
    setCourseItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeCourseQuantity = (id) => {
    setCourseItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return {
    courseItems,
    getCourseQuantity,
    increaseCourseQuantity,
    decreaseCourseQuantity,
    removeCourseQuantity,
  };
};

export default UseCourseCart;
