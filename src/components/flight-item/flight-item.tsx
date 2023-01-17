import "./flight-item.scss";
import { format, add } from "date-fns";

import "../../img/S7Logo.svg";
import { TicketState } from "../../types";

const FlightItem = ({
  price,
  carrier,
  segments,
}: Pick<TicketState, "price" | "carrier" | "segments">) => {
  const priceFmt = new Intl.NumberFormat("ru-RU").format(price);

  const startTimeFirst = format(new Date(segments[0].date), "HH:mm");
  const finishedTimeFirst = format(
    add(new Date(segments[0].date), {
      minutes: segments[0].duration,
    }),
    "HH:mm"
  );

  const durationFirst = format(
    new Date(0, 0, 0, 0, segments[0].duration, 0),
    "HHч mmм"
  );
  const durationSecond = format(
    new Date(0, 0, 0, 0, segments[1].duration, 0),
    "HHч mmм"
  );

  let connectingFlightsTextFirst;
  if (segments[0].stops.length === 0) {
    connectingFlightsTextFirst = " без пересадок";
  }
  if (segments[0].stops.length === 1) {
    connectingFlightsTextFirst = " пересадка";
  }
  if (
    segments[0].stops.length === 2 ||
    segments[0].stops.length === 3 ||
    segments[0].stops.length === 4
  ) {
    connectingFlightsTextFirst = " пересадки";
  }

  const startTimesecond = format(new Date(segments[1].date), "HH:mm");
  const finishedTimeSecond = format(
    add(new Date(segments[1].date), {
      minutes: segments[1].duration,
    }),
    "HH:mm"
  );

  let connectingFlightsTextSecond;
  if (segments[1].stops.length === 0) {
    connectingFlightsTextSecond = " без пересадок";
  }
  if (segments[1].stops.length === 1) {
    connectingFlightsTextSecond = " пересадка";
  }
  if (
    segments[1].stops.length === 2 ||
    segments[1].stops.length === 3 ||
    segments[1].stops.length === 4
  ) {
    connectingFlightsTextSecond = " пересадки";
  }
  return (
    <div className="flight-item">
      <h4 className="flight-item__price">{priceFmt} Р</h4>
      <img
        className="flight-item__logo"
        src={`https://pics.avs.io/99/36/${carrier}.png`}
        alt={carrier}
      />
      <div className="flight-item__first-flight-time">
        <span className="flight-item__airports item-column-title">
          {segments[0].origin} – {segments[0].destination}
        </span>
        <span className="flight-item__departure-arrival-time item-column-info">
          {startTimeFirst} – {finishedTimeFirst}
        </span>
      </div>
      <div className="flight-item__first-flight-duration">
        <span className="flight-item__flight-duration-title item-column-title">
          В пути
        </span>
        <span className="flight-item__flight-duration item-column-info">
          {durationFirst}
        </span>
      </div>
      <div className="flight-item__first-flight-connecting">
        <span className="flight-item__connecting-flights-title item-column-title">
          {segments[0].stops.length === 0 ? "" : segments[0].stops.length}
          {connectingFlightsTextFirst}
        </span>
        <span className="flight-item__connecting-flights item-column-info">
          {segments[0].stops.join(", ")}
        </span>
      </div>
      <div className="flight-item__second-flight-time">
        <span className="flight-item__airports item-column-title">
          {segments[1].origin} – {segments[1].destination}
        </span>
        <span className="flight-item__departure-arrival-time item-column-info">
          {startTimesecond} – {finishedTimeSecond}
        </span>
      </div>
      <div className="flight-item__second-flight-duration">
        <span className="flight-item__flight-duration-title item-column-title">
          В пути
        </span>
        <span className="flight-item__flight-duration item-column-info">
          {durationSecond}
        </span>
      </div>
      <div className="flight-item__second-flight-connecting">
        <span className="flight-item__connecting-flights-title item-column-title">
          {segments[1].stops.length === 0 ? "" : segments[1].stops.length}
          {connectingFlightsTextSecond}
        </span>
        <span className="flight-item__connecting-flights item-column-info">
          {segments[1].stops.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default FlightItem;
