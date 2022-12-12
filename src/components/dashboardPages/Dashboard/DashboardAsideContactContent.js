import React from "react";

function DashboardAsideContactContent(props) {
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
      data-sidebar-menu-open="contacts"
      className={
        isContractOpen
          ? "sidebar-menu__item -sidebar-menu -sidebar-menu-opened"
          : "sidebar-menu__item -sidebar-menu "
      }
    >
      <div className="tabs -pills js-tabs">
        <div className="tabs__controls d-flex js-tabs-controls">
          <button
            className="tabs__button px-15 py-8 rounded-8 text-dark-1 js-tabs-button is-active"
            data-tab-target=".-tab-item-1"
            type="button"
          >
            Contacts
          </button>

          <button
            className="tabs__button px-15 py-8 rounded-8 text-dark-1 js-tabs-button"
            data-tab-target=".-tab-item-2"
            type="button"
          >
            Request
          </button>
        </div>

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-active">
            <div className="row x-gap-10 y-gap-10 items-center">
              <div className="col-auto">
                <img
                  src="/assets/img/dashboard/right-sidebar/contacts/1.png"
                  alt="image"
                />
              </div>
              <div className="col-auto">
                <div className="text-15 lh-12 fw-500 text-dark-1">
                  Darlene Robertson
                </div>
              </div>
            </div>
          </div>

          <div className="tabs__pane -tab-item-2">
            <div className="row x-gap-10 y-gap-10 items-center">
              <div className="col-auto">
                <img
                  src="/assets/img/dashboard/right-sidebar/contacts/1.png"
                  alt="image"
                />
              </div>
              <div className="col-auto">
                <div className="text-15 lh-12 fw-500 text-dark-1">
                  Darlene Robertson
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAsideContactContent;
