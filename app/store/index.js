import { createStore, applyMiddleware } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log("Hydrate" + action.payload);
  } else {
    console.log("NotHydrate" + action.payload);
  }
  return rootReducer(state, action);
};

// create a makeStore function
export const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};
