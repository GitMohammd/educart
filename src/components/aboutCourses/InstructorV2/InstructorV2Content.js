import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function InstructorV2Content() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const [populerCourse, setPopulerCourse] = useState("");
  const [catagoryfilterItems, setCatagoryFilterItems] = useState({
    catagory: [],
  });
  const [ratingfilterItems, setRatingFilterItems] = useState({
    rating: [],
  });
  const [instructorfilterItems, setInstructorCatagoryFilterItems] = useState({
    instructor: [],
  });
  const [pricefilterItems, setPriceFilterItems] = useState({
    price: [],
  });
  const [lavelfilterItems, setLavelFilterItems] = useState({
    lavel: [],
  });
  const [languagefilterItems, setLanguageFilterItems] = useState({
    language: [],
  });
  const [durationfilterItems, setDurationLanguageFilterItems] = useState({
    duration: [],
  });

  const handlePopulerCourseChange = (event) => {
    setPopulerCourse(event.target.value);
  };

  const handleCatagoryChange = (e) => {
    const { value, checked } = e.target;
    const { catagory } = catagoryfilterItems;
    if (checked) {
      setCatagoryFilterItems({
        catagory: [...catagory, value],
      });
    } else {
      setCatagoryFilterItems({
        catagory: catagory.filter((e) => e !== value),
      });
    }
  };
  const handleRatingChange = (e) => {
    const { value, checked } = e.target;
    const { rating } = ratingfilterItems;
    if (checked) {
      setRatingFilterItems({
        rating: [...rating, value],
      });
    } else {
      setRatingFilterItems({
        rating: rating.filter((e) => e !== value),
      });
    }
  };
  const handleinstructorChange = (e) => {
    const { value, checked } = e.target;
    const { instructor } = instructorfilterItems;
    if (checked) {
      setInstructorCatagoryFilterItems({
        instructor: [...instructor, value],
      });
    } else {
      setInstructorCatagoryFilterItems({
        instructor: instructor.filter((e) => e !== value),
      });
    }
  };
  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    const { price } = pricefilterItems;
    if (checked) {
      setPriceFilterItems({
        price: [...price, value],
      });
    } else {
      setPriceFilterItems({
        price: price.filter((e) => e !== value),
      });
    }
  };
  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    const { lavel } = lavelfilterItems;
    if (checked) {
      setLavelFilterItems({
        lavel: [...lavel, value],
      });
    } else {
      setLavelFilterItems({
        lavel: lavel.filter((e) => e !== value),
      });
    }
  };
  const handLanguageChange = (e) => {
    const { value, checked } = e.target;
    const { language } = languagefilterItems;
    if (checked) {
      setLanguageFilterItems({
        language: [...language, value],
      });
    } else {
      setLanguageFilterItems({
        language: language.filter((e) => e !== value),
      });
    }
  };
  const handDurationChange = (e) => {
    const { value, checked } = e.target;
    const { duration } = durationfilterItems;
    if (checked) {
      setDurationLanguageFilterItems({
        duration: [...duration, value],
      });
    } else {
      setDurationLanguageFilterItems({
        duration: duration.filter((e) => e !== value),
      });
    }
  };

  const filterPopulerCourse = courses?.filter((popcourse) => {
    return populerCourse === ""
      ? popcourse
      : popcourse.popular?.includes(populerCourse);
  });

  const FilterCatagoryCourses =
    catagoryfilterItems.catagory.length > 0
      ? catagoryfilterItems.catagory
          ?.map((catagoryItems) => {
            return filterPopulerCourse.filter((course) => {
              return course.catagoryFilter.includes(catagoryItems);
            });
          })
          .flat()
      : filterPopulerCourse;

  const FilterRatingCourses =
    ratingfilterItems.rating.length > 0
      ? ratingfilterItems.rating
          ?.map((ratingItems) => {
            return FilterCatagoryCourses?.filter((course) => {
              return course?.ratings?.includes(ratingItems);
            });
          })
          .flat()
      : FilterCatagoryCourses;

  const FilterInstructorCourses =
    instructorfilterItems.instructor.length > 0
      ? instructorfilterItems.instructor
          ?.map((instructorItem) => {
            return FilterRatingCourses.filter((course) => {
              return course.instructor.includes(instructorItem);
            });
          })
          .flat()
      : FilterRatingCourses;

  const FilterPriceCourses =
    pricefilterItems.price.length > 0
      ? pricefilterItems.price
          ?.map((priceItems) => {
            return FilterInstructorCourses.filter((course) => {
              return course.price.includes(priceItems);
            });
          })
          .flat()
      : FilterInstructorCourses;

  const FilterLavelCourses =
    lavelfilterItems.lavel.length > 0
      ? lavelfilterItems.lavel
          ?.map((lavelItems) => {
            return FilterPriceCourses.filter((course) => {
              return course.lavel.includes(lavelItems);
            });
          })
          .flat()
      : FilterPriceCourses;

  const FilterLanguageCourses =
    languagefilterItems.language.length > 0
      ? languagefilterItems.language
          ?.map((languageItems) => {
            return FilterLavelCourses.filter((course) => {
              return course.language.includes(languageItems);
            });
          })
          .flat()
      : FilterLavelCourses;

  const FilterDurationCourses =
    durationfilterItems.duration.length > 0
      ? durationfilterItems.duration
          ?.map((durationItems) => {
            return FilterLanguageCourses.filter((course) => {
              return course.duration.includes(durationItems);
            });
          })
          .flat()
      : FilterLanguageCourses;

  const filterIds = FilterDurationCourses.map((rating) => {
    return rating.id;
  });

  const findUniqeId = [...new Set(filterIds)];

  const filteredCoursesbyid = findUniqeId.map((filterId) => {
    return courses.find((cor) => cor.id === filterId);
  });

  console.log(filteredCoursesbyid);

  const filteredCourses = filteredCoursesbyid;

  const [paginationShowCourse, setPaginationShowCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(12);

  // Get Current Course

  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursePerPage;

  const currentCourse = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="layout-pt-md layout-pb-lg">
      <div data-anim-wrap className="container">
        <div className="row y-gap-50">
          <div className="col-lg-3 pr-50">
            <div data-anim="slide-up delay-2" className="sidebar -courses">
              <div className="sidebar__item">
                <div className="accordion js-accordion">
                  <div>
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <h5 className="sidebar__title">Category</h5>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component={"span"}>
                          <div className="accordion__content__inner">
                            <div className="">
                              <div className="sidebar-checkbox__item">
                                <Checkbox
                                  color="default"
                                  onChange={handleCatagoryChange}
                                  value={"art"}
                                  lable={"art"}
                                />
                                Art
                                <div className="sidebar-checkbox__count">
                                  (18)
                                </div>
                              </div>

                              <div className="sidebar-checkbox__item">
                                <Checkbox
                                  color="default"
                                  onChange={handleCatagoryChange}
                                  value={"exercise"}
                                />
                                Exercise
                                <div className="sidebar-checkbox__count">
                                  (12)
                                </div>
                              </div>

                              <div className="sidebar-checkbox__item">
                                <Checkbox
                                  color="default"
                                  onChange={handleCatagoryChange}
                                  value={"softwareDevelopment"}
                                />
                                Software Development
                                <div className="sidebar-checkbox__count">
                                  (23)
                                </div>
                              </div>

                              <div className="sidebar-checkbox__item">
                                <div className="sidebar-checkbox__item">
                                  <Checkbox
                                    color="default"
                                    onChange={handleCatagoryChange}
                                    value={"music"}
                                  />
                                  Music
                                  <div className="sidebar-checkbox__count">
                                    (67)
                                  </div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__item">
                                <div className="sidebar-checkbox__item">
                                  <Checkbox
                                    color="default"
                                    onChange={handleCatagoryChange}
                                    value={"materialDesign"}
                                  />
                                  Material Design
                                  <div className="sidebar-checkbox__count">
                                    (34)
                                  </div>
                                </div>
                              </div>

                              <div className="sidebar-checkbox__item">
                                <div className="sidebar-checkbox__item">
                                  <Checkbox
                                    color="default"
                                    onChange={handleCatagoryChange}
                                    value={"photography"}
                                  />
                                  Photography
                                  <div className="sidebar-checkbox__count">
                                    (12)
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div> */}
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>

              <div className="sidebar__item">
                <div className="accordion js-accordion">
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <h5 className="sidebar__title">Ratings</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={"span"}>
                        <div className="accordion__content__inner">
                          <div className="">
                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                icon={<CheckCircleOutlineIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                onChange={handleRatingChange}
                                value={4}
                              />
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                4.5 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (1991)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                icon={<CheckCircleOutlineIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                onChange={handleRatingChange}
                                value={4}
                              />
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                4.0 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (200)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                icon={<CheckCircleOutlineIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                onChange={handleRatingChange}
                                value={3}
                              />
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                3.5 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (300)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                icon={<CheckCircleOutlineIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                onChange={handleRatingChange}
                                value={3}
                              />
                              <div className="sidebar-checkbox__title d-flex items-center">
                                <div className="d-flex x-gap-5 pr-10">
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                  <div className="icon-star text-11 text-yellow-1"></div>
                                </div>
                                3.0 &amp; up
                              </div>
                              <div className="sidebar-checkbox__count">
                                (500)
                              </div>
                            </div>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              <div className="sidebar__item">
                <div className="accordion js-accordion">
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <h5 className="sidebar__title">Instructors</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={"span"}>
                        <div className="accordion__content__inner">
                          <div className="">
                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                onChange={handleinstructorChange}
                                value={"janeCooper"}
                              />
                              <div className="sidebar-checkbox__title">
                                Jane Cooper
                              </div>

                              <div className="sidebar-checkbox__count">
                                (18)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                onChange={handleinstructorChange}
                                value={"jennyWilson"}
                              />

                              <div className="sidebar-checkbox__title">
                                Jenny Wilson
                              </div>
                              <div className="sidebar-checkbox__count">
                                (12)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                onChange={handleinstructorChange}
                                value={"robertFox"}
                              />

                              <div className="sidebar-checkbox__title">
                                Robert Fox
                              </div>
                              <div className="sidebar-checkbox__count">
                                (23)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                onChange={handleinstructorChange}
                                value={"jacobJones"}
                              />

                              <div className="sidebar-checkbox__title">
                                Jacob Jones
                              </div>
                              <div className="sidebar-checkbox__count">
                                (67)
                              </div>
                            </div>

                            <div className="sidebar-checkbox__item">
                              <Checkbox
                                color="default"
                                onChange={handleinstructorChange}
                                value={"albertFlores"}
                              />

                              <div className="sidebar-checkbox__title">
                                Albert Flores
                              </div>
                              <div className="sidebar-checkbox__count">
                                (34)
                              </div>
                            </div>
                          </div>
                          {/* <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div> */}
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row y-gap-20 items-center justify-between pb-30">
              <div className="col-auto">
                <div className="text-14 lh-12">
                  Showing <span className="text-dark-1 fw-500">250</span> total
                  results
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                    Sort by:
                  </div>

                  <div className="dropdown js-dropdown js-category-active">
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Most Popular</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle">
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Animation
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Illustration
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Business
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30">
              <div className="col-lg-4 col-md-6">
                <div
                  data-anim-child="slide-left delay-2"
                  className="teamCard -type-1 px-10 py-10 rounded-8 border-light"
                >
                  <div className="teamCard__image">
                    <img src="/assets/img/team/1.png" alt="image" />
                  </div>
                  <div className="teamCard__content mt-10 px-10">
                    <h4 className="teamCard__title">Floyd Miles</h4>
                    <p className="teamCard__text">President of Sales</p>
                    <div className="teamCard-info">
                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">4.5</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">692 Students</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/3.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  data-anim-child="slide-left delay-3"
                  className="teamCard -type-1 px-10 py-10 rounded-8 border-light"
                >
                  <div className="teamCard__image">
                    <img src="/assets/img/team/2.png" alt="image" />
                  </div>
                  <div className="teamCard__content mt-10 px-10">
                    <h4 className="teamCard__title">Cameron Williamson</h4>
                    <p className="teamCard__text">Web Designer</p>
                    <div className="teamCard-info">
                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">4.5</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">692 Students</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/3.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  data-anim-child="slide-left delay-4"
                  className="teamCard -type-1 px-10 py-10 rounded-8 border-light"
                >
                  <div className="teamCard__image">
                    <img src="/assets/img/team/3.png" alt="image" />
                  </div>
                  <div className="teamCard__content mt-10 px-10">
                    <h4 className="teamCard__title">Brooklyn Simmons</h4>
                    <p className="teamCard__text">Dog Trainer</p>
                    <div className="teamCard-info">
                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">4.5</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">692 Students</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/3.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  data-anim-child="slide-left delay-5"
                  className="teamCard -type-1 px-10 py-10 rounded-8 border-light"
                >
                  <div className="teamCard__image">
                    <img src="/assets/img/team/4.png" alt="image" />
                  </div>
                  <div className="teamCard__content mt-10 px-10">
                    <h4 className="teamCard__title">Wade Warren</h4>
                    <p className="teamCard__text">Marketing Coordinator</p>
                    <div className="teamCard-info">
                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">4.5</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">692 Students</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/3.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  data-anim-child="slide-left delay-6"
                  className="teamCard -type-1 px-10 py-10 rounded-8 border-light"
                >
                  <div className="teamCard__image">
                    <img src="/assets/img/team/5.png" alt="image" />
                  </div>
                  <div className="teamCard__content mt-10 px-10">
                    <h4 className="teamCard__title">Bessie Cooper</h4>
                    <p className="teamCard__text">Marketing Coordinator</p>
                    <div className="teamCard-info">
                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">4.5</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">692 Students</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/3.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  data-anim-child="slide-left delay-7"
                  className="teamCard -type-1 px-10 py-10 rounded-8 border-light"
                >
                  <div className="teamCard__image">
                    <img src="/assets/img/team/6.png" alt="image" />
                  </div>
                  <div className="teamCard__content mt-10 px-10">
                    <h4 className="teamCard__title">Albert Flores</h4>
                    <p className="teamCard__text">Dog Trainer</p>
                    <div className="teamCard-info">
                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/1.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">4.5</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/2.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">692 Students</div>
                      </div>

                      <div className="teamCard-info__item">
                        <div className="teamCard-info__icon">
                          <img src="/assets/img/team/icons/3.svg" alt="icon" />
                        </div>
                        <div className="teamCard-info__title">15 Course</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-60 lg:pt-40">
              <div className="col-auto">
                <div className="pagination -buttons">
                  <button className="pagination__button -prev">
                    <div className="icon icon-chevron-left"></div>
                  </button>

                  <div className="pagination__count">
                    <a href="#">1</a>
                    <a className="-count-is-active" href="#">
                      2
                    </a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">67</a>
                  </div>

                  <button className="pagination__button -next">
                    <div className="icon icon-chevron-right"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstructorV2Content;
