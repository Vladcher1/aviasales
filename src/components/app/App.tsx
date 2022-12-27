import React from "react";
import SideFilter from "../side-filter/side-filter";
import TabFilter from "../tab-filter/tab-filter";
import CheapestTabList from "../cheapest-tab-list/cheapest-tab-list";
import FastestTabList from "../fastest-tab-list/fastest-tab-list";
import "../../img/Logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="page-header">
          <a href="#">
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
            <CheapestTabList />
            {/* <FastestTabList /> */}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
