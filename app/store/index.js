import { createStore, applyMiddleware } from "redux";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { useMemo } from "react";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const reducer = (state, action) => {
//   // if (action.type === HYDRATE) {
//   //   console.log("Hydrate" + action.payload);
//   // } else {
//   //   console.log("NotHydrate" + action.payload);
//   // }
//   return rootReducer(state, action);
// // };

const persistConfig = {
  key: "primary",
  storage,
  // whitelist: ['exampleData'], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function makeStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
