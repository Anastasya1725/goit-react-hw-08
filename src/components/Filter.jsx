import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../redux/filters/selectors';
import { setNameFilter } from '../redux/filters/slice';
import s from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setNameFilter(event.currentTarget.value));
  };

  return (
      <input type="text" value={filter} onChange={handleChange} placeholder='Search contact name' className={s.inputsearch}/>
  );
};

export default Filter;