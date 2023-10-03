import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post({ post }) {
  console.log(post);
  return (
    <div className="post--container">
      <div className="post--wrapper">
        <div className="post--top">
          <div className="post--topleft">
            <img
              className="post--profileimg"
              src="/assets/person/5.jpeg"
              alt="broken-image"
            />
            <span className="post--username">Prince Sanguan</span>
            <span className="post--date">{post.date}</span>
          </div>
          <div className="post--topright">
            <MoreVert />
          </div>
        </div>
        <div className="post--center">
          <span className="post--text">{post?.desc}</span>
          <img
            className="post-img"
            src="/assets/post/1.jpeg"
            alt="broken-image"
          />
        </div>
        <div className="post--bottom">
          <div className="post--bottomleft">
            <img className="post--likeicon" src="/assets/like.png" alt="" />
            <img className="post--likeicon" src="/assets/heart.png" alt="" />
            <span className="post--likecounter">
              {post.like} people liked it
            </span>
          </div>
          <div className="post--bottomright">
            <span className="post--commenttext">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
