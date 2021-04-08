import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

// https://static-exp1.licdn.com/sc/h/9e0ckeb27mzi70ne80f4hv7il
function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80"
          alt=""
        />
        {user.photoURL ? (
          <Avatar src={user.photoURL} />
        ) : (
          <Avatar>{user.email[0]}</Avatar>
        )}

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed Your Profile?</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post:</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
      </div>{" "}
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("linkedinclone")}
        {recentItem("reactjsjobs")}
        {recentItem("frontenddeveloper")}
      </div>
    </div>
  );
}

export default Sidebar;
