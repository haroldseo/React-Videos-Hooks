import React, { useState, ChangeEvent, FormEvent } from "react";

type TonSearchSubmit = { onSearchSubmit: (term: string) => Promise<void> };

const SearchBar = ({ onSearchSubmit }: TonSearchSubmit) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
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
