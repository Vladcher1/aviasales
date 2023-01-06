import { useDispatch, useSelector } from "react-redux";

import { setVisibilityFilter } from "../../store/actionCreator";

const FilterItem = ({ title, payload }: any) => {
  const dispatch = useDispatch();

  const getCheckboxState = () => {
    const checkboxState = useSelector((state) => state[payload]);
    return checkboxState;
  };
  return (
    <li className="side-filter__filter-item">
      <label>
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => {
            dispatch(setVisibilityFilter(payload));
          }}
          checked={getCheckboxState()}
        />
        <span className="custom-checkbox " />
        <span className="checkbox-name ">{title}</span>
      </label>
    </li>
  );
};

export default FilterItem;
