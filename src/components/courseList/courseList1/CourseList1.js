import React, { useEffect, useState } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import CourseListMain1 from "./CourseListMain1";
import SubNav from "../../shared/SubNav";
import UserInterface from "./UserInterface";
import FilterCourseList from "./FilterCourseList";

function CourseList1() {
  const [courses, setCourses] = useState([]);
  // console.log(courses, "newcourses");
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

  const testCourse = courses.filter((course) => {
    return course.catagoryFilter === "art";
  });

  const FilterCatagoryCourses = catagoryfilterItems.catagory
    ?.map((catagoryItems) => {
      console.log(typeof catagoryItems);
      return catagoryItems === ""
        ? courses
        : courses.filter((course) => {
            return course.catagoryFilter.includes(catagoryItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();

  const FilterRatingCourses = ratingfilterItems.rating
    ?.map((ratingItems) => {
      return ratingItems === ""
        ? courses
        : courses.filter((course) => {
            return course.ratings.includes(ratingItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();
  const FilterInstructorCourses = instructorfilterItems.instructor
    ?.map((instructorItems) => {
      return instructorItems === ""
        ? courses
        : courses.filter((course) => {
            return course.instructor.includes(instructorItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();
  const FilterPriceCourses = pricefilterItems.price
    ?.map((priceItems) => {
      return priceItems === "all"
        ? courses
        : courses.filter((course) => {
            return course.price.includes(priceItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();
  const FilterLavelCourses = lavelfilterItems.lavel
    ?.map((lavelItems) => {
      return lavelItems === "allLevels"
        ? courses
        : courses.filter((course) => {
            return course.lavel.includes(lavelItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();
  const FilterLanguageCourses = languagefilterItems.language
    ?.map((languageItems) => {
      return languageItems === ""
        ? courses
        : courses.filter((course) => {
            return course.language.includes(languageItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();
  const FilterDurationCourses = durationfilterItems.duration
    ?.map((durationItems) => {
      return durationItems === ""
        ? courses
        : courses.filter((course) => {
            return course.duration.includes(durationItems);
          });
    })
    .map((course) => {
      return course.map((singleCourse) => {
        return singleCourse.id;
      });
    })
    .flat();
  const filterPopulerCourse = courses
    ?.filter((popcourse) => {
      return populerCourse === ""
        ? popcourse
        : popcourse.popular?.includes(populerCourse);
    })
    .map((course) => {
      return course.id;
    });

  const filterResultCourses = [
    FilterCatagoryCourses,
    FilterRatingCourses,
    FilterInstructorCourses,
    FilterPriceCourses,
    FilterLavelCourses,
    FilterLanguageCourses,
    FilterDurationCourses,
    filterPopulerCourse,
  ];

  const filterCoursesINtid = filterResultCourses.flat().map((id) => {
    return id;
  });

  const filterCoursesid = [...new Set(filterCoursesINtid)];

  const filteredCourses = filterCoursesid.map((id) => {
    return courses.filter((course) => {
      return id === "" ? course : course.id.includes(id);
    });
  });

  // console.log(filteredCourses);
  //   // FilterCourses.map((course) pricefilterItems=> {
  //   //   return course.map((cor) => {
  //   //     console.log(cor);
  //   //   });
  //   // }),
  //   "filtercourses"
  // );

  // console.log(newCourse, "newCourse");
  // console.log(
  //   catagoryfilterItems,
  //   ratingfilterItems,
  //   instructorfilterItems,
  //   pricefilterItems,
  //   lavelfilterItems,
  //   languagefilterItems,
  //   typeof durationfilterItems
  // );

  const handlePopulerCourseChange = (event) => {
    setPopulerCourse(event.target.value);
  };
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
              filteredCourses={filteredCourses}
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
