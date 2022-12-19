import React from "react";
import { Link } from "react-router-dom";
import UseCourseContext from "../../context/cartContext/UseCourseContext";

function FilterCourseList({ course }) {
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
  const {
    getCourseQuantity,
    increaseCourseQuantity,
    decreaseCourseQuantity,
    removeCourseQuantity,
  } = UseCourseContext();
  // console.log(typeof course);
  // console.log(course);
  return (
    <div className="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6">
      <Link to={`/courseSingle1/${id}`} className="coursesCard -type-1 ">
        <div className="relative">
          <div className="coursesCard__image overflow-hidden rounded-8">
            <img className="w-1/1" src={img} alt="image" />
            <div className="coursesCard__image_overlay rounded-8"></div>
          </div>
          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
        </div>

        <div className="h-100 pt-15">
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
      </Link>

      <div className="side-content__item">
        <div className="px-30 pt-20 pb-30 bg-white rounded-8 border-light shadow-2">
          <div className="text-18 lh-16 text-dark-1">{name}</div>

          <div className="row x-gap-10 y-gap-10 items-center pt-15">
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

          <div className="d-inline-block px-15 py-5 bg-green-1 text-dark-1 rounded-200 text-11 fw-500 uppercase mt-20">
            BEST SELLER
          </div>

          <p className="text-dark-1 mt-15">
            Learn the #1 most important building block of all art, Drawing. This
            course will teach you how to draw like a pro!
          </p>

          <div className="row y-gap-15 pt-15">
            <div className="col-12">
              <div className="d-flex items-center">
                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                  <div className="icon-check text-6"></div>
                </div>
                <div className="ml-10">Become a UX designer.</div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex items-center">
                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                  <div className="icon-check text-6"></div>
                </div>
                <div className="ml-10">
                  You will be able to add UX designer.
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex items-center">
                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                  <div className="icon-check text-6"></div>
                </div>
                <div className="ml-10">Become a UI designer.</div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex items-center">
                <div className="size-20 d-flex items-center justify-center rounded-full border-light">
                  <div className="icon-check text-6"></div>
                </div>
                <div className="ml-10">
                  Build &amp; test a full website design.
                </div>
              </div>
            </div>
          </div>

          <div className="row x-gap-20 y-gap-15 items-center pt-30">
            <div className="col">
              <button
                onClick={() => increaseCourseQuantity(id)}
                className="button -md h-60 -purple-1 text-white col-12"
              >
                Add To Cart
              </button>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center justify-center size-60 rounded-full border-light">
                <div className="icon-bookmark text-20 text-purple-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCourseList;
