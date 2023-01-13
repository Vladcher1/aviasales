export const ALL = "ALL" as const;
export const NO_CONNECTING_FLIGHTS = "NO_CONNECTING_FLIGHTS" as const;
export const ONE_CONNECTING_FLIGHTS = "ONE_CONNECTING_FLIGHTS" as const;
export const TWO_CONNECTING_FLIGHTS = "TWO_CONNECTING_FLIGHTS" as const;
export const THREE_CONNECTING_FLIGHTS = "THREE_CONNECTING_FLIGHTS" as const;

export const ALL_TITLE = "Все";
export const NO_CONNECTING_FLIGHTS_TITLE = "Без пересадок";
export const ONE_CONNECTING_FLIGHTS_TITLE = "1 пересадка";
export const TWO_CONNECTING_FLIGHTS_TITLE = "2 пересадки";
export const THREE_CONNECTING_FLIGHTS_TITLE = "3 пересадки";

export const CHEAPEST = "cheapest" as const;
export const FASTEST = "fastest" as const;
export const OPTIMAL = "optimal" as const;

export const tabClassNames = {
  CHEAPEST,
  FASTEST,
  OPTIMAL,
};

export const filterOptionsObject = {
  ALL,
  NO_CONNECTING_FLIGHTS,
  ONE_CONNECTING_FLIGHTS,
  TWO_CONNECTING_FLIGHTS,
  THREE_CONNECTING_FLIGHTS,
};

export const filterOptionsTitleObject = {
  ALL_TITLE,
  NO_CONNECTING_FLIGHTS_TITLE,
  ONE_CONNECTING_FLIGHTS_TITLE,
  TWO_CONNECTING_FLIGHTS_TITLE,
  THREE_CONNECTING_FLIGHTS_TITLE,
};
