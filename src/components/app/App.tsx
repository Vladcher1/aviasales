import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import SideFilter from "../side-filter/side-filter";
import TabFilter from "../tab-filter/tab-filter";
import "../../img/Logo.svg";
import "./App.scss";
import { store } from "../../store/store";
import FlightsList from "../flights-list/flights-list";
import { fetchTickets } from "../../store/action-creators/action-creator-tickets";
import { State } from "../../types";

function App() {
  const dispatch: any = useDispatch();
  const search: any = useSelector((state: State) => state.searchId);

  useEffect(() => {
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
            </section>
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;
