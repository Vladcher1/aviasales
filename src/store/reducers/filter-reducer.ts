import {
  ALL,
  NO_CONNECTING_FLIGHTS,
  ONE_CONNECTING_FLIGHTS,
  TWO_CONNECTING_FLIGHTS,
  THREE_CONNECTING_FLIGHTS,
} from "../../constants/filters";
import { SET_VISIBILITY_FILTER } from "../actionCreator";
// если фильтра нет в массиве, тогда добавляем. если есть - убираем.
const initialState: any = {
  [ALL]: true,
  [NO_CONNECTING_FLIGHTS]: true,
  [ONE_CONNECTING_FLIGHTS]: true,
  [TWO_CONNECTING_FLIGHTS]: true,
  [THREE_CONNECTING_FLIGHTS]: true,
  loading: false,
  error: null,
};

export const filterReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  if (type === SET_VISIBILITY_FILTER) {
    const result = { ...state, [payload]: !state[payload] };

    if (payload === ALL) {
      Object.keys(result).forEach((filter) => {
        result[filter] = !result[filter];
      });
    }
    const filtersWithoutAll =
      result.NO_CONNECTING_FLIGHTS &&
      result.ONE_CONNECTING_FLIGHTS &&
      result.THREE_CONNECTING_FLIGHTS &&
      result.TWO_CONNECTING_FLIGHTS;

    if (filtersWithoutAll) {
      result.ALL = true;
    } else {
      result.ALL = false;
    }
    return result;
  }

  return state;
};
