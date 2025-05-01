import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <input
      className={s.inputsearch}
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
