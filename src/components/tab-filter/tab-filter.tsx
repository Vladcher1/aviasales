import React from "react";
import "./tab-filter.scss";
import { useSelector, useDispatch } from "react-redux";

const TabFilter = () => {
  let buttonCheapest = "tab-filter__button cheapest";
  let buttonFastest = "tab-filter__button fastest";
  let buttonOptimal = "tab-filter__button optimal";

  // const getTabState = () => {
  const tabState = useSelector((state: any) => state.currentTab);
  //   return ticketsState;
  // };
  const dispatch = useDispatch();

  if (tabState === "fastest") {
    buttonFastest += " active";
  }
  if (tabState === "cheapest") {
    buttonCheapest += " active";
  }
  if (tabState === "optimal") {
    buttonOptimal += " active";
  }

  return (
    <div className="tab-filter-container tab-filter">
      <button
        type="button"
        className={buttonCheapest}
        onClick={() => {
          dispatch({ type: "SET_TAB_FILTER", payload: "cheapest" });
        }}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={buttonFastest}
        onClick={() => {
          dispatch({ type: "SET_TAB_FILTER", payload: "fastest" });
        }}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={buttonOptimal}
        onClick={() => {
          dispatch({ type: "SET_TAB_FILTER", payload: "optimal" });
        }}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default TabFilter;
