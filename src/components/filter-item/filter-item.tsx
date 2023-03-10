import { useDispatch, useSelector } from "react-redux";

import { setVisibilityFilter } from "../../store/action-creators/action-creator-filters";
import { FilterItemProps } from "../../types";

const FilterItem = ({ title, payload }: FilterItemProps) => {
  const dispatch = useDispatch();

  const checkboxState = useSelector((state: any) => state.filters[payload]);

  return (
    <li className="side-filter__filter-item">
      <label>
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => {
            dispatch(setVisibilityFilter(payload));
          }}
          checked={checkboxState}
        />
        <span className="custom-checkbox " />
        <span className="checkbox-name ">{title}</span>
      </label>
    </li>
  );
};

export default FilterItem;
