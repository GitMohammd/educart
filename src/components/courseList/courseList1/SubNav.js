import React from "react";

function SubNav() {
  return (
    <section data-anim="fade" className="breadcrumbs ">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              <div className="breadcrumbs__item ">
                <a href="#">Home</a>
              </div>

              <div className="breadcrumbs__item ">
                <a href="#">All courses</a>
              </div>

              <div className="breadcrumbs__item ">
                <a href="#">User Experience Design</a>
              </div>

              <div className="breadcrumbs__item ">
                <a href="#">User Interface</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubNav;
