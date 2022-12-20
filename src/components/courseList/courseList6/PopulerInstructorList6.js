import React, { useRef } from "react";
import Slider from "react-slick";

function PopulerInstructorList6() {
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
    <section class="layout-pt-md layout-pb-md">
      <div class="container">
        <div class="row y-gap-20 justify-between items-center">
          <div class="col-auto">
            <h2 class="text-24 lh-12">Popular Instructors</h2>
          </div>

          <div class="col-auto">
            <div class="d-flex justify-center x-gap-15 items-center">
              <div class="col-auto">
                <button
                  class="d-flex items-center text-24 arrow-left-hover js-events-slider-prev"
                  onClick={() => sliderRef.current?.slickPrev()}
                >
                  <i class="icon icon-arrow-left"></i>
                </button>
              </div>
              <div class="col-auto">
                <div class="pagination -arrows js-events-slider-pagination"></div>
              </div>
              <div class="col-auto">
                <button
                  class="d-flex items-center text-24 arrow-right-hover js-events-slider-next"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <i class="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="overflow-hidden pt-50 lg:pt-40 js-section-slider"
          data-gap="30"
          data-pagination="js-events-slider-pagination"
          data-nav-prev="js-events-slider-prev"
          data-nav-next="js-events-slider-next"
          data-slider-cols="xl-5 lg-3 md-2 sm-2"
          data-anim-wrap
        >
          <div class="">
            <Slider {...settings} ref={sliderRef}>
              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-2"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/1.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Floyd Miles</h4>
                    <p class="teamCard__text">President of Sales</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-3"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/2.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Cameron Williamson</h4>
                    <p class="teamCard__text">Web Designer</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-4"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/3.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Brooklyn Simmons</h4>
                    <p class="teamCard__text">Dog Trainer</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-5"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/4.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Brooklyn Simmons</h4>
                    <p class="teamCard__text">Dog Trainer</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-6"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/1.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Wade Warren</h4>
                    <p class="teamCard__text">Marketing Coordinator</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-7"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/2.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Floyd Miles</h4>
                    <p class="teamCard__text">President of Sales</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  data-anim-child="slide-left delay-8"
                  class="teamCard -type-1 -teamCard-hover"
                >
                  <div class="teamCard__image size-180 mx-auto">
                    <img
                      class="fit-cover size-180 rounded-full"
                      src="/assets/img/team/3.png"
                      alt="image"
                    />
                    <div class="teamCard__socials rounded-full">
                      <div class="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i class="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i class="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="teamCard__content text-center">
                    <div class="d-flex items-center justify-center">
                      <div class="icon-star text-yellow-1 text-9 mr-5"></div>
                      <div class="text-14 text-yellow-1">4.5</div>
                    </div>

                    <h4 class="teamCard__title mt-10">Cameron Williamson</h4>
                    <p class="teamCard__text">Web Designer</p>

                    <div class="d-flex x-gap-15 justify-center pt-10">
                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/1.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">692 Students</div>
                      </div>

                      <div class="d-flex items-center">
                        <img
                          class="mr-8"
                          src="/assets/img/team/icons/2.svg"
                          alt="icon"
                        />
                        <div class="text-13 lh-12">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopulerInstructorList6;
