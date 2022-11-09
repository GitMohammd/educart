import React from "react";

function ShopCartContent() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
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
                    <div className="fw-500 text-dark-1 ml-30">
                      Cosy Chair - Beige, Leather
                    </div>
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
                      Quantity
                    </div>

                    <div className="input-counter md:mt-20 js-input-counter">
                      <input
                        className="input-counter__counter"
                        type="number"
                        placeholder="value..."
                        value="1"
                      />

                      <div className="input-counter__controls">
                        <button className="input-counter__up js-down">
                          <i className="icon" data-feather="minus"></i>
                        </button>

                        <button className="input-counter__down js-up">
                          <i className="icon" data-feather="plus"></i>
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
                    <i className="icon" data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light">
                <div className="col-md-4">
                  <div className="d-flex items-center">
                    <div className="">
                      <div
                        className="size-100 bg-image rounded-8 js-lazy"
                        data-bg="img/shop/products/2.png"
                        style={{
                          backgroundImage: `url("assets/img/shop/products/2.png")`,
                        }}
                      ></div>
                    </div>
                    <div className="fw-500 text-dark-1 ml-30">
                      Cosy Chair - Beige, Leather
                    </div>
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
                      Quantity
                    </div>

                    <div className="input-counter md:mt-20 js-input-counter">
                      <input
                        className="input-counter__counter"
                        type="number"
                        placeholder="value..."
                        value="1"
                      />

                      <div className="input-counter__controls">
                        <button className="input-counter__up js-down">
                          <i className="icon" data-feather="minus"></i>
                        </button>

                        <button className="input-counter__down js-up">
                          <i className="icon" data-feather="plus"></i>
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
                    <i className="icon" data-feather="x"></i>
                  </div>
                </div>
              </div>

              <div className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light">
                <div className="col-md-4">
                  <div className="d-flex items-center">
                    <div className="">
                      <div
                        className="size-100 bg-image rounded-8 js-lazy"
                        data-bg="img/shop/products/3.png"
                        style={{
                          backgroundImage: `url("assets/img/shop/products/3.png")`,
                        }}
                      ></div>
                    </div>
                    <div className="fw-500 text-dark-1 ml-30">
                      Cosy Chair - Beige, Leather
                    </div>
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
                      Quantity
                    </div>

                    <div className="input-counter md:mt-20 js-input-counter">
                      <input
                        className="input-counter__counter"
                        type="number"
                        placeholder="value..."
                        value="1"
                      />

                      <div className="input-counter__controls">
                        <button className="input-counter__up js-down">
                          <i className="icon" data-feather="minus"></i>
                        </button>

                        <button className="input-counter__down js-up">
                          <i className="icon" data-feather="plus"></i>
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
                    <i className="icon" data-feather="x"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="shopCart-footer px-16 mt-30">
              <div className="row justify-between y-gap-30">
                <div className="col-xl-5">
                  <form className="" action="post">
                    <div className="d-flex justify-between border-dark">
                      <input
                        className="rounded-8 px-25 py-20"
                        type="text"
                        placeholder="Coupon Code"
                      />
                      <button className="text-black fw-500" type="submit">
                        Apply coupon
                      </button>
                    </div>
                  </form>
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
      </div>
    </section>
  );
}

export default ShopCartContent;
