import axios from "axios";

import {
  FETCH_TICKETS_SUCCESS,
  IS_FETCHING,
} from "../actions/actions";
import { State } from "../../types";
import { requestRetry } from "../../utilities";

export const fetchTickets =
  (searchId: Pick<State, "searchId">) => async (dispatch: any) => {
    try {
      const { data } = await axios.get(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
      );
      const { tickets, stop } = data;
      dispatch({
        type: FETCH_TICKETS_SUCCESS,
        payload: { tickets, isFetching: true },
      });
      if (stop === true) {
        dispatch({ type: IS_FETCHING, payload: false });
      }
      if (stop === false) {
        dispatch(fetchTickets(searchId));
      }
    } catch (err) {
      requestRetry(fetchTickets(searchId)(dispatch), 10);
    }
  };
