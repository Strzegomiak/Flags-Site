import CountryList from "../Components/CountryList";
import Search from "../Components/Search";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Country {
  name: {
    common: string;
  };
  capital: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]); //countries array for edit
  const [originalCountries, setOriginalCountries] = useState<Country[]>([]); //CONST countries array
  const allCountries = originalCountries.map((country) =>
    country.name.common.toLowerCase()
  );

  async function getCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
    setOriginalCountries(data);
    console.log(data);
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

  const handleSelectRender = (country: any) => {
    const newSelectCountries = originalCountries.filter((value: any) =>
      value.name.common.toLowerCase().includes(country.toLowerCase())
    );
    setCountries(newSelectCountries);
  };

  return (
    <div className="home-box">
      <Link to="/" onClick={handleReset}>
        Poznaj kraje świata!
      </Link>
      <Search
        allCountries={allCountries}
        handleSearch={handleSearch}
        handleSelectRender={handleSelectRender}
      />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
