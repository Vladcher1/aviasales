export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER" as const;
export const UNSET_VISIBILITY_FILTER = "UNSET_VISIBILITY_FILTER " as const;

export function setVisibilityFilter(filter: string) {
  //   console.log(filter);
  return { type: SET_VISIBILITY_FILTER, payload: filter };
}
