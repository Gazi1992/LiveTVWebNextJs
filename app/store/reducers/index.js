import { combineReducers } from "redux";

// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import apiReducers from "./api";
import liveTVReducer from "./liveTV";
import moviesReducer from "./movies";
import otherReducers from "./others";
import userReducer from "./user";

export const rootReducer = combineReducers({
  movies: moviesReducer,
  liveTV: liveTVReducer,
  user: userReducer,
  others: otherReducers,
  ...apiReducers,
});
