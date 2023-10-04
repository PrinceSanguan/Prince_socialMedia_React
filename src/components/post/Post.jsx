import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../DummyCredential";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
  };

  return (
    <div className="post--container">
      <div className="post--wrapper">
        <div className="post--top">
          <div className="post--topleft">
            <img
              className="post--profileimg"
              src={Users.filter((u) => u.id === post.id)[0].profilePicture}
              alt="broken-image"
            />
            <span className="post--username">
              <b>{Users.filter((u) => u.id === post.id)[0].username}</b>
            </span>
            <span className="post--date">{post.date}</span>
          </div>
          <div className="post--topright">
            <MoreVert />
          </div>
        </div>
        <div className="post--center">
          <span className="post--text">{post?.desc}</span>
          <img className="post-img" src={post.photo} alt="broken-image" />
        </div>
        <div className="post--bottom">
          <div className="post--bottomleft">
            <img
              className="post--likeicon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="post--likeicon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="post--likecounter">{like} people liked it</span>
          </div>
          <div className="post--bottomright">
            <span className="post--commenttext">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
