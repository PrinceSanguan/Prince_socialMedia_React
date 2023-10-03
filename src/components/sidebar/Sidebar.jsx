import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar--container">
      <div className="sidebar--wrapper">
        <ul className="sidebar--list">
          <li className="sidebar--listitem">
            <RssFeed className="sidebar--icon" />
            <span className="sidebar--listitemtext">Feed</span>
          </li>
          <li className="sidebar--listitem">
            <Chat className="sidebar--icon" />
            <span className="sidebar--listitemtext">Chats</span>
          </li>
          <li className="sidebar--listitem">
            <PlayCircle className="sidebar--icon" />
            <span className="sidebar--listitemtext">Videos</span>
          </li>
          <li className="sidebar--listitem">
            <Group className="sidebar--icon" />
            <span className="sidebar--listitemtext">Groups</span>
          </li>
          <li className="sidebar--listitem">
            <Bookmark className="sidebar--icon" />
            <span className="sidebar--listitemtext">Bookmarks</span>
          </li>
          <li className="sidebar--listitem">
            <HelpOutline className="sidebar--icon" />
            <span className="sidebar--listitemtext">Questions</span>
          </li>
          <li className="sidebar--listitem">
            <WorkOutline className="sidebar--icon" />
            <span className="sidebar--listitemtext">Jobs</span>
          </li>
          <li className="sidebar--listitem">
            <Event className="sidebar--icon" />
            <span className="sidebar--listitemtext">Events</span>
          </li>
          <li className="sidebar--listitem">
            <School className="sidebar--icon" />
            <span className="sidebar--listitemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebar--button">Show More</button>
        <hr className="sidebar--hr" />
        <ul className="sidebar--friendlist">
          <li className="sidebar--friend">
            <img
              className="sidebar--friendimg"
              src="/assets/person/2.jpeg"
              alt="broken-image"
            />
            <span className="sidebar--friendname">Prince Sanguan</span>
          </li>
          <li className="sidebar--friend">
            <img
              className="sidebar--friendimg"
              src="/assets/person/2.jpeg"
              alt="broken-image"
            />
            <span className="sidebar--friendname">JohnPaul Aquino</span>
          </li>
          <li className="sidebar--friend">
            <img
              className="sidebar--friendimg"
              src="/assets/person/2.jpeg"
              alt="broken-image"
            />
            <span className="sidebar--friendname">Vic Sotto</span>
          </li>
          <li className="sidebar--friend">
            <img
              className="sidebar--friendimg"
              src="/assets/person/2.jpeg"
              alt="broken-image"
            />
            <span className="sidebar--friendname">Jordan Clarkson</span>
          </li>
          <li className="sidebar--friend">
            <img
              className="sidebar--friendimg"
              src="/assets/person/2.jpeg"
              alt="broken-image"
            />
            <span className="sidebar--friendname">Scottie Thompson</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
