import {
  ALL,
  NO_CONNECTING_FLIGHTS,
  ONE_CONNECTING_FLIGHTS,
  TWO_CONNECTING_FLIGHTS,
  THREE_CONNECTING_FLIGHTS,
} from "../constants/constants";
import { State } from "../types";

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
