import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FETCH_TICKETS,
  fetchTickets,
} from "../../store/actions/action-creator-tickets";
import FlightItem from "../flight-item/flight-item";
import Spinner from "../spinner/spinner";
import { makeId } from "../../utilities";
import { ShowMoreButton } from "../show-more-button/show-more.button";
import { TicketState } from "../../types";
import "./flights-list.scss";

const FlightsList = () => {
  const {
    tickets,
    loading,
    error,
    currentFlights,
    currentTab,
    filters,
    searchId,
  }: any = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TICKETS });
    dispatch(fetchTickets(searchId));
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>Ошибка :(</div>;
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

  const sortedCheapest: TicketState[] = [...sideFiltration].sort(
    (prev, curr) => prev.price - curr.price
  );

  const sortedFastest: TicketState[] = [...sideFiltration].sort(
    (prev, curr) =>
      prev.segments[0].duration +
      prev.segments[1].duration -
      (curr.segments[0].duration + curr.segments[1].duration)
  );

  const arrCoeffTickets = sideFiltration.map((ticket: TicketState) => {
    const coeffPrice = (ticket.price * 1) / -10000;

    const coeffDuration =
      ((ticket.segments[0].duration + ticket.segments[1].duration) * 1) /
      -10000;
    const coeff = coeffPrice + coeffDuration;
    return { ...ticket, coeff };
  });

  const optimalSorted: TicketState[] = [...arrCoeffTickets].sort(
    (prev, curr) => curr.coeff - prev.coeff
  );
  console.log(optimalSorted);
  let cards;
  if (currentTab === "cheapest") {
    cards = sortedCheapest
      .slice(0, currentFlights)
      .map((ticket: TicketState) => (
        <FlightItem
          key={newId()}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ));
  }
  if (currentTab === "fastest") {
    cards = sortedFastest
      .slice(0, currentFlights)
      .map((ticket: TicketState) => (
        <FlightItem
          key={newId()}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ));
  }
  if (currentTab === "optimal") {
    cards = optimalSorted
      .slice(0, currentFlights)
      .map((ticket: TicketState) => (
        <FlightItem
          key={newId()}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ));
  }

  if (cards.length === 0) {
    return (
      <div className="no-tickets">
        {/* <ul> */}
        <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
        {/* </ul> */}
      </div>
    );
  }
  return (
    <div>
      <ul>
        <div>{cards}</div>
      </ul>
      <ShowMoreButton />
    </div>
  );
};

export default FlightsList;
