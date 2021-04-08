import React from "react";

import Typography from "@material-ui/core/Typography";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ avatar, Icon, name, onClick, photoURL }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {/* <h3 className="headerOption__title">{title}</h3> */}

      {avatar && photoURL && <Avatar src={photoURL} />}
      {avatar && !photoURL && <Avatar>{user.email[0]}</Avatar>}

      <Typography variant="subtitle2" className="headerOption__title">
        {name}
      </Typography>
    </div>
  );
}

export default HeaderOption;
