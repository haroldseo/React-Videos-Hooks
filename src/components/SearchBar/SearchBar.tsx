import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState<string>("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSearchSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
