import React from "react";
import "./closefriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sidebar--friend">
      <img
        className="sidebar--friendimg"
        src={user.profilePicture}
        alt="broken-image"
      />
      <span className="sidebar--friendname">{user.username}</span>
    </li>
  );
}
