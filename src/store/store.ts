import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { reducer } from "./reducers/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
