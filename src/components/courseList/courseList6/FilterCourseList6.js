import React from "react";

function FilterCourseList6({ course }) {
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
    <div className="col-12 border-bottom-light">
      <a
        href="courses-single-1.html"
        className="coursesCard -type-1 row y-gap-20 flex-row items-center"
      >
        <div className="col-xl-4">
          <div className="coursesCard__image rounded-8 relative">
            <img className="w-1/1 rounded-8" src={img} alt="image" />
            <div className="coursesCard__image_overlay rounded-8"></div>
          </div>
        </div>

        <div className="col">
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

          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">{name}</div>
          <div className="mt-8">
            Introductory course on web hosting, domain registration, and how you
            can easily publish and edit your website online.
          </div>

          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            <div className="col-auto">
              <div className="d-flex items-center">
                <img src="/assets/img/general/avatar-1.png" alt="image" />
                <div className="ml-10">Ali Tufan</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <img
                  className="mr-8"
                  src="/assets/img/coursesCards/icons/1.svg"
                  alt="icon"
                />
                <div className="text-14 lh-1">6 lesson</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <img
                  className="mr-8"
                  src="/assets/img/coursesCards/icons/2.svg"
                  alt="icon"
                />
                <div className="text-14 lh-1">3h 56m</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <img
                  className="mr-8"
                  src="/assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                />
                <div className="text-14 lh-1">Beginner</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="line -vertical -h-120 bg-light-5"></div>
        </div>

        <div className="col-auto text-right">
          <div className="text-15 lh-1 fw-500 line-through">$179</div>
          <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">$279</div>
        </div>
      </a>
    </div>
  );
}

export default FilterCourseList6;
