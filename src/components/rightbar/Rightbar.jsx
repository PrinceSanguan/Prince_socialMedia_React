import React from "react";
import "./rightbar.css";
import { Users } from "../../DummyCredential";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbar--birthdaycontainer">
          <img
            className="rightbar--birthdayimg"
            src="/assets/gift.png"
            alt="broken-image"
          />
          <span className="rightbar--birthdaytext">
            <b>Juaquin Bernardo</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img
          className="rightbar--ad"
          src="/assets/ad.png"
          alt="broken--image"
        />
        <h4 className="rightbar--title">Online Friends</h4>
        <ul className="rightbar--friendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar--title">User Information</h4>
        <div className="rightbar--info">
          <div className="rightbar--infoitem">
            <span className="rightbar--infokey">City:</span>
            <span className="rightbar--infovalue">Silang Cavite</span>
          </div>
          <div className="rightbar--infoitem">
            <span className="rightbar--infokey">From:</span>
            <span className="rightbar--infovalue">Manila</span>
          </div>
          <div className="rightbar--infoitem">
            <span className="rightbar--infokey">Relationship:</span>
            <span className="rightbar--infovalue">Married</span>
          </div>
        </div>
        <h4 className="rightbar--title">User Friends</h4>
        <div className="rightbar--followings">
          <div className="rightbar--following">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbar--followingimg"
            />
            <span className="rightbar--followingname">Prince Sanguan</span>
          </div>
          <div className="rightbar--following">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbar--followingimg"
            />
            <span className="rightbar--followingname">Prince Sanguan</span>
          </div>
          <div className="rightbar--following">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbar--followingimg"
            />
            <span className="rightbar--followingname">Prince Sanguan</span>
          </div>
          <div className="rightbar--following">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbar--followingimg"
            />
            <span className="rightbar--followingname">Prince Sanguan</span>
          </div>
          <div className="rightbar--following">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbar--followingimg"
            />
            <span className="rightbar--followingname">Prince Sanguan</span>
          </div>
          <div className="rightbar--following">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbar--followingimg"
            />
            <span className="rightbar--followingname">Prince Sanguan</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar--container">
      <div className="rightbar--wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
