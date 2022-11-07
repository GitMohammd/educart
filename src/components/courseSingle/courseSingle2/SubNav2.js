import React from "react";

function SubNav2() {
  return (
    <section data-anim="fade" className="breadcrumbs bg-dark-1">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              <div className="breadcrumbs__item text-dark-3">
                <a href="#">Home</a>
              </div>

              <div className="breadcrumbs__item text-dark-3">
                <a href="#">All courses</a>
              </div>

              <div className="breadcrumbs__item text-dark-3">
                <a href="#">User Experience Design</a>
              </div>

              <div className="breadcrumbs__item text-dark-3">
                <a href="#">User Interface</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubNav2;
