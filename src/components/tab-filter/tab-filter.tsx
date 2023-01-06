import React from "react";
import "./tab-filter.scss";

const TabFilter = () => (
  <div className="tab-filter-container tab-filter">
    <button className="tab-filter__button cheapest">Самый дешевый</button>
    <button className="tab-filter__button fastest">Самый быстрый</button>
    <button className="tab-filter__button optimal">Оптимальный</button>
  </div>
);

export default TabFilter;
