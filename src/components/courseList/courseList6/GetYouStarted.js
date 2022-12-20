import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import FeaturedCourse from "../../home/home5/FeaturedCourse";

function GetYouStarted() {
  const [courses, setCourses] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const filterPopulerCourse = courses?.filter((typeCourse) => {
    return type === "" ? typeCourse : typeCourse.type?.includes(type);
  });

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    // centerMode: true,
    arrows: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="layout-pt-md layout-pb-md">
      <div data-anim-wrap className="container">
        <div className="tabs -pills js-tabs">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <h2 data-anim-child="slide-up delay-1" className="text-24 lh-12">
                Courses to get you started
              </h2>
            </div>

            <div className="col-auto">
              <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
                <div onClick={() => setType("")}>
                  <button
                    className={`tabs__button px-20 py-8 rounded-8 js-tabs-button${
                      type === "" ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    All
                  </button>
                </div>

                <div onClick={() => setType("trending")}>
                  <button
                    className={`tabs__button px-20 py-8 rounded-200 js-tabs-button${
                      type === "trending" ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Trending
                  </button>
                </div>

                <div onClick={() => setType("popular")}>
                  <button
                    className={`tabs__button px-20 py-8 rounded-200 js-tabs-button${
                      type === "popular" ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-3"
                    type="button"
                  >
                    Popular
                  </button>
                </div>

                <div onClick={() => setType("fetured")}>
                  <button
                    className={`tabs__button px-20 py-8 rounded-8 js-tabs-button${
                      type === "fetured" ? " is-active" : " "
                    }`}
                    data-tab-target=".-tab-item-4"
                    type="button"
                  >
                    Fetured
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs__content pt-60 lg:pt-50 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-active">
              <div
                className="overflow-hidden js-section-slider"
                data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
              >
                <div className="">
                  <Slider {...settings} ref={sliderRef}>
                    {filterPopulerCourse.map((course) => {
                      return <FeaturedCourse key={course.id} course={course} />;
                    })}
                  </Slider>
                </div>

                <button
                  className="section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <i className="icon icon-arrow-left text-24"></i>
                </button>

                <button
                  className="section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <i className="icon icon-arrow-right text-24"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetYouStarted;
