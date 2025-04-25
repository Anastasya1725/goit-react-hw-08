import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={s.input}
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;

