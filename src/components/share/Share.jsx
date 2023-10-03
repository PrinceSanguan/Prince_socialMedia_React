import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share--container">
      <div className="share--wrapper">
        <div className="share--top">
          <img
            className="share--profileimg"
            src="/assets/person/3.jpeg"
            alt="broken-image"
          />
          <input
            placeholder="Ano ang nasa utak mo?"
            type="text"
            className="share--input"
          />
        </div>
        <hr className="share--hr" />
        <div className="share--bottom">
          <div className="share--options">
            <div className="share--option">
              <PermMedia htmlColor="tomato" className="share--icon" />
              <span className="share--optiontext">Photo or Video</span>
            </div>
            <div className="share--option">
              <Label htmlColor="blue" className="share--icon" />
              <span className="share--optiontext">Tag</span>
            </div>
            <div className="share--option">
              <Room htmlColor="green" className="share--icon" />
              <span className="share--optiontext">Location</span>
            </div>
            <div className="share--option">
              <EmojiEmotions htmlColor="goldenrod" className="share--icon" />
              <span className="share--optiontext">Feelings</span>
            </div>
          </div>
          <button className="share--button">Share</button>
        </div>
      </div>
    </div>
  );
}
