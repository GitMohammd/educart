import React from "react";
import { Route, Routes } from "react-router-dom";
import Home1 from "./components/home/home1/Home1";
import Home2 from "./components/home/home2/Home2";
import Home3 from "./components/home/home3/Home3";
import Home4 from "./components/home/home4/Home4";
import Home5 from "./components/home/home5/Home5";

import Home6 from "./components/home/home6/Home6";

import Home7 from "./components/home/home7/Home7";
import Home8 from "./components/home/home8/Home8";
import Home9 from "./components/home/home9/Home9";
import Home10 from "./components/home/home10/Home10";
import CourseList1 from "./components/courseList/courseList1/CourseList1";
import CourseList2 from "./components/courseList/courseList2/CourseList2";
import CourseList3 from "./components/courseList/courseList3/CourseList3";
import CourseList4 from "./components/courseList/courseList4/CourseList4";
import CourseList5 from "./components/courseList/courseList5/CourseList5";
import CourseList6 from "./components/courseList/courseList6/CourseList6";
import CourseList7 from "./components/courseList/courseList7/CourseList7";
import CourseList8 from "./components/courseList/courseList8/CourseList8";
import CourseSingle1 from "./components/courseSingle/courseSingle1/CourseSingle1";
import CourseSingle2 from "./components/courseSingle/courseSingle2/CourseSingle2";
import CourseSingle3 from "./components/courseSingle/courseSingle3/CourseSingle3";
import CourseSingle4 from "./components/courseSingle/courseSingle4/CourseSingle4";
import CourseSingle5 from "./components/courseSingle/courseSingle5/CourseSingle5";
import CourseSingle6 from "./components/courseSingle/courseSingle6/CourseSingle6";
import LessonPagev1 from "./components/aboutCourses/lessonPagev1/LessonPagev1";
import LessonPagev2 from "./components/aboutCourses/lessonPagev2/LessonPagev2";
import InstructorV1 from "./components/aboutCourses/instructiorV1/InstructorV1";
import InstructorV2 from "./components/aboutCourses/InstructorV2/InstructorV2";
import InstructiorSingle from "./components/aboutCourses/instructorSingle/InstructiorSingle";
import BecomeAnInstructor from "./components/aboutCourses/becomeAnInstructor/BecomeAnInstructor";
import Dashboard from "./components/dashboardPages/Dashboard/Dashboard";
import MyCourses from "./components/dashboardPages/myCourses/MyCourses";
import Bookmarks from "./components/dashboardPages/Bookmarks/Bookmarks";
import AddListing from "./components/dashboardPages/addListing/AddListing";
import Reviews from "./components/dashboardPages/reviews/Reviews";
import Settings from "./components/dashboardPages/settings/Settings";
import Administration from "./components/dashboardPages/administration/Administration";
import Calender from "./components/dashboardPages/calander/Calender";
import Assingment from "./components/dashboardPages/assignment/Assingment";
import SingleDashboard from "./components/dashboardPages/singleDashboard/SingleDashboard";
import Dictionary from "./components/dashboardPages/dictionary/Dictionary";
import Forums from "./components/dashboardPages/forums/Forums";
import Grade from "./components/dashboardPages/grade/Grade";
import Massage from "./components/dashboardPages/massage/Massage";
import Participants from "./components/dashboardPages/participants/Participants";
import Quiz from "./components/dashboardPages/quiz/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/home3" element={<Home3 />} />
      <Route path="/home4" element={<Home4 />} />
      <Route path="/home5" element={<Home5 />} />
      <Route path="/home6" element={<Home6 />} />
      <Route path="/home7" element={<Home7 />} />
      <Route path="/home8" element={<Home8 />} />
      <Route path="/home9" element={<Home9 />} />
      <Route path="/home10" element={<Home10 />} />
      <Route path="/courselist1" element={<CourseList1 />} />
      <Route path="/courselist2" element={<CourseList2 />} />
      <Route path="/courselist3" element={<CourseList3 />} />
      <Route path="/courselist4" element={<CourseList4 />} />
      <Route path="/courselist5" element={<CourseList5 />} />
      <Route path="/courselist6" element={<CourseList6 />} />
      <Route path="/courselist7" element={<CourseList7 />} />
      <Route path="/courselist8" element={<CourseList8 />} />
      <Route path="/courselist9" element={<CourseList8 />} />
      <Route path="/courseSingle1" element={<CourseSingle1 />} />
      <Route path="/courseSingle2" element={<CourseSingle2 />} />
      <Route path="/courseSingle3" element={<CourseSingle3 />} />
      <Route path="/courseSingle4" element={<CourseSingle4 />} />
      <Route path="/courseSingle5" element={<CourseSingle5 />} />
      <Route path="/courseSingle6" element={<CourseSingle6 />} />
      <Route path="/LessonPagev1" element={<LessonPagev1 />} />
      <Route path="/LessonPagev2" element={<LessonPagev2 />} />
      <Route path="/InstructorsListv1" element={<InstructorV1 />} />
      <Route path="/InstructorsListv2" element={<InstructorV2 />} />
      <Route path="/InstructorsSingle" element={<InstructiorSingle />} />
      <Route path="/BecomeanInstructor" element={<BecomeAnInstructor />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myCourses" element={<MyCourses />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/addListing" element={<AddListing />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/administration" element={<Administration />} />
      <Route path="/assignment" element={<Assingment />} />
      <Route path="/calender" element={<Calender />} />
      <Route path="/singleDashboard" element={<SingleDashboard />} />
      <Route path="/dictionary" element={<Dictionary />} />
      <Route path="/forums" element={<Forums />} />
      <Route path="/grades" element={<Grade />} />
      <Route path="/messages" element={<Massage />} />
      <Route path="/Participants" element={<Participants />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/survey" element={<Quiz />} />
    </Routes>
  );
}

export default App;
