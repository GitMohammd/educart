import React from "react";

function Pagination({
  coursePerPage,
  currentPage,
  setCurrentPage,
  totalCourse,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCourse / coursePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="row justify-center pt-90 lg:pt-50">
      <div className="col-auto">
        <div className="pagination -buttons">
          <button
            onClick={() => paginate(currentPage - 1 <= 0 ? 1 : currentPage - 1)}
            className="pagination__button -prev"
          >
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
                href="#"
                className={currentPage === number ? "-count-is-active" : ""}
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </div>
          ))}

          <button
            onClick={() =>
              paginate(
                currentPage + 1 > pageNumbers.length + 1
                  ? pageNumbers.length
                  : currentPage + 1
              )
            }
            // onClick={() => paginate(3)}
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
