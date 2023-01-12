import { SET_VISIBILITY_FILTER } from "../../constants/filters";

export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, payload: filter };
}

// export function addCurrentFlights() {
//   return {type: ADD_CURRENT_FLIGHTS, payload: }
// }
