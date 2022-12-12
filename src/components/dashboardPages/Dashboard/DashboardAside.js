import React, { useState } from "react";
import DashbardAsideNavigation from "./DashbardAsideNavigation";
import DashboardAsideContactContent from "./DashboardAsideContactContent";
import DashboardAsideMassageContent from "./DashboardAsideMassageContent";
import DashboardAsideSettingContent from "./DashboardAsideSettingContent";
import DashboardAsideStarterContent from "./DashboardAsideStarterContent";

function DashboardAside({ isSideBarOpen, setSideBarOpen }) {
  const [isStarred, setStarred] = useState(true);
  const [isGroup, setGroup] = useState(false);
  const [isPrivate, setPrivate] = useState(false);
  const [isMassageOpen, setMassageOpen] = useState(false);
  const [isGroupOpen, setGroupOpen] = useState(false);
  const [isPrivateOpen, setPrivateOpen] = useState(false);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isContractOpen, setContractOpen] = useState(false);

  return (
    <aside
      className={
        isSideBarOpen
          ? "sidebar-menu toggle-element js-msg-toggle js-dsbh-sidebar-menu -is-el-visible"
          : "sidebar-menu toggle-element js-msg-toggle js-dsbh-sidebar-menu "
      }
    >
      <div className="sidebar-menu__bg"></div>

      <div className="sidebar-menu__content scroll-bar-1 py-30 px-40 sm:py-25 sm:px-20 bg-white -dark-bg-dark-1">
        <DashbardAsideNavigation
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
          isStarred={isStarred}
          isGroup={isGroup}
          isPrivate={isPrivate}
          isGroupOpen={isGroupOpen}
          isSettingOpen={isSettingOpen}
          isPrivateOpen={isPrivateOpen}
          isMassageOpen={isMassageOpen}
          setStarred={setStarred}
          setGroup={setGroup}
          setPrivate={setPrivate}
          setMassageOpen={setMassageOpen}
          setGroupOpen={setGroupOpen}
          setPrivateOpen={setPrivateOpen}
          setSettingOpen={setSettingOpen}
          isContractOpen={isContractOpen}
          setContractOpen={setContractOpen}
        />
        <div className="relative js-menu-switch">
          <DashboardAsideStarterContent
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
            isStarred={isStarred}
            isGroup={isGroup}
            isPrivate={isPrivate}
            isGroupOpen={isGroupOpen}
            isSettingOpen={isSettingOpen}
            isPrivateOpen={isPrivateOpen}
            isMassageOpen={isMassageOpen}
            setStarred={setStarred}
            setGroup={setGroup}
            setPrivate={setPrivate}
            setMassageOpen={setMassageOpen}
            setGroupOpen={setGroupOpen}
            setPrivateOpen={setPrivateOpen}
            setSettingOpen={setSettingOpen}
            isContractOpen={isContractOpen}
            setContractOpen={setContractOpen}
          />

          <DashboardAsideMassageContent
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
            isStarred={isStarred}
            isGroup={isGroup}
            isPrivate={isPrivate}
            isGroupOpen={isGroupOpen}
            isSettingOpen={isSettingOpen}
            isPrivateOpen={isPrivateOpen}
            isMassageOpen={isMassageOpen}
            setStarred={setStarred}
            setGroup={setGroup}
            setPrivate={setPrivate}
            setMassageOpen={setMassageOpen}
            setGroupOpen={setGroupOpen}
            setPrivateOpen={setPrivateOpen}
            setSettingOpen={setSettingOpen}
            isContractOpen={isContractOpen}
            setContractOpen={setContractOpen}
          />
          <DashboardAsideContactContent
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
            isStarred={isStarred}
            isGroup={isGroup}
            isPrivate={isPrivate}
            isGroupOpen={isGroupOpen}
            isSettingOpen={isSettingOpen}
            isPrivateOpen={isPrivateOpen}
            isMassageOpen={isMassageOpen}
            setStarred={setStarred}
            setGroup={setGroup}
            setPrivate={setPrivate}
            setMassageOpen={setMassageOpen}
            setGroupOpen={setGroupOpen}
            setPrivateOpen={setPrivateOpen}
            setSettingOpen={setSettingOpen}
            isContractOpen={isContractOpen}
            setContractOpen={setContractOpen}
          />

          <DashboardAsideSettingContent
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
            isStarred={isStarred}
            isGroup={isGroup}
            isPrivate={isPrivate}
            isGroupOpen={isGroupOpen}
            isSettingOpen={isSettingOpen}
            isPrivateOpen={isPrivateOpen}
            isMassageOpen={isMassageOpen}
            setStarred={setStarred}
            setGroup={setGroup}
            setPrivate={setPrivate}
            setMassageOpen={setMassageOpen}
            setGroupOpen={setGroupOpen}
            setPrivateOpen={setPrivateOpen}
            setSettingOpen={setSettingOpen}
            isContractOpen={isContractOpen}
            setContractOpen={setContractOpen}
          />
        </div>
      </div>
    </aside>
  );
}

export default DashboardAside;
