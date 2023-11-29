import React, { useEffect, useState } from "react";

function Search(props: any) {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    props.handleSelectRender(selectedOption);
  }, [selectedOption]);

  return (
    <div className="search">
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={() => props.handleSearch(inputValue)}>
        Search
      </button>
      <div>
        <h2>Wybierz kraj:</h2>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Wybierz kraj</option>
          {props.allCountries.map((country: any) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Search;
