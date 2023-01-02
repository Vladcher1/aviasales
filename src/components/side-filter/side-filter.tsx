import React from "react";
import "./side-filter.scss";
const SideFilter = () => {
  return (
    <div className="side-filter">
      <h5 className="side-filter__title">Количество пересадок</h5>
      <form className="side-filter__form">
        <div className="side-filter__filter-item">
          <label className="side-filter__label">
            <input className="checkbox" type="checkbox"></input>
            <span className="custom-checkbox "></span>
            <span className="checkbox-name ">Все</span>
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox"></input>
            <span className="custom-checkbox "></span>
            <span className="checkbox-name ">Без пересадок</span>
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox"></input>
            <span className="custom-checkbox "></span>
            <span className="checkbox-name ">1 пересадка</span>
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox"></input>
            <span className="custom-checkbox "></span>
            <span className="checkbox-name ">2 пересадки</span>
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox"></input>
            <span className="custom-checkbox "></span>
            <span className="checkbox-name ">3 пересадки</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SideFilter;
