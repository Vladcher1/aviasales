import {
  FETCH_TICKETS,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_SUCCESS,
} from "../actions/action-creator-tickets";
import { State, FilterAction } from "../../types";

import { initialState } from "./filter-reducer";

export const ticketsReducer = (
  state: State = initialState,
  action: FilterAction
) => {
  if (action.type === FETCH_TICKETS) {
    // console.log("reducer", action);

    return { ...state, loading: true, error: null, tickets: [] };
  }
  if (action.type === FETCH_TICKETS_SUCCESS) {
    // console.log("reducer success", action.payload);
    return { ...state, loading: false, error: null, tickets: action.payload };
  }
  if (action.type === FETCH_TICKETS_ERROR) {
    return { ...state, loading: false, error: action.payload, tickets: [] };
  }
  return state;
};
