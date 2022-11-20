import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import Survey from "./components/dashboardPages/survey/Survey";
import EventList1 from "./components/eventsPages/eventList1/EventList1";
import EventList2 from "./components/eventsPages/eventList2/EventList2";
import SingleEvent from "./components/eventsPages/singleEvent/SingleEvent";
import BlogList1 from "./components/blogPages/blogList1/BlogList1";
import BlogList2 from "./components/blogPages/blogList2/BlogList2";
import BlogList3 from "./components/blogPages/blogList3/BlogList3";
import SingleBlog from "./components/blogPages/singleBlog/SingleBlog";
import AboutPages1 from "./components/aboutPages/aboutPages1/AboutPages1";
import AboutPage2 from "./components/aboutPages/aboutPages2/AboutPage2";
import ContactPage1 from "./components/contactPages/contactPage1/ContactPage1";
import ContactPage2 from "./components/contactPages/contactPage2/ContactPage2";
import ShopCart from "./components/shopPages/shopCart/ShopCart";
import ShopCheckout from "./components/shopPages/shopCheckout/ShopCheckout";
import ShopList from "./components/shopPages/shopList/ShopList";
import ShopOrder from "./components/shopPages/shopOrder/ShopOrder";
import ShopSingle from "./components/shopPages/shopSingle/ShopSingle";
import MemberShip from "./components/memberShipPage/MemberShip";
import NotFound from "./components/404Page/NotFound";
import Faq from "./components/fAQPage/Faq";
import HelpCenter from "./components/helpCenter/HelpCenter";
import Login from "./components/LoginPage/Login";
import SignUp from "./components/SignUp/SignUp";
import UiElements from "./components/uiElementsPage/UiElements";
import PopulerCourseContent from "./components/home/home1/PopulerCourseContent";
import NotFoundContent from "./components/404Page/NotFoundContent";
import CourseCreateContext from "./components/context/courseContext/CourseCreateContext";

function App() {
  return (
    // <CourseCreateContext.Provider>
    <Routes>
      <Route path="/" element={<Navigate to="/home1/allCategories" />} />
      <Route path="/home1" element={<Home1 />}>
        <Route index element={<PopulerCourseContent />} />
        <Route path="allCategories" element={<PopulerCourseContent />} />
        <Route path="writting" element={<PopulerCourseContent />} />
        <Route path="business" element={<PopulerCourseContent />} />
        <Route path="photo" element={<PopulerCourseContent />} />
        <Route path="lifeStyle" element={<PopulerCourseContent />} />
        <Route path="illustration" element={<PopulerCourseContent />} />
        <Route path="design" element={<PopulerCourseContent />} />
        <Route path="animation" element={<PopulerCourseContent />} />

        <Route path="*" element={<NotFoundContent />} />
      </Route>
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
      <Route path="/courseSingle1/:courseId" element={<CourseSingle1 />} />
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
      <Route path="/survey" element={<Survey />} />
      <Route path="/eventList1" element={<EventList1 />} />
      <Route path="/eventList2" element={<EventList2 />} />
      <Route path="/eventSingle" element={<SingleEvent />} />
      <Route path="/blogList1" element={<BlogList1 />} />
      <Route path="/blogList2" element={<BlogList2 />} />
      <Route path="/blogList3" element={<BlogList3 />} />
      <Route path="/blogSingle" element={<SingleBlog />} />
      <Route path="/about1" element={<AboutPages1 />} />
      <Route path="/about2" element={<AboutPage2 />} />
      <Route path="/contact1" element={<ContactPage1 />} />
      <Route path="/contact2" element={<ContactPage2 />} />
      <Route path="/shopCart" element={<ShopCart />} />
      <Route path="/shopCheckout" element={<ShopCheckout />} />
      <Route path="/shopList" element={<ShopList />} />
      <Route path="/shopOrder" element={<ShopOrder />} />
      <Route path="/shopSingle" element={<ShopSingle />} />
      <Route path="/membershipPlans" element={<MemberShip />} />

      <Route path="/FAQs" element={<Faq />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/UIElements" element={<UiElements />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    // </CourseCreateContext.Provider>
  );
}

export default App;
