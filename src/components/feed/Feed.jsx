import React from "react";
import "./feed.css";
import Share from "../share/Share";

export default function Feed() {
  return (
    <div className="feed--container">
      <div className="feed--wrapper">
        <Share />
      </div>
    </div>
  );
}
