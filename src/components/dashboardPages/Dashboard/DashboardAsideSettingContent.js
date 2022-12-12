import React from "react";

function DashboardAsideSettingContent(props) {
  const {
    isSideBarOpen,
    setSideBarOpen,
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
      data-sidebar-menu-open="settings"
      className={
        isSettingOpen
          ? "sidebar-menu__item -sidebar-menu -sidebar-menu-opened"
          : "sidebar-menu__item -sidebar-menu"
      }
    >
      <div className="text-17 text-dark-1 fw-500">Privacy</div>
      <div className="text-15 mt-5">You can restrict who can message you</div>
      <div className="mt-30">
        <div className="form-radio d-flex items-center">
          <div className="radio">
            <input type="radio" name="name" />
            <div className="radio__mark">
              <div className="radio__icon"></div>
            </div>
          </div>
          <div className="lh-1 text-13 text-dark-1 ml-12">My contacts only</div>
        </div>

        <div className="form-radio d-flex items-center mt-15">
          <div className="radio">
            <input type="radio" name="name" />
            <div className="radio__mark">
              <div className="radio__icon"></div>
            </div>
          </div>
          <div className="lh-1 text-13 text-dark-1 ml-12">
            My contacts and anyone in my courses
          </div>
        </div>

        <div className="form-radio d-flex items-center mt-15">
          <div className="radio">
            <input type="radio" name="name" />
            <div className="radio__mark">
              <div className="radio__icon"></div>
            </div>
          </div>
          <div className="lh-1 text-13 text-dark-1 ml-12">
            Anyone on the site
          </div>
        </div>
      </div>

      <div className="text-17 text-dark-1 fw-500 mt-30 mb-30">
        Notification preferences
      </div>
      <div className="form-switch d-flex items-center">
        <div className="switch">
          <input type="checkbox" />
          <span className="switch__slider"></span>
        </div>
        <div className="text-13 lh-1 text-dark-1 ml-10">Email</div>
      </div>

      <div className="text-17 text-dark-1 fw-500 mt-30 mb-30">General</div>
      <div className="form-switch d-flex items-center">
        <div className="switch">
          <input type="checkbox" />
          <span className="switch__slider"></span>
        </div>
        <div className="text-13 lh-1 text-dark-1 ml-10">Use enter to send</div>
      </div>
    </div>
  );
}

export default DashboardAsideSettingContent;
