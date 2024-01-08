import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme-slice";
import { userSlice } from "./users-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    githubUser: userSlice.reducer,
  },
});

export default store;
