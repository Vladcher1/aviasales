import React from "react";
import "./flight-item.scss";
import "../../img/S7Logo.svg";
const FlightItem = () => {
  return (
    <div className="flight-item">
      <h4 className="flight-item__price">13 400 Р </h4>
      <img className="flight-item__logo" src="./S7Logo.svg" alt="" />
      <div className="flight-item__first-flight-time">
        <span className="flight-item__airports item-column-title">
          MOW – HKT
        </span>
        <span className="flight-item__departure-arrival-time item-column-info">
          10:45 – 08:00
        </span>
      </div>
      <div className="flight-item__first-flight-duration">
        <span className="flight-item__flight-duration-title item-column-title">
          В пути
        </span>
        <span className="flight-item__flight-duration item-column-info">
          21ч 15м
        </span>
      </div>
      <div className="flight-item__first-flight-connecting">
        <span className="flight-item__connecting-flights-title item-column-title">
          2 пересадки
        </span>
        <span className="flight-item__connecting-flights item-column-info">
          HKG, JNB
        </span>
      </div>
      <div className="flight-item__second-flight-time">
        <span className="flight-item__airports item-column-title">
          MOW – HKT
        </span>
        <span className="flight-item__departure-arrival-time item-column-info">
          11:20 – 00:50
        </span>
      </div>
      <div className="flight-item__second-flight-duration">
        <span className="flight-item__flight-duration-title item-column-title">
          В пути
        </span>
        <span className="flight-item__flight-duration item-column-info">
          13ч 30м
        </span>
      </div>
      <div className="flight-item__second-flight-connecting">
        <span className="flight-item__connecting-flights-title item-column-title">
          1 пересадка
        </span>
        <span className="flight-item__connecting-flights item-column-info">
          HKG
        </span>
      </div>
    </div>
  );
};

export default FlightItem;
