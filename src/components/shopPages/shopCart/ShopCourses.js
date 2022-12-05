import React from "react";
import UseCourseContext from "../../context/cartContext/UseCourseContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function ShopCourses({ course }) {
  console.log(course[0]?.name);
  const {
    courseItems,
    getCourseQuantity,
    increaseCourseQuantity,
    decreaseCourseQuantity,
    removeCourseQuantity,
  } = UseCourseContext();
  const quantity = getCourseQuantity(course[0]?.id);
  console.log(quantity);
  return (
    <div className="px-30 pr-60 md:px-0">
      <div className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light">
        <div className="col-md-4">
          <div className="d-flex items-center">
            <div className="">
              <div
                className="size-100 bg-image rounded-8 js-lazy"
                data-bg="img/shop/products/1.png"
                style={{
                  backgroundImage: `url("assets/img/shop/products/1.png")`,
                }}
              ></div>
            </div>
            <div className="fw-500 text-dark-1 ml-30">{course[0]?.name}</div>
          </div>
        </div>

        <div className="col-md-2 md:mt-15">
          <div className="">
            <div className="shopCart-products__title d-none md:d-block mb-10">
              Price
            </div>
            <p>$298</p>
          </div>
        </div>

        <div className="col-md-2">
          <div className="">
            <div className="shopCart-products__title d-none md:d-block mb-10">
              {quantity}
            </div>

            <div className="input-counter md:mt-20 js-input-counter">
              <input
                className="input-counter__counter"
                type="number"
                placeholder="value..."
                value={quantity}
              />

              <div className="input-counter__controls">
                <button
                  className="input-counter__up js-down"
                  onClick={() => decreaseCourseQuantity(course[0]?.id)}
                >
                  <RemoveCircleOutlineIcon />
                </button>

                <button
                  className="input-counter__down js-up"
                  onClick={() => increaseCourseQuantity(course[0]?.id)}
                >
                  <AddCircleOutlineIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-1">
          <div className="">
            <div className="shopCart-products__title d-none md:d-block mb-10">
              Subtotal
            </div>

            <p>$1.298</p>
          </div>
        </div>

        <div className="col-md-1">
          <div className="md:d-none d-flex justify-end">
            <img
              onClick={() => removeCourseQuantity(course[0].id)}
              style={{ cursor: "pointer" }}
              src="/assets/img/menus/close.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCourses;
