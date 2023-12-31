import React from "react";
import "./Search.css";

function Search(props) {
    const {value, onValueChange } = props;
    return(
        <div className='app-search'>
          <input 
          className='app-search-input'
          type='text'
          placeholder='search....?'
          value={value}
          onChange={(event) => {onValueChange(event.target.value)}} 
          />
      </div>
    )
}

export default Search;