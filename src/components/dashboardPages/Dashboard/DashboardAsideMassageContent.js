import React from "react";

function DashboardAsideMassageContent(props) {
  const {
    isSideBarOpen,
    setSideBarOpen,
    isStarred,
    isGroup,
    isPrivate,
    isGroupOpen,
    isSettingOpen,
    isPrivateOpen,
    isStarredOpen,
    setStarred,
    setGroup,
    setPrivate,
    setStarredOpen,
    setGroupOpen,
    setPrivateOpen,
    setSettingOpen,
    isContractOpen,
    setContractOpen,
  } = props;
  return (
    <div
      data-sidebar-menu-open="messages-2"
      className={
        isStarredOpen
          ? "sidebar-menu__item -sidebar-menu -sidebar-menu-opened"
          : "sidebar-menu__item -sidebar-menu "
      }

      // className="sidebar-menu__item -sidebar-menu"
    >
      <div className="row x-gap-10 y-gap-10">
        <div className="col-auto">
          <img
            src="/assets/img/dashboard/right-sidebar/messages-2/1.png"
            alt="image"
          />
        </div>
        <div className="col">
          <div className="text-15 lh-12 fw-500 text-dark-1 pt-8">
            Arlene McCoy
          </div>
          <div className="text-14 lh-1 mt-5">Active</div>
        </div>
      </div>

      <div className="mt-20 pt-30 border-top-light">
        <div className="row y-gap-20">
          <div className="col-12">
            <div className="row x-gap-10 y-gap-10 items-center">
              <div className="col-auto">
                <img
                  src="/assets/img/dashboard/right-sidebar/messages-2/2.png"
                  alt="image"
                />
              </div>
              <div className="col-auto">
                <div className="text-15 lh-12 fw-500 text-dark-1">
                  Albert Flores
                </div>
              </div>
              <div className="col-auto">
                <div className="text-14 lh-1 ml-3">35 mins</div>
              </div>
            </div>
            <div className="bg-light-3 rounded-8 px-30 py-20 mt-15">
              How likely are you to recommend our company to your friends and
              family?
            </div>
          </div>

          <div className="col-12">
            <div className="row x-gap-10 y-gap-10 items-center justify-end">
              <div className="col-auto">
                <div className="text-14 lh-1 mr-3">35 mins</div>
              </div>
              <div className="col-auto">
                <div className="text-15 lh-12 fw-500 text-dark-1">You</div>
              </div>
              <div className="col-auto">
                <img
                  src="/assets/img/dashboard/right-sidebar/messages-2/3.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="text-right bg-light-7 -dark-bg-dark-2 text-purple-1 rounded-8 px-30 py-20 mt-15">
              How likely are you to recommend our company to your friends and
              family?
            </div>
          </div>

          <div className="col-12">
            <div className="row x-gap-10 y-gap-10 items-center">
              <div className="col-auto">
                <img
                  src="/assets/img/dashboard/right-sidebar/messages-2/3.png"
                  alt="image"
                />
              </div>
              <div className="col-auto">
                <div className="text-15 lh-12 fw-500 text-dark-1">
                  Cameron Williamson
                </div>
              </div>
              <div className="col-auto">
                <div className="text-14 lh-1 ml-3">35 mins</div>
              </div>
            </div>
            <div className="bg-light-3 rounded-8 px-30 py-20 mt-15">
              Ok, Understood!
            </div>
          </div>
        </div>
      </div>

      <div className="mt-30 pb-20">
        <form className="contact-form row y-gap-20" action="post">
          <div className="col-12">
            <textarea
              name="name"
              placeholder="Write a message"
              rows="7"
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="button -md -purple-1 text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardAsideMassageContent;
