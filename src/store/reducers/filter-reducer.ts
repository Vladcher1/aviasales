import {
  ALL,
  NO_CONNECTING_FLIGHTS,
  ONE_CONNECTING_FLIGHTS,
  TWO_CONNECTING_FLIGHTS,
  THREE_CONNECTING_FLIGHTS,
  SET_VISIBILITY_FILTER,
} from "../../constants/filters";
import { State, FilterAction } from "../../types";
import {
  FETCH_TICKETS,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_SUCCESS,
} from "../actions/action-creator-tickets";

export const initialState: State = {
  filters: {
    [ALL]: true,
    [NO_CONNECTING_FLIGHTS]: true,
    [ONE_CONNECTING_FLIGHTS]: true,
    [TWO_CONNECTING_FLIGHTS]: true,
    [THREE_CONNECTING_FLIGHTS]: true,
  },
  tickets: [],
  loading: false,
  error: null,
  currentTab: "cheapest",
  currentFlights: 5,
  searchId: "",
};

export const filterReducer = (
  state: State = initialState,
  action: FilterAction
) => {
  const { type, payload } = action;
  const {
    filters,
    currentTab,
    currentFlights,
  }: Pick<State, "filters" | "currentTab"> = state;

  if (type === SET_VISIBILITY_FILTER) {
    // const result = { ...filters, [payload]: !filters[payload] };
    let result = { ...filters };
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
    // console.log("reducer success", action.payload);
    return {
      ...state,
      loading: false,
      error: null,
      tickets: [...state.tickets, ...action.payload],
    };
  }
  if (action.type === FETCH_TICKETS_ERROR) {
    return { ...state, loading: false, error: action.payload, tickets: [] };
  }
  if (action.type === "SET_TAB_FILTER") {
    return { ...state, currentTab: action.payload };
  }
  if (action.type === "ADD_CURRENT_FLIGHTS") {
    const newFlightsNumber = currentFlights + action.payload;
    return { ...state, currentFlights: newFlightsNumber };
  }
  if (action.type === "SET_SEARCH_ID") {
    return { ...state, searchId: payload };
  }
  return state;
};

// { type: "SET_TAB_FILTER", payload: "cheapest" }
