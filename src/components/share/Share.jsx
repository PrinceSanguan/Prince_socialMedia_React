import React from "react";
import "./share.css";

export default function Share() {
  return (
    <div className="share--container">
      <div className="share--wrapper">
        <div className="share--top">
          <img
            className="share--profileimg"
            src="/assets/person/1.jpeg"
            alt="broken-image"
          />
          <input
            placeholder="Ano ang nasa utak mo?"
            type="text"
            className="share--input"
          />
        </div>
        <div className="share--bottom"></div>
      </div>
    </div>
  );
}
