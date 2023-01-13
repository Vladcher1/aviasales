import React from "react";
import "./side-filter.scss";

import FilterItem from "../filter-item/filter-item";
import { makeId } from "../../utilities";
import {
  filterOptionsObject,
  filterOptionsTitleObject,
} from "../../constants/constants";

const newId = makeId();

const filtersArray = [
  {
    payload: filterOptionsObject.ALL,
    id: newId(),
    title: filterOptionsTitleObject.ALL_TITLE,
  },
  {
    payload: filterOptionsObject.NO_CONNECTING_FLIGHTS,
    id: newId(),
    title: filterOptionsTitleObject.NO_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: filterOptionsObject.ONE_CONNECTING_FLIGHTS,
    id: newId(),
    title: filterOptionsTitleObject.ONE_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: filterOptionsObject.TWO_CONNECTING_FLIGHTS,
    id: newId(),
    title: filterOptionsTitleObject.TWO_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: filterOptionsObject.THREE_CONNECTING_FLIGHTS,
    id: newId(),
    title: filterOptionsTitleObject.THREE_CONNECTING_FLIGHTS_TITLE,
  },
] as const;

const SideFilter: React.FC = () => {
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
