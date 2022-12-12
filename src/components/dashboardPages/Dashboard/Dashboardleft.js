import React from "react";
import { Link, useLocation } from "react-router-dom";

function Dashboardleft({ isLeftBar }) {
  const location = useLocation();
  return (
    <div
      className={
        isLeftBar
          ? "dashboard -home-9 js-dashboard-home-9"
          : "dashboard -home-9 js-dashboard-home-9 -is-sidebar-hidden"
      }
      // className="dashboard -home-9 js-dashboard-home-9"
    >
      <div className="dashboard__sidebar scroll-bar-1">
        <div className="sidebar -dashboard">
          <div
            className={
              location.pathname === "/dashboards/dashboard"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <Link
              to={"/dashboards/dashboard"}
              className="d-flex items-center text-17 lh-1 fw-500 -dark-text-white"
            >
              <i className="text-20 icon-discovery mr-15"></i>
              Dashboard
            </Link>
          </div>

          <div
            className={
              location.pathname === "/dashboards/myCourses"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
            // className="sidebar__item -dark-bg-dark-2 -is-active"
          >
            <Link
              className="d-flex items-center text-17 lh-1 fw-500"
              to="/dashboards/myCourses"
            >
              <i className="text-20 icon-play-button mr-15"></i>
              My Courses
            </Link>
          </div>
          <div
            className={
              location.pathname === "/dashboards/bookmarks"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <Link
              to={"/dashboards/bookmarks"}
              className="d-flex items-center text-17 lh-1 fw-500"
            >
              <i className="text-20 icon-bookmark mr-15"></i>
              Bookmarks
            </Link>
          </div>

          <div
            className={
              location.pathname === "/dashboards/messages"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <Link
              to={"/dashboards/messages"}
              className="d-flex items-center text-17 lh-1 fw-500"
            >
              <i className="text-20 icon-message mr-15"></i>
              Messages
            </Link>
          </div>

          <div
            className={
              location.pathname === "/dashboards/addListing"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <Link
              to={"/dashboards/addListing"}
              className="d-flex items-center text-17 lh-1 fw-500"
            >
              <i className="text-20 icon-message mr-15"></i>
              Create Course
            </Link>
          </div>

          <div
            className={
              location.pathname === "/dashboards/reviews"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <Link
              to={"/dashboards/reviews"}
              className="d-flex items-center text-17 lh-1 fw-500"
            >
              <i className="text-20 icon-message mr-15"></i>
              Reviews
            </Link>
          </div>

          <div
            className={
              location.pathname === "/dashboards/settings"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <Link
              to={"/dashboards/settings"}
              className="d-flex items-center text-17 lh-1 fw-500"
            >
              <i className="text-20 icon-message mr-15"></i>
              Settings
            </Link>
          </div>

          <div
            className={
              location.pathname === "/dashboards/logout"
                ? "sidebar__item -dark-bg-dark-2 -is-active"
                : "sidebar__item -dark-bg-dark-2 "
            }
          >
            <a href="#" className="d-flex items-center text-17 lh-1 fw-500">
              <i className="text-20 icon-power mr-15"></i>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardleft;
