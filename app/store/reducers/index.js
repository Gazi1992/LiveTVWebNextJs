import { combineReducers } from "redux";
import apiReducers from "./api";
import liveTVReducer from "./liveTV";
import moviesReducer from "./movies";
import otherReducers from "./others";
import userAWSReducer from "./userAWS";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    liveTV: liveTVReducer,
    userAWS: userAWSReducer,
    others: otherReducers,
    ...apiReducers,
  })