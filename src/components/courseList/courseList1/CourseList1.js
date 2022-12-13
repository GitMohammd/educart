import React, { useEffect, useState } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import CourseListMain1 from "./CourseListMain1";
import SubNav from "../../shared/SubNav";
import UserInterface from "./UserInterface";
import FilterCourseList from "./FilterCourseList";

function CourseList1() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const [populerCourse, setPopulerCourse] = useState([]);
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
  // console.log

  const ratingFilter =
    ratingfilterItems.rating.length > 0
      ? ratingfilterItems.rating
          .map((ratingItems) => {
            return FilterCatagoryCourses.filter((course) =>
              course.ratings.includes(ratingItems)
            );
          })
          .flat()
      : FilterCatagoryCourses;

  // ? FilterCatagoryCourses.map((course) => {
  //   return ratingfilterItems.rating.map((ratingItems) => {

  //       return course.filter((ratCourse) => {
  //         return ratCourse.ratings.includes(ratingItems);
  //       });
  //     });
  //   })
  // : FilterCatagoryCourses;

  // return course;

  console.log(ratingFilter.flat());

  const FilterRatingCourses =
    ratingfilterItems.rating.length > 0
      ? ratingfilterItems.rating?.map((ratingItems) => {
          FilterCatagoryCourses.filter((course) => {
            return course?.ratings?.includes(ratingItems);
          });
        })
      : FilterCatagoryCourses;

  // const FilterCatagoryCourses =
  //   catagoryfilterItems.catagory.length > 0
  //     ? catagoryfilterItems.catagory?.map((catagoryItems) => {
  //         return filterPopulerCourse.filter((course) => {
  //           return course.catagoryFilter.includes(catagoryItems);
  //         });
  //       })
  //     : filterPopulerCourse;

  // const FilterRatingCourses =
  //   ratingfilterItems.rating.length > 0
  //     ? ratingfilterItems.rating?.map((ratingItems) => {
  //         FilterCatagoryCourses?.filter((course) => {
  //           return course?.ratings?.includes(ratingItems);
  //         });
  //       })
  //     : FilterCatagoryCourses;

  // const FilterInstructorCourses =
  //   instructorfilterItems.instructor.length > 0
  //     ? instructorfilterItems.instructor?.map((instructorItem) => {
  //         return FilterRatingCourses.filter((course) => {
  //           return course.instructor.includes(instructorItem);
  //         });
  //       })
  //     : FilterRatingCourses;

  // const FilterPriceCourses =
  //   pricefilterItems.price.length > 0
  //     ? pricefilterItems.price?.map((priceItems) => {
  //         return FilterInstructorCourses.filter((course) => {
  //           return course.price.includes(priceItems);
  //         });
  //       })
  //     : FilterInstructorCourses;

  // const FilterLavelCourses =
  //   lavelfilterItems.lavel.length > 0
  //     ? lavelfilterItems.lavel?.map((lavelItems) => {
  //         return FilterPriceCourses.filter((course) => {
  //           return course.lavel.includes(lavelItems);
  //         });
  //       })
  //     : FilterPriceCourses;

  // const FilterLanguageCourses =
  //   languagefilterItems.language.length > 0
  //     ? languagefilterItems.language?.map((languageItems) => {
  //         return FilterLavelCourses.filter((course) => {
  //           return course.language.includes(languageItems);
  //         });
  //       })
  //     : FilterLavelCourses;

  // const FilterDurationCourses =
  //   durationfilterItems.duration.length > 0
  //     ? durationfilterItems.duration?.map((durationItems) => {
  //         return FilterLanguageCourses.filter((course) => {
  //           return course.duration.includes(durationItems);
  //         });
  //       })
  //     : FilterLanguageCourses;

  const filteredCourses = courses;

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
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <UserInterface />
            <CourseListMain1
              courses={courses}
              coursePerPage={coursePerPage}
              totalCourse={filteredCourses.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              currentCourse={currentCourse}
              paginate={paginate}
              populerCourse={populerCourse}
              setPopulerCourse={setPopulerCourse}
              // handleCourseChange={handleCourseChange}
              handleCatagoryChange={handleCatagoryChange}
              handleRatingChange={handleRatingChange}
              handleinstructorChange={handleinstructorChange}
              handlePriceChange={handlePriceChange}
              handleLevelChange={handleLevelChange}
              handLanguageChange={handLanguageChange}
              handDurationChange={handDurationChange}
              handlePopulerCourseChange={handlePopulerCourseChange}
            />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseList1;
