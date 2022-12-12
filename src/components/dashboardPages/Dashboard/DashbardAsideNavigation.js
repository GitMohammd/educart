import React from "react";

function DashbardAsideNavigation(props) {
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
    <div className="row items-center justify-between mb-30">
      <div className="col-auto">
        <div className="-sidebar-buttons">
          <button
            data-sidebar-menu-button="messages"
            className={
              isStarredOpen || isSettingOpen || isContractOpen
                ? "text-17 text-dark-1 fw-500 "
                : "text-17 text-dark-1 fw-500 -is-button-active"
            }
          >
            Messages
          </button>

          <button
            data-sidebar-menu-button="messages-2"
            data-sidebar-menu-target="messages"
            onClick={() => setStarredOpen(false)}
            className={
              isStarredOpen
                ? "d-flex items-center text-17 text-dark-1 fw-500 -is-button-active"
                : "d-flex items-center text-17 text-dark-1 fw-500 "
            }
          >
            <div className="icon-chevron-left text-11 text-purple-1 mr-10"></div>
            Messages
          </button>

          <button
            data-sidebar-menu-button="settings"
            data-sidebar-menu-target="messages"
            onClick={() => setSettingOpen(false)}
            className={
              isSettingOpen
                ? "d-flex items-center text-17 text-dark-1 fw-500 -is-button-active"
                : "d-flex items-center text-17 text-dark-1 fw-500 "
            }
          >
            <div className="icon-chevron-left text-11 text-purple-1 mr-10"></div>
            Settings
          </button>

          <button
            data-sidebar-menu-button="contacts"
            data-sidebar-menu-target="messages"
            onClick={() => setContractOpen(false)}
            className={
              isContractOpen
                ? "d-flex items-center text-17 text-dark-1 fw-500 -is-button-active"
                : "d-flex items-center text-17 text-dark-1 fw-500 "
            }
          >
            <div className="icon-chevron-left text-11 text-purple-1 mr-10"></div>
            Contacts
          </button>
        </div>
      </div>

      <div className="col-auto">
        <div className="row x-gap-10">
          <div className="col-auto">
            <button
              data-sidebar-menu-target="settings"
              onClick={() => setSettingOpen(true)}
              className="button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full"
            >
              <div className="icon-setting text-16"></div>
            </button>
          </div>
          <div className="col-auto">
            <button
              data-sidebar-menu-target="contacts"
              onClick={() => setContractOpen(true)}
              className="button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full"
            >
              <div className="icon-friend text-16"></div>
            </button>
          </div>
          <div className="col-auto">
            <button
              onClick={() => setSideBarOpen(false)}
              data-el-toggle=".js-msg-toggle"
              className="button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full"
            >
              <div className="icon-close text-14"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashbardAsideNavigation;
