import { ALL } from "../../constants/constants";
import {
  SET_VISIBILITY_FILTER,
  FETCH_TICKETS,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_SUCCESS,
  SET_TAB_FILTER,
  ADD_CURRENT_FLIGHTS,
  SET_SEARCH_ID,
} from "../actions/actions";
import { State, FilterAction } from "../../types";
import { initialState } from "../initial-state";

export const reducer = (state: State = initialState, action: FilterAction) => {
  const { type, payload }: FilterAction = action;
  const { currentFlights }: Pick<State, "currentFlights"> = state;
  const { filters }: any = state;
  if (type === SET_VISIBILITY_FILTER) {
    let result: any = { ...filters };
    if (payload === ALL) {
      if (filters.ALL) {
        Object.keys(result).forEach((filter) => {
          result[filter] = false;
        });
      } else if (!filters.ALL) {
        Object.keys(result).forEach((filter) => {
          result[filter] = true;
        });
      }
    }
    if (payload !== ALL) {
      result = { ...filters, [payload]: !filters[payload] };
    }
    const filtersWithoutAllTrue =
      result.NO_CONNECTING_FLIGHTS &&
      result.ONE_CONNECTING_FLIGHTS &&
      result.THREE_CONNECTING_FLIGHTS &&
      result.TWO_CONNECTING_FLIGHTS;

    if (filtersWithoutAllTrue) {
      result.ALL = true;
    } else {
      result.ALL = false;
    }
    return { ...state, filters: result };
  }
  if (action.type === FETCH_TICKETS) {
    return { ...state, loading: true, error: null, tickets: [] };
  }
  if (action.type === FETCH_TICKETS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      tickets: [...state.tickets, ...action.payload.tickets],
      isFetching: action.payload.isFetching,
    };
  }
  if (action.type === FETCH_TICKETS_ERROR) {
    return { ...state, loading: false, error: action.payload, tickets: [] };
  }
  if (action.type === SET_TAB_FILTER) {
    return { ...state, currentTab: action.payload };
  }
  if (action.type === ADD_CURRENT_FLIGHTS) {
    const newFlightsNumber = currentFlights + action.payload;
    return { ...state, currentFlights: newFlightsNumber };
  }
  if (action.type === SET_SEARCH_ID) {
    return { ...state, searchId: payload };
  }
  if (action.type === "IS_FETCHING") {
    return { ...state, isFetching: action.payload };
  }
  return state;
};
