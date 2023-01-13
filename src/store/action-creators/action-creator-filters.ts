import { SET_VISIBILITY_FILTER } from "../actions/actions";

export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, payload: filter };
}
