import {
  ALL,
  NO_CONNECTING_FLIGHTS,
  ONE_CONNECTING_FLIGHTS,
  TWO_CONNECTING_FLIGHTS,
  THREE_CONNECTING_FLIGHTS,
} from "./constants/constants";

export interface FiltersState {
  [ALL]: boolean;
  [NO_CONNECTING_FLIGHTS]: boolean;
  [ONE_CONNECTING_FLIGHTS]: boolean;
  [TWO_CONNECTING_FLIGHTS]: boolean;
  [THREE_CONNECTING_FLIGHTS]: boolean;
}

export interface TicketState {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}

export interface State {
  filters: FiltersState;
  tickets: TicketState[];
  loading: boolean;
  error: null | string;
  currentTab: string;
  currentFlights: number;
  searchId: string;
  isFetching: boolean;
}
export interface FilterAction {
  type: string;
  payload?: any;
}
export type FilterItemProps = {
  title: string;
  payload: string;
};
