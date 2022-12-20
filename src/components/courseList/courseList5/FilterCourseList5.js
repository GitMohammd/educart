import React from "react";

function FilterCourseList5({ course }) {
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
    <div data-anim-child="slide-up delay-1" className="col-lg-4 col-md-6">
      <a
        href="courses-single-1.html"
        className="coursesCard -type-1 rounded-8 bg-white shadow-3"
      >
        <div className="relative">
          <div className="coursesCard__image overflow-hidden rounded-top-8">
            <img className="w-1/1" src={img} alt="image" />
            <div className="coursesCard__image_overlay rounded-top-8"></div>
          </div>
          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
        </div>

        <div className="h-100 pt-20 pb-15 px-30">
          <div className="d-flex items-center">
            <div className="text-14 lh-1 text-yellow-1 mr-10">4.5</div>
            <div className="d-flex x-gap-5 items-center">
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
              <div className="icon-star text-9 text-yellow-1"></div>
            </div>
            <div className="text-13 lh-1 ml-10">(1991)</div>
          </div>

          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">{name} </div>

          <div className="d-flex x-gap-10 items-center pt-10">
            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="/assets/img/coursesCards/icons/1.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">6 lesson</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="/assets/img/coursesCards/icons/2.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">3h 56m</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <img src="/assets/img/coursesCards/icons/3.svg" alt="icon" />
              </div>
              <div className="text-14 lh-1">Beginner</div>
            </div>
          </div>

          <div className="coursesCard-footer">
            <div className="coursesCard-footer__author">
              <img src="/assets/img/general/avatar-1.png" alt="image" />
              <div>Ali Tufan</div>
            </div>

            <div className="coursesCard-footer__price">
              <div>$179</div>
              <div>$79</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default FilterCourseList5;
