import React from "react";
import "./side-filter.scss";

import FilterItem from "../filter-item/filter-item";
import { makeId } from "../../utilities";
import {
  ALL,
  NO_CONNECTING_FLIGHTS,
  ONE_CONNECTING_FLIGHTS,
  TWO_CONNECTING_FLIGHTS,
  THREE_CONNECTING_FLIGHTS,
  ALL_TITLE,
  NO_CONNECTING_FLIGHTS_TITLE,
  ONE_CONNECTING_FLIGHTS_TITLE,
  TWO_CONNECTING_FLIGHTS_TITLE,
  THREE_CONNECTING_FLIGHTS_TITLE,
} from "../../constants/filters";

const newId = makeId();

const filtersArray = [
  { payload: ALL, id: newId(), title: ALL_TITLE },
  {
    payload: NO_CONNECTING_FLIGHTS,
    id: newId(),
    title: NO_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: ONE_CONNECTING_FLIGHTS,
    id: newId(),
    title: ONE_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: TWO_CONNECTING_FLIGHTS,
    id: newId(),
    title: TWO_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: THREE_CONNECTING_FLIGHTS,
    id: newId(),
    title: THREE_CONNECTING_FLIGHTS_TITLE,
  },
] as const;

const SideFilter: React.FC = () => {
  // console.log(filtersArray);
  const filterItems = filtersArray.map((obj) => {
    const { payload, id, title } = obj;
    return <FilterItem title={title} payload={payload} key={id} />;
  });

  return (
    <div className="side-filter">
      <h5 className="side-filter__title">Количество пересадок</h5>
      <form className="side-filter__form">
        <ul>{filterItems}</ul>
      </form>
    </div>
  );
};

export default SideFilter;
