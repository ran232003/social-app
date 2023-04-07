import { createSlice } from "@reduxjs/toolkit";
const ColorSlice = createSlice({
  name: "color",
  initialState: { mode: "light" },
  reducers: {
    setMode(state, action) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export default ColorSlice;

export const colorAction = ColorSlice.actions;
