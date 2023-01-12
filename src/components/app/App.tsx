import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SideFilter from "../side-filter/side-filter";
import TabFilter from "../tab-filter/tab-filter";
import "../../img/Logo.svg";
import "./App.scss";
import { store } from "../../store/store";
import FlightsList from "../flights-list/flights-list";
import {
  FETCH_TICKETS,
  fetchTickets,
} from "../../store/actions/action-creator-tickets";

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchId);

  const getSearchId = async () => {
    const response = await axios.get(
      "https://aviasales-test-api.kata.academy/search"
    );
    const { searchId } = response.data;
    // id = searchId;
    console.log(searchId);
    dispatch({ type: "SET_SEARCH_ID", payload: searchId });
  };

  useEffect(() => {
    getSearchId();
    // dispatch({ type: FETCH_TICKETS });
  }, []);

  useEffect(() => {
    // getSearchId();
    // dispatch({ type: FETCH_TICKETS });
    dispatch(fetchTickets(search));
  }, [search]);

  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-container">
          <header className="page-header">
            <a href="/#">
              <img
                className="page-header__logo"
                src="./Logo.svg"
                alt="aviasales logo"
              />
            </a>
          </header>
          <main className="page-main">
            <section className="page-main__side-filter-container">
              <SideFilter />
            </section>
            <section className="page-main__flights-list">
              <TabFilter />
              <FlightsList />
              {/* <ShowMoreButton /> */}
            </section>
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;
