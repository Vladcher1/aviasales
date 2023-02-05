import React from "react";
import "./side-filter.scss";

import FilterItem from "../filter-item/filter-item";
import {
  filterOptionsObject,
  filterOptionsTitleObject,
} from "../../constants/constants";

const filtersArray = [
  {
    payload: filterOptionsObject.ALL,
    title: filterOptionsTitleObject.ALL_TITLE,
  },
  {
    payload: filterOptionsObject.NO_CONNECTING_FLIGHTS,
    title: filterOptionsTitleObject.NO_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: filterOptionsObject.ONE_CONNECTING_FLIGHTS,
    title: filterOptionsTitleObject.ONE_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: filterOptionsObject.TWO_CONNECTING_FLIGHTS,
    title: filterOptionsTitleObject.TWO_CONNECTING_FLIGHTS_TITLE,
  },
  {
    payload: filterOptionsObject.THREE_CONNECTING_FLIGHTS,
    title: filterOptionsTitleObject.THREE_CONNECTING_FLIGHTS_TITLE,
  },
] as const;

const SideFilter: React.FC = () => (
  <div className="side-filter">
    <h5 className="side-filter__title">Количество пересадок</h5>
    <form className="side-filter__form">
      <ul>
        {filtersArray.map(({ payload, title }) => (
          <FilterItem title={title} payload={payload} key={title} />
        ))}
      </ul>
    </form>
  </div>
);

export default SideFilter;
