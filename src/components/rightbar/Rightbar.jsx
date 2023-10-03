import React from "react";
import "./rightbar.css";

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
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
          <li className="rightbar--friend">
            <div className="rightbar--profileimgcontainer">
              <img
                className="rightbar--profileimg"
                src="/assets/person/3.jpeg"
                alt="broken-image"
              />
              <span className="rightbar--online"></span>
            </div>
            <span className="rightbar--username">John Cena</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
