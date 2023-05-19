import { useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import AddPost from "../homePage/components/AddPost";
import FriendList from "../homePage/components/FriendList";
import LeftWidget from "../homePage/components/LeftWidget";
import PostList from "../homePage/components/PostList";
import "../homePage/HomePage.css";
const ProfilePage = () => {
  const [input, setInput] = useState("");
  const posts = useSelector((state) => {
    return state.post.posts;
  });
  const user = useSelector((state) => {
    return state.auth.user;
  });
  if (!user) {
    return <div className="profilepage">no user</div>;
  } else {
    return (
      <div className="profilepage">
        <div className="mainLeft">
          <LeftWidget user={user} />
          <FriendList user={user} />
        </div>
        <div className="mainCenter">
          <AddPost user={user} flag="profile" />
          <PostList posts={posts} />
        </div>
        {/* <div className="mainRight">
          <AddPost user={user} />
          <PostList />
        </div> */}
      </div>
    );
  }
};

export default ProfilePage;
