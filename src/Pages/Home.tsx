import CountryList from "../Components/CountryList";
import Search from "../Components/Search";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Country {
  continents: string;
  capital: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]); //countries array for edit
  const [originalCountries, setOriginalCountries] = useState<Country[]>([]); //CONST countries array
  const [favorites, setFavorites] = useState<string[]>([]);

  const allContinents = [
    "Africa",
    "Asia",
    "North America",
    "Oceania",
    "South America",
    "Europe",
    "Antarctica",
  ];

  async function getCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    setOriginalCountries(data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  const handleSearch = (value: any) => {
    const newInputCountries = countries.filter((country: any) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setCountries(newInputCountries);
  };

  const handleReset = () => {
    setCountries(originalCountries);
  };

  const handleSelectRender = (continent: any) => {
    const newSelectCountries = originalCountries.filter(
      (value: any) =>
        value.continents[0].includes(continent) ||
        value.continents[0].includes(continent)
      // niektóre kraje mają dwa kontynenty
    );
    setCountries(newSelectCountries);
  };

  const handleFavoriteRender = (continent: any) => {
    if (continent === "favorites") {
      const favoriteCountries = originalCountries.filter((country: any) =>
        favorites.includes(country.name.common)
      );
      setCountries(favoriteCountries);
    } else if (continent === "all") {
      setCountries(originalCountries);
    }
  };

  return (
    <div className="home-box">
      <Link to="/" onClick={handleReset}>
        Go Back to Main Page!
      </Link>
      <Search
        allContinents={allContinents}
        handleSearch={handleSearch}
        handleSelectRender={handleSelectRender}
        handleFavoriteRender={handleFavoriteRender}
      />
      <CountryList
        favorites={favorites}
        setFavorites={setFavorites}
        countries={countries}
      />
    </div>
  );
};

export default Home;
