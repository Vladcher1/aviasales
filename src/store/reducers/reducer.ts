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
import { State, FilterAction, TicketState } from "../../types";
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
    if (state.currentTab === "cheapest") {
      const res = [...state.tickets, ...action.payload.tickets].sort(
        (prev, curr) => prev.price - curr.price
      );
      return {
        ...state,
        loading: false,
        error: null,
        tickets: res,
        isFetching: action.payload.isFetching,
      };
    }
    if (state.currentTab === "fastest") {
      const res = [...state.tickets, ...action.payload.tickets].sort(
        (prev, curr) =>
          prev.segments[0].duration +
          prev.segments[1].duration -
          (curr.segments[0].duration + curr.segments[1].duration)
      );
      return {
        ...state,
        loading: false,
        error: null,
        tickets: res,
        isFetching: action.payload.isFetching,
      };
    }
    if (state.currentTab === "optimal") {
      const arrCoeffTickets = [...state.tickets, ...action.payload.tickets].map(
        (ticket: TicketState) => {
          const coeffPrice = (ticket.price * 1) / -10000;

          const coeffDuration =
            ((ticket.segments[0].duration + ticket.segments[1].duration) * 1) /
            -10000;
          const coeff = coeffPrice + coeffDuration;
          return { ...ticket, coeff };
        }
      );
      const res = arrCoeffTickets.sort((prev, curr) => curr.coeff - prev.coeff);
      return {
        ...state,
        loading: false,
        error: null,
        tickets: res,
        isFetching: action.payload.isFetching,
      };
    }
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
