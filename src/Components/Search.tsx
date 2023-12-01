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
        <h2>Choose continent:</h2>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Choose continent</option>
          {props.allContinents.map((continent: any) => (
            <option value={continent}>{continent}</option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <button
            type="button"
            onClick={() => props.handleFavoriteRender("favorites")}
          >
            Show favorites
          </button>
          <button
            type="button"
            onClick={() => props.handleFavoriteRender("all")}
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
