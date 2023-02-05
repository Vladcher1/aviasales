import { FETCH_TICKETS_ERROR } from "./store/actions/actions";
import { store } from "./store/store";

export const makeId = () => {
  let initialId = 0;
  return () => initialId++;
};

export const requestRetry: any = async (url: string, n: number) => {
  try {
    return await fetch(url);
  } catch (e) {
    if (n <= 1) store.dispatch({ type: FETCH_TICKETS_ERROR, payload: e });
    const retry = await requestRetry(url, n - 1);
    return retry;
  }
};
