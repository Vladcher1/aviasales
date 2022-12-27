import React from "react";
import "./flight-item.scss";
import "../../img/Logo.svg";
const FlightItem = () => {
  return (
    <div className="flight-item">
      <div className="flight-item__header">
        <h4 className="flight-item__price">13 400 Р </h4>
        <img src="./Logo.svg" alt="" />
      </div>
      <div className="flight-item__first-flight">
        <span className="flight-item__airports">MOW – HKT</span>
        <span className="flight-item__departure-arrival-time">
          10:45 – 08:00
        </span>
        <span className="flight-item__flight-duration-title">В пути</span>
        <span className="flight-item__flight-duration">21ч 15м</span>
        <span className="flight-item__connecting-flights-title">
          2 пересадки
        </span>
        <span className="flight-item__connecting-flights">HKG, JNB</span>
      </div>
      <div className="flight-second-flight">
        <span className="flight-item__airports">MOW – HKT</span>
        <span className="flight-item__departure-arrival-time">
          11:20 – 00:50
        </span>
        <span className="flight-item__flight-duration-title">В пути</span>
        <span className="flight-item__flight-duration">13ч 30м</span>
        <span className="flight-item__connecting-flights-title">
          1 пересадка
        </span>
        <span className="flight-item__connecting-flights">HKG</span>
      </div>
    </div>
  );
};

export default FlightItem;
