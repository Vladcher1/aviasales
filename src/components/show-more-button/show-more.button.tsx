import "./show-more-button.scss";
import { useDispatch } from "react-redux";

export const ShowMoreButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="show-more-button"
      type="button"
      onClick={() => dispatch({ type: "ADD_CURRENT_FLIGHTS", payload: 5 })}
    >
      Показать еще 5 билетов!
    </button>
  );
};
