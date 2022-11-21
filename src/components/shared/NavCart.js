import React, { useState } from "react";
import { useEffect } from "react";
import UseCourseContext from "../context/cartContext/UseCourseContext";

function NavCart() {
  const { courseItems, removeCourseQuantity } = UseCourseContext();
  const [courses, setCourses] = useState([]);
  const cartCourseItemId = courseItems?.map((courseItem) => courseItem?.id);

  const cartCourse = cartCourseItemId?.map((id) =>
    courses?.filter((course) => course.id === id)
  );

  // console.log(cartCourse, "cartcourse");
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courseItems]);

  // console.log(cartCourseItemId, cartCourse, "course Item");

  return (
    <div className="js-cart-toggle">
      <div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
        <div className="px-30 pt-30 pb-10">
          {cartCourse?.map((course) => (
            <div className="row justify-between x-gap-40 pb-20">
              <div className="col">
                <div className="row x-gap-10 y-gap-10">
                  <div className="col-auto">
                    <img src="/assets/img/menus/cart/1.png" alt="image" />
                  </div>

                  <div className="col">
                    <div className="text-dark-1 lh-15">
                      {/* {course[0].name.split(" ").slice(0, 3)} ... */}
                      {course[0]?.name}
                    </div>

                    <div className="d-flex items-center mt-10">
                      <div className="lh-12 fw-500 line-through text-light-1 mr-10">
                        ${course[0]?.previousCost}
                      </div>
                      <div className="text-18 lh-12 fw-500 text-dark-1">
                        ${course[0]?.offerCost}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <button onClick={() => removeCourseQuantity(course[0]?.id)}>
                  <img src="/assets/img/menus/close.svg" alt="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="px-30 pt-20 pb-30 border-top-light">
          <div className="d-flex justify-between">
            <div className="text-18 lh-12 text-dark-1 fw-500">Total:</div>
            <div className="text-18 lh-12 text-dark-1 fw-500">$659</div>
          </div>

          <div className="row x-gap-20 y-gap-10 pt-30">
            <div className="col-sm-6">
              <button className="button py-20 -dark-1 text-white -dark-button-white col-12">
                View Cart
              </button>
            </div>
            <div className="col-sm-6">
              <button className="button py-20 -purple-1 text-white col-12">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCart;
