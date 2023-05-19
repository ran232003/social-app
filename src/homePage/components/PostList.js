import { Box, useTheme } from "@mui/material";
import React from "react";
import UserImage from "../../globalComponents/UserImage";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = (props) => {
  const { user } = props;
  const theme = useTheme();
  // const posts = useSelector((state) => {
  //   return state.post.posts;
  // });
  const { posts } = props;
  console.log(posts, "posts");
  return (
    <div>
      <Box>
        {posts.map((post) => {
          return (
            <PostItem
              picturePath={post.picturePath}
              location={post.location}
              likes={post.likes}
              lastName={post.lastName}
              firstName={post.firstName}
              description={post.description}
              id={post.id}
              userPicturePath={post.userPicturePath}
              key={post.picturePath}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default PostList;
