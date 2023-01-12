export const makeId = () => {
  let initialId = 0;
  return () => initialId++;
};
