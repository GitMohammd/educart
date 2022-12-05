import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import UseCourseContext from "../../context/cartContext/UseCourseContext";

import ShopCourses from "./ShopCourses";

function ShopCartContent() {
  const {
    courseItems,
    getCourseQuantity,
    increaseCourseQuantity,
    decreaseCourseQuantity,
    removeCourseQuantity,
  } = UseCourseContext();
  const [courses, setCourses] = useState([]);
  const cartCourseItemId = courseItems?.map((courseItem) => courseItem?.id);

  const cartCourse = cartCourseItemId?.map((id) =>
    courses?.filter((course) => course.id === id)
  );

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courseItems]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarWrongOpen, setSnackbarWrongOpen] = useState(false);

  const [coupon, setCoupon] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    (await data?.couponCode) === "apply"
      ? setSnackbarOpen(true)
      : setSnackbarWrongOpen(true);

    (await data?.couponCode) === "apply" ? setCoupon(data) : setCoupon("");
  };
  const handleClick = () => {
    // involveEmail.email.length ? setSnackbarOpen(true) : setSnackbarOpen(false);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
    setSnackbarWrongOpen(false);
  };

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        {courseItems.length !== 0 ? (
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
                <div className="row justify-between">
                  <div className="col-md-4">
                    <div className="fw-500 text-purple-1">Product</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Price</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Quantity</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Subtotal</div>
                  </div>
                  <div className="col-md-1">
                    <div className="d-flex justify-end">
                      <div className="fw-500 text-purple-1">Remove</div>
                    </div>
                  </div>
                </div>
              </div>
              {cartCourse?.map((course) => {
                return <ShopCourses course={course} />;
              })}

              <div className="shopCart-footer px-16 mt-30">
                <div className="row justify-between y-gap-30">
                  <div className="col-xl-5">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                      <div className="d-flex justify-between border-dark">
                        <input
                          placeholder="Coupon Code"
                          className="rounded-8 px-25 py-20"
                          type="text"
                          {...register("couponCode")}
                        />
                        <button
                          className="text-black fw-500"
                          type="submit"
                          onClick={handleClick}
                        >
                          Apply coupon
                        </button>
                      </div>
                    </form>
                    <Snackbar
                      autoHideDuration={4000}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      open={snackbarOpen}
                      onClose={handleSnackbarClose}
                      message="I love snacks"
                      key={"bottom" + "center"}
                    >
                      <Alert
                        onClose={handleSnackbarClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        Thank you for "Coupon" apply!
                      </Alert>
                    </Snackbar>
                    <Snackbar
                      autoHideDuration={4000}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      open={snackbarWrongOpen}
                      onClose={handleSnackbarClose}
                      message="I love snacks"
                      key={"right" + "center"}
                    >
                      <Alert
                        onClose={handleSnackbarClose}
                        severity="error"
                        sx={{ width: "100%" }}
                      >
                        sorry !! Your "Coupon" is not correct
                      </Alert>
                    </Snackbar>
                  </div>

                  <div className="col-auto">
                    <div className="shopCart-footer__item">
                      <button className="button -md -purple-3 text-purple-1">
                        Update cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5 layout-pt-lg">
              <div className="py-30 bg-light-4 rounded-8 border-light">
                <h5 className="px-30 text-20 fw-500">Cart Totals</h5>

                <div className="d-flex justify-between px-30 item mt-25">
                  <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                  <div className="py-15 fw-500 text-dark-1">$1.298</div>
                </div>

                <div className="d-flex justify-between px-30 item border-top-dark">
                  <div className="pt-15 fw-500 text-dark-1">Total</div>
                  <div className="pt-15 fw-500 text-dark-1">$3.298</div>
                </div>
              </div>

              <a
                href="shop-checkout.html"
                className="button -md -purple-1 text-white col-12 mt-30"
              >
                Proceed to checkout
              </a>
            </div>
          </div>
        ) : (
          "Nothing in your cart, please Add cart items"
        )}
      </div>
    </section>
  );
}

export default ShopCartContent;
