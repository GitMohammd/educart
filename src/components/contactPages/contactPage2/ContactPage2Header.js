import React from "react";

function ContactPage2Header() {
  return (
    <section className="page-header -type-4 bg-beige-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-auto">
              <div data-anim="slide-up delay-1">
                <h1 className="page-header__title">Contact Us</h1>
              </div>

              <div data-anim="slide-up delay-2">
                <p className="page-header__text">
                  We’re on a mission to deliver engaging, curated
                  <br /> courses at a reasonable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage2Header;
