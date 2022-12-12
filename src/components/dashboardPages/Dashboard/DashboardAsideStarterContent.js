import React, { useState } from "react";

function DashboardAsideStarterContent(props) {
  const [isFirstOpen, setFirstOpen] = useState(false);
  const {
    isSideBarOpen,
    setSideBarOpen,
    isAside,
    isStarred,
    isGroup,
    isPrivate,
    isGroupOpen,
    isSettingOpen,
    isPrivateOpen,
    isMassageOpen,
    setStarred,
    setGroup,
    setPrivate,
    setMassageOpen,
    setGroupOpen,
    setPrivateOpen,
    setSettingOpen,
    isContractOpen,
    setContractOpen,
  } = props;
  return (
    <div
      data-sidebar-menu-open="messages"
      className={
        isStarred && !isMassageOpen
          ? "sidebar-menu__item -sidebar-menu -sidebar-menu-opened"
          : "sidebar-menu__item -sidebar-menu "
      }
      // className="sidebar-menu__item -sidebar-menu -sidebar-menu-opened"
    >
      <form className="search-field rounded-8 h-50" action="post">
        <input
          className="bg-light-3 pr-50"
          type="text"
          placeholder="Search Courses"
        />
        <button className="" type="submit">
          <div className="icon-search text-light-1 text-20"></div>
        </button>
      </form>

      <div className="accordion -block text-left pt-20 js-accordion">
        <div
          className={
            isFirstOpen
              ? "accordion__item border-light rounded-16  is-active"
              : "accordion__item border-light rounded-16 "
          }
        >
          <div
            onClick={() => setFirstOpen(!isFirstOpen)}
            className="accordion__button"
          >
            <div className="accordion__icon size-30 -dark-bg-dark-2 mr-10">
              <div className="icon d-flex items-center justify-center">
                <span className="lh-1 fw-500">2</span>
              </div>
              <div className="icon d-flex items-center justify-center">
                <span className="lh-1 fw-500">2</span>
              </div>
            </div>
            <span className="text-17 fw-500 text-dark-1 pt-3">Starred</span>
          </div>

          <div
            style={{ maxHeight: isFirstOpen ? "140px" : "0px" }}
            className="accordion__content"
          >
            <div
              onClick={() => {
                setMassageOpen(true);
                setSettingOpen(false);
                setContractOpen(false);
              }}
              className="accordion__content__inner pl-20 pr-20 pb-20"
            >
              <div
                data-sidebar-menu-target="messages-2"
                className="row x-gap-10 y-gap-10 pointer"
              >
                <div className="col-auto">
                  <img
                    src="/assets/img/dashboard/right-sidebar/messages/1.png"
                    alt="image"
                  />
                </div>
                <div className="col">
                  <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
                    Darlene Robertson
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    <span className="text-dark-1">You:</span> Hello
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-13 lh-12 pt-8">35 mins</div>
                </div>
              </div>

              <div
                data-sidebar-menu-target="messages-2"
                className="row x-gap-10 y-gap-10 pt-15 pointer"
              >
                <div className="col-auto">
                  <img
                    src="/assets/img/dashboard/right-sidebar/messages/1.png"
                    alt="image"
                  />
                </div>
                <div className="col">
                  <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
                    Darlene Robertson
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    <span className="text-dark-1">You:</span> Hello
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-13 lh-12 pt-8">35 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            !isGroup
              ? "accordion__item border-light rounded-16 "
              : "accordion__item border-light rounded-16  is-active"
          }
        >
          <div onClick={() => setGroup(!isGroup)} className="accordion__button">
            <div className="accordion__icon size-30 -dark-bg-dark-2 mr-10">
              <div className="icon d-flex items-center justify-center">
                <span className="lh-1 fw-500">2</span>
              </div>
              <div className="icon d-flex items-center justify-center">
                <span className="lh-1 fw-500">2</span>
              </div>
            </div>
            <span className="text-17 fw-500 text-dark-1 pt-3">Group</span>
          </div>

          <div
            style={{ maxHeight: isGroup ? "140px" : "0px" }}
            className="accordion__content"
          >
            <div
              onClick={() => {
                setMassageOpen(true);
                setSettingOpen(false);
                setContractOpen(false);
              }}
              className="accordion__content__inner pl-20 pr-20 pb-20"
            >
              <div
                data-sidebar-menu-target="messages-2"
                className="row x-gap-10 y-gap-10 pointer"
              >
                <div className="col-auto">
                  <img
                    src="/assets/img/dashboard/right-sidebar/messages/1.png"
                    alt="image"
                  />
                </div>
                <div className="col">
                  <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
                    Darlene Robertson
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    <span className="text-dark-1">You:</span> Hello
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-13 lh-12 pt-8">35 mins</div>
                </div>
              </div>

              <div
                data-sidebar-menu-target="messages-2"
                className="row x-gap-10 y-gap-10 pt-15 pointer"
              >
                <div className="col-auto">
                  <img
                    src="/assets/img/dashboard/right-sidebar/messages/1.png"
                    alt="image"
                  />
                </div>
                <div className="col">
                  <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
                    Darlene Robertson
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    <span className="text-dark-1">You:</span> Hello
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-13 lh-12 pt-8">35 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            !isPrivate
              ? "accordion__item border-light rounded-16 "
              : "accordion__item border-light rounded-16  is-active"
          }
        >
          <div
            onClick={() => setPrivate(!isPrivate)}
            className="accordion__button"
          >
            <div className="accordion__icon size-30 -dark-bg-dark-2 mr-10">
              <div className="icon d-flex items-center justify-center">
                <span className="lh-1 fw-500">2</span>
              </div>
              <div className="icon d-flex items-center justify-center">
                <span className="lh-1 fw-500">2</span>
              </div>
            </div>
            <span className="text-17 fw-500 text-dark-1 pt-3">Private</span>
          </div>

          <div
            style={{ maxHeight: isPrivate ? "140px" : "0px" }}
            className="accordion__content"
          >
            <div
              onClick={() => {
                setMassageOpen(true);
                setSettingOpen(false);
                setContractOpen(false);
              }}
              className="accordion__content__inner pl-20 pr-20 pb-20"
            >
              <div
                data-sidebar-menu-target="messages-2"
                className="row x-gap-10 y-gap-10 pointer"
              >
                <div className="col-auto">
                  <img
                    src="/assets/img/dashboard/right-sidebar/messages/1.png"
                    alt="image"
                  />
                </div>
                <div className="col">
                  <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
                    Darlene Robertson
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    <span className="text-dark-1">You:</span> Hello
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-13 lh-12 pt-8">35 mins</div>
                </div>
              </div>

              <div
                data-sidebar-menu-target="messages-2"
                className="row x-gap-10 y-gap-10 pt-15 pointer"
              >
                <div className="col-auto">
                  <img
                    src="/assets/img/dashboard/right-sidebar/messages/1.png"
                    alt="image"
                  />
                </div>
                <div className="col">
                  <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
                    Darlene Robertson
                  </div>
                  <div className="text-14 lh-1 mt-5">
                    <span className="text-dark-1">You:</span> Hello
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-13 lh-12 pt-8">35 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAsideStarterContent;
