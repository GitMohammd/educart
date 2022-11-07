import React from "react";

function UserInterface() {
  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-auto">
              <div data-anim="slide-up delay-1">
                <h1 className="page-header__title">User Interface Courses</h1>
              </div>

              <div data-anim="slide-up delay-2">
                <p className="page-header__text">
                  Write an introductory description of the category.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserInterface;
