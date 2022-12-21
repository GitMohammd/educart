import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import UseCourseContext from "../../context/cartContext/UseCourseContext";

function FIlterCourseList7({ course }) {
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
  return (
    <div className="col-12 border-bottom-light">
      <Link
        to={`/courseSingle1/${id}`}
        className="coursesCard -type-1 row y-gap-20 flex-row items-center"
      >
        <div className="col-xl-3 col-lg-4">
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

          <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
            {name}
          </div>
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

        <div className="col-auto md:d-none">
          <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
        </div>

        <div className="col-md-auto">
          <div className="text-right md:text-left">
            <div className="text-15 lh-1 fw-500 line-through">$179</div>
            <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">$279</div>
          </div>
          <div className="row x-gap-20 y-gap-20 items-center pt-25">
            <div className="col-auto">
              <button
                onClick={() => increaseCourseQuantity(id)}
                className="button h-50 px-30 -purple-3 text-purple-1"
              >
                Add to cart
              </button>
            </div>
            <div className="col-auto">
              <button className="button size-50 rounded-full -purple-3 text-light-1">
                <div className="size-20" data-feather="heart">
                  {" "}
                  <FavoriteBorderIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FIlterCourseList7;
