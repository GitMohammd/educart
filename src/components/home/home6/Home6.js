import React, { useEffect } from "react";
import Blog6 from "./Blog6";
import DownloadApp from "./DownloadApp";
import EducationCourses from "./EducationCourses";
import FeaturedCourses6 from "./FeaturedCourses6";
import Footer6 from "./Footer6";
import FreeAccount from "./FreeAccount";
import FutureLearn from "./FutureLearn";
import LearnNewSkill6 from "./LearnNewSkill6";
import LearnWithEducrat from "./LearnWithEducrat";
import Navigation6 from "./Navigation6";
// import TopCatagories6 from "./TopCatagories6";
import TrustedCompany6 from "./TrustedCompany6";
import TrustedTeacher from "./TrustedTeacher";
import UpcommingEvent6 from "./UpcommingEvent6";
import TopCatagories from "../home1/TopCotegories";

function Home6() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="barba-container" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation6 />

          <div className="content-wrapper  js-content-wrapper">
            <EducationCourses />
            <FutureLearn />
            <FeaturedCourses6 />
            <TrustedTeacher />
            <div class="svg-shape">
              <svg
                width="1925"
                height="261"
                viewBox="0 0 1925 261"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
                  fill="#F7F8FB"
                />
              </svg>
            </div>
            <TopCatagories />
            <LearnWithEducrat />
            <TrustedCompany6 />
            <div class="svg-shape">
              <svg
                width="1925"
                height="261"
                viewBox="0 0 1925 261"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
                  fill="#1A064F"
                />
              </svg>
            </div>
            <LearnNewSkill6 />
            <FreeAccount />
            <div class="svg-shape bg-light-4">
              <svg
                width="1925"
                height="261"
                viewBox="0 0 1925 261"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z"
                  fill="#6440FB"
                />
              </svg>
            </div>
            <UpcommingEvent6 />
            <Blog6 />
            <DownloadApp />
            <Footer6 />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home6;
