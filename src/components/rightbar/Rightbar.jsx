import React from "react";
import "./rightbar.css";
import { Users } from "../../DummyCredential";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar--container">
      <div className="rightbar--wrapper">
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
      </div>
    </div>
  );
}
