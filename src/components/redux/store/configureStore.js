// store/configureStore.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import data from "../data";

const reducers = {
  data,
};
const combinesReducers = combineReducers(reducers);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    let nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinesReducers(state, action);
  }
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
  preloadedState: false,
});

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper(makeStore);
