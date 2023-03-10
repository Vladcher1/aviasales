import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FETCH_TICKETS } from "../../store/actions/actions";
import FlightItem from "../flight-item/flight-item";
import { makeId } from "../../utilities";
import { ShowMoreButton } from "../show-more-button/show-more.button";
import { TicketState } from "../../types";

import "./flights-list.scss";

const FlightsList = () => {
  const { tickets, error, currentFlights, filters }: any =
    useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TICKETS });
  }, []);

  if (error) {
    return <div>Произошла ошибка, перезагрузите страницу</div>;
  }

  const newId = makeId();
  let sideFiltration: TicketState[] = [...tickets];

  if (!filters.NO_CONNECTING_FLIGHTS) {
    sideFiltration = sideFiltration.filter(
      (ticket) =>
        ticket.segments[0].stops.length !== 0 &&
        ticket.segments[1].stops.length !== 0
    );
  }
  if (!filters.ONE_CONNECTING_FLIGHTS) {
    sideFiltration = sideFiltration.filter(
      (ticket) =>
        ticket.segments[0].stops.length !== 1 &&
        ticket.segments[1].stops.length !== 1
    );
  }
  if (!filters.TWO_CONNECTING_FLIGHTS) {
    sideFiltration = sideFiltration.filter(
      (ticket) =>
        ticket.segments[0].stops.length !== 2 &&
        ticket.segments[1].stops.length !== 2
    );
  }
  if (!filters.THREE_CONNECTING_FLIGHTS) {
    sideFiltration = sideFiltration.filter(
      (ticket) =>
        ticket.segments[0].stops.length !== 3 &&
        ticket.segments[1].stops.length !== 3
    );
  }

  const cards: any = sideFiltration
    .slice(0, currentFlights)
    .map((ticket: TicketState) => (
      <FlightItem
        key={newId()}
        price={ticket.price}
        carrier={ticket.carrier}
        segments={ticket.segments}
      />
    ));

  if (cards.length === 0) {
    return (
      <div className="no-tickets">
        <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
      </div>
    );
  }

  return (
    <div>
      <ul>{cards}</ul>
      <ShowMoreButton />
    </div>
  );
};

export default FlightsList;
