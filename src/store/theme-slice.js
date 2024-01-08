import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "light" };
const themeSlice = createSlice({
  initialState,
  name: "themeSlice",
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      document.body.className =
        state.mode === "light" ? "light-mode" : "dark-mode";
    },
  },
});
const themeActions = themeSlice.actions;
export { themeSlice, themeActions };
