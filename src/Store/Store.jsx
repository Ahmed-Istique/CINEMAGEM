import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Store/Reducers/movieSlices"

export const store = configureStore({
  reducer: {
    movieData:movieReducer
  },
});