import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar--container">
      <div className="topbar--left">
        <span className="topbar--logo">PrinceSocialMedia</span>
      </div>
      <div className="topbar--center">
        <div className="topbar--searchbar">
          <Search className="topbar--searchicon" />
          <input
            type="text"
            placeholder="Search for friends, post or video"
            className="topbar--searchinput"
          />
        </div>
      </div>
      <div className="topbar--right">
        <div className="topbar--links">
          <span className="topbar--linkshome">Homepage</span>
          <span className="topbar--linkshome">Timeline</span>
        </div>
        <div className="topbar--icons">
          <div className="topbar--iconitem">
            <Person />
            <span className="topbar--iconbadge">1</span>
          </div>
          <div className="topbar--iconitem">
            <Chat />
            <span className="topbar--iconbadge">2</span>
          </div>
          <div className="topbar--iconitem">
            <Notifications />
            <span className="topbar--iconbadge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbar--image" />
      </div>
    </div>
  );
}
