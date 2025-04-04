import React from "react";
import s from "./SearchBox.module.css";


const SearchBox =({value, onChange}) => {
    return(
      <div className={s.searchcont}>
      <label className={s.search}>Find contacts by name
        <input className={s.inputsearch}
        type="text"
        value={value}
        onChange={onChange}
      />
      </label>
      </div>
    )
}

export default SearchBox;