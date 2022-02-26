import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import apiReducers from "./api";
import liveTVReducer from "./liveTV";
import moviesReducer from "./movies";
import otherReducers from "./others";
import userReducer from "./user";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    movies: moviesReducer,
    liveTV: liveTVReducer,
    user: userReducer,
    others: otherReducers,
    ...apiReducers,
  })
);
