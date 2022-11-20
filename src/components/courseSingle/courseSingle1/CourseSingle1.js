import React, { useEffect, useState } from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import BestSeller from "./BestSeller";
import Overview from "./Overview";
import YouMayLike from "./YouMayLike";
import UseCourseContext from "../../Hooks/UseCourseContext";
import { useParams } from "react-router-dom";

function CourseSingle1() {
  const [courses, setCourses] = useState([]);
  let { courseId } = useParams();
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const singleCourse = courses.find(({ id }) => id === courseId);
  // const {
  //   id,
  //   img,
  //   name,
  //   lesson,
  //   offerCost,
  //   previousCost,
  //   providerImg,
  //   time,
  //   populerityTag,
  //   sellingTag,
  // } = singleCourse?;

  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <div className="js-pin-container">
              <BestSeller singleCourse={singleCourse} />
              <Overview />
            </div>
            <YouMayLike />
            <UseCourseContext />

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseSingle1;
