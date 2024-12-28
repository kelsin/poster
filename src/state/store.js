import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "@/state/helpers";
import { postsReducer } from "@/state/posts";
import { savingReducer } from "@/state/saving";

export const rootReducer = combineReducers({
  posts: postsReducer,
  saving: savingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
