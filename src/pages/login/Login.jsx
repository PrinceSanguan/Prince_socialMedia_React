import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login--container">
      <div className="login--wrapper">
        <div className="login--left">
          <h3 className="login--logo">Facebook</h3>
          <span className="login--desc">
            Connect with friends and the world around you on facebook.
          </span>
        </div>
        <div className="login--right">
          <div className="login--box">
            <input type="text" placeholder="Email" className="login--input" />
            <input
              type="password"
              placeholder="Password"
              className="login--input"
            />
            <button className="login--button">Log in</button>
            <span className="login--forgot">Forgot Password?</span>
            <button className="login--registerbutton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
