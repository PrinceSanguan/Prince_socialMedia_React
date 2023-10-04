import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbar--friend">
      <div className="rightbar--profileimgcontainer">
        <img
          className="rightbar--profileimg"
          src={user.profilePicture}
          alt="broken-image"
        />
        <span className="rightbar--online"></span>
      </div>
      <span className="rightbar--username">{user.username}</span>
    </li>
  );
}
