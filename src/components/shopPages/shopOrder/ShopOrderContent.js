import React from "react";

function ShopOrderContent() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row no-gutters justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="shopCompleted-header">
              <div className="icon">
                <i data-feather="check"></i>
              </div>
              <h2 className="title">Your order is completed!</h2>
              <div className="subtitle">
                Thank you. Your order has been received.
              </div>
            </div>

            <div className="shopCompleted-info">
              <div className="row no-gutters y-gap-32">
                <div className="col-md-3 col-sm-6">
                  <div className="shopCompleted-info__item">
                    <div className="subtitle">Order Number</div>
                    <div className="title text-purple-1 mt-5">13119</div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="shopCompleted-info__item">
                    <div className="subtitle">Date</div>
                    <div className="title text-purple-1 mt-5">27/07/2021</div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="shopCompleted-info__item">
                    <div className="subtitle">Total</div>
                    <div className="title text-purple-1 mt-5">$40.10</div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="shopCompleted-info__item">
                    <div className="subtitle">Payment Method</div>
                    <div className="title text-purple-1 mt-5">
                      Direct Bank Transfer
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shopCompleted-footer bg-light-4 border-light rounded-8">
              <div className="shopCompleted-footer__wrap">
                <h5 className="title">Order details</h5>

                <div className="item">
                  <span className="fw-500">Product</span>
                  <span className="fw-500">Subtotal</span>
                </div>

                <div className="item">
                  <span className="">Hoodie x2</span>
                  <span className="">$59.00</span>
                </div>

                <div className="item -border-none">
                  <span className="">Seo Books x 1</span>
                  <span className="">$67.00</span>
                </div>

                <div className="item -border-none">
                  <span className="fw-500">Subtotal</span>
                  <span className="fw-500">$178.00</span>
                </div>

                <div className="item">
                  <span className="fw-500">Shipping</span>
                  <span className="fw-500">$178.00</span>
                </div>

                <div className="item">
                  <span className="fw-500">Total</span>
                  <span className="fw-500">$9,218.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopOrderContent;
