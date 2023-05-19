import { createSlice } from "@reduxjs/toolkit";
const PostSlice = createSlice({
  name: "post",
  initialState: { posts: [], myPosts: [] },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setMyPosts(state, action) {
      state.posts = action.payload;
    },
    updatePost(state, action) {
      let updatePost = action.payload;
      let updatedPosts = state.posts.map((post) => {
        //if the same id we will return the payload
        //that way we will take the update post and all the rest
        if (post.id === updatePost.id) {
          return updatePost;
        } else {
          return post;
        }
      });
      state.posts = updatedPosts;
    },
  },
});

export default PostSlice;

export const postAction = PostSlice.actions;
