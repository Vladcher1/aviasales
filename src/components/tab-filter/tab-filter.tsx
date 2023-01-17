import "./tab-filter.scss";
import { useSelector, useDispatch } from "react-redux";

import { SET_TAB_FILTER } from "../../store/actions/actions";
import { tabClassNames } from "../../constants/constants";
import { State } from "../../types";

const TabFilter = () => {
  let buttonCheapest = "tab-filter__button cheapest";
  let buttonFastest = "tab-filter__button fastest";
  let buttonOptimal = "tab-filter__button optimal";

  const tabState = useSelector(
    (state: Pick<State, "currentTab">) => state.currentTab
  );
  const dispatch = useDispatch();

  if (tabState === "fastest") {
    buttonFastest += " active";
  }
  if (tabState === "cheapest") {
    buttonCheapest += " active";
  }
  if (tabState === "optimal") {
    buttonOptimal += " active";
  }

  return (
    <div className="tab-filter-container tab-filter">
      <button
        type="button"
        className={buttonCheapest}
        onClick={() => {
          dispatch({ type: SET_TAB_FILTER, payload: tabClassNames.CHEAPEST });
        }}>
        Самый дешевый
      </button>
      <button
        type="button"
        className={buttonFastest}
        onClick={() => {
          dispatch({ type: SET_TAB_FILTER, payload: tabClassNames.FASTEST });
        }}>
        Самый быстрый
      </button>
      <button
        type="button"
        className={buttonOptimal}
        onClick={() => {
          dispatch({ type: SET_TAB_FILTER, payload: tabClassNames.OPTIMAL });
        }}>
        Оптимальный
      </button>
    </div>
  );
};

export default TabFilter;
