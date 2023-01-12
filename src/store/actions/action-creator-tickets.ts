import axios from "axios";

export const FETCH_TICKETS = "FETCH_TICKETS";
export const FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS";
export const FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const requestRetry = async ({ url, n }: any) => {
  try {
    console.log("requestRetry", url, n);
    return await fetch(url);
  } catch (e) {
    if (n <= 1) throw new Error();
    await sleep(1000);
    return await requestRetry({ url, n: n - 1 });
  }
};

export const fetchTickets = (searchId) => async (dispatch) => {
  try {
    console.log(searchId, "fetchtockets");
    const ticketsList = await axios.get(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    const { tickets, stop } = ticketsList.data;
    console.log(stop);
    dispatch({ type: FETCH_TICKETS_SUCCESS, payload: tickets });

    if (stop === false) {
      dispatch(fetchTickets(searchId));
    }
    console.log(stop);
  } catch (err) {
    // console.log(err);
    if (err.response) {
      requestRetry(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
        60
      );
    }
    // else {
    //   dispatch({ type: FETCH_TICKETS_ERROR, payload: "ошибка" });
    // }
  }
};
