import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../redux/filters/selectors';
import { setNameFilter } from '../redux/filters/slice';

const Filter = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setNameFilter(event.currentTarget.value));
  };

  return (
    <label>
      Знайти контакт за ім'ям
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;