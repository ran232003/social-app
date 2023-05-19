import { useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import AddPost from "./components/AddPost";
import FriendList from "./components/FriendList";
import LeftWidget from "./components/LeftWidget";
import PostList from "./components/PostList";
import "./HomePage.css";
import RightWidget from "./components/RightWidget";
const HomePage = () => {
  const posts = useSelector((state) => {
    return state.post.posts;
  });
  const [input, setInput] = useState("");
  const user = useSelector((state) => {
    return state.auth.user;
  });
  if (!user) {
    return <div className="homepage">no user</div>;
  } else {
    return (
      <div className="homepage">
        <div className="mainLeft">
          <LeftWidget user={user} />
        </div>
        <div className="mainCenter">
          <AddPost user={user} flag="homepage" />
          <PostList posts={posts} />
        </div>
        <div className="mainRight">
          <RightWidget />
          <FriendList user={user} />
        </div>
      </div>
    );
  }
};

export default HomePage;
