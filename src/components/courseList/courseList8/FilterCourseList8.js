import React from "react";
import { Link } from "react-router-dom";

function FilterCourseList8({ course }) {
  const {
    popular,
    catagoryFilter,
    difficulty,
    duration,
    id,
    img,
    instructor,
    language,
    lavel,
    lesson,
    name,
    offerCost,
    previousCost,
    price,
    provider,
    providerImg,
    ratings,
    time,
  } = course;
  return (
    <div className="col-lg-6">
      <Link
        to={`/courseSingle1/${id}`}
        className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10"
      >
        <div className="coursesCard__image max-w-250">
          <img className="w-1/1 rounded-8" src={img} alt="image" />
        </div>

        <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
          <div className="coursesCard__stars">
            <img src="/assets/img/coursesCards/icons/review.svg" alt="review" />
          </div>
          <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">{name}</div>

          <div className="d-flex x-gap-15 items-center py-10">
            <div className="d-flex items-center">
              <div className="mr-10">
                <img src="/assets/img/coursesCards/icons/1.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1 text-light-1">6 lesson</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-10">
                <img src="/assets/img/coursesCards/icons/2.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1 text-light-1">3h 56m</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-10">
                <img src="/assets/img/coursesCards/icons/3.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1 text-light-1">Beginner</div>
            </div>
          </div>

          <div className="d-flex justify-between items-center pt-10 border-top-light">
            <div className="d-flex items-center">
              <img src="/assets/img/general/avatar-1.png" alt="image" />
              <div className="text-light-1 ml-10">Ali Tufan</div>
            </div>

            <div className="d-flex items-center">
              <div className="text-light-1 fw-500 mr-10 line-through">$179</div>
              <div className="text-18 fw-500 text-dark-1">$79</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FilterCourseList8;
