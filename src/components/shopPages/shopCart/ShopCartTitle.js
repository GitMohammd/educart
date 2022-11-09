import React from "react";

function ShopCartTitle() {
  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div data-anim="slide-up delay-1">
                <h1 className="page-header__title">Shop Cart</h1>
              </div>

              <div data-anim="slide-up delay-2">
                <p className="page-header__text">
                  We’re on a mission to deliver engaging, curated courses at a
                  reasonable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCartTitle;
