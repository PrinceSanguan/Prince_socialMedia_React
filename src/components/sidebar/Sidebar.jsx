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
import { Users } from "../../DummyCredential";
import CloseFriend from "../closeFriend/CloseFriend";

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
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
