import React, { useState } from "react";

function Search(props: any) {
  const [inputValue, setInputValue] = useState("");
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
    </div>
  );
}

export default Search;
