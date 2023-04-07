import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: { user: null, friends: [] },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
    setFriends(state, action) {
      state.friends = action.payload;
    },
  },
});

export default AuthSlice;

export const authAction = AuthSlice.actions;
