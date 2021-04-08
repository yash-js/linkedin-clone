import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../fireabase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search here..." type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} name="Home" />

        <HeaderOption Icon={SupervisorAccountIcon} name="My Network" />

        <HeaderOption Icon={BusinessCenterIcon} name="Jobs" />

        <HeaderOption Icon={ChatIcon} name="Messaging" />

        <HeaderOption Icon={NotificationsIcon} name="Notifications" />

        <HeaderOption
          onClick={logoutApp}
          avatar={true}
          photoURL={user.photoURL}
          name={user.displayName}
        />
      </div>
    </div>
  );
}

export default Header;
