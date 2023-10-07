import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile--container">
        <Sidebar />
        <div className="profile--right">
          <div className="profile--righttop">
            <div className="profile--cover">
              <img
                className="profile--coverimage"
                src="assets/post/3.jpeg"
                alt="broken-image "
              />
              <img
                className="profile--userimage"
                src="assets/person/7.jpeg"
                alt="broken-image "
              />
            </div>
            <div className="profile--info">
              <h4 className="profile--infoname">Prince Sanguan</h4>
              <span className="profile--infodesc">Hello mga kaibigan!</span>
            </div>
          </div>
          <div className="profile--rightbottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
