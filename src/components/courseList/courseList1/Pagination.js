import React from "react";

function Pagination({
  coursePerPage,
  currentPage,
  setCurrentPage,
  totalCourse,
  paginate,
}) {
  console.log(currentPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="row justify-center pt-90 lg:pt-50">
      <div className="col-auto">
        <div
          onClick={() => setCurrentPage(currentPage - 1)}
          className="pagination -buttons"
        >
          <button className="pagination__button -prev">
            <div className="icon icon-chevron-left"></div>
          </button>

          {/* <div className="pagination__count">
            <a href="#">1</a>
            <a className="-count-is-active" href="#">
              2
            </a>
            <a href="#">3</a>
            <span>...</span>
            <a href="#">67</a>
          </div> */}

          {pageNumbers.map((number) => (
            <div key={number} className="pagination__count">
              <a
                className={currentPage === number ? "-count-is-active" : ""}
                href="#"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </div>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="pagination__button -next"
          >
            <div className="icon icon-chevron-right"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
