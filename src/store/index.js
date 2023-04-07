import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import ColorSlice from "./colorSlice";
import PostSlice from "./postsSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    mode: ColorSlice.reducer,
    post: PostSlice.reducer,
  },
});
export default store;
