import React from "react";
import "./side-filter.scss";
const SideFilter = () => {
  return (
    <div className="side-filter">
      <h5 className="side-filter__title">Количество пересадок</h5>
      <form className="side-filter__form">
        <div className="side-filter__filter-item">
          <label className="side-filter__label">
            <input className="changed" type="checkbox" />
            <span className="custom-checkbox "></span>
            Все
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox" />
            <span className="custom-checkbox "></span>
            Без пересадок
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox" />
            <span className="custom-checkbox "></span>1 пересадка
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox" />
            <span className="custom-checkbox "></span>2 пересадки
          </label>
        </div>
        <div className="side-filter__filter-item">
          <label>
            <input className="checkbox" type="checkbox" />
            <span className="custom-checkbox "></span>3 пересадки
          </label>
        </div>
      </form>
    </div>
  );
};

export default SideFilter;
