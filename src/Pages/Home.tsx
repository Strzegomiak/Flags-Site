import CountryList from "../Components/CountryList";
import Search from "../Components/Search";
import React, { useState, useEffect } from "react";
interface Country {
  name: {
    common: string;
  };
  capital: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [originalCountries, setOriginalCountries] = useState<Country[]>([]);

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
    const newCountries = originalCountries.filter((country: any) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setCountries(newCountries);
  };

  return (
    <div className="home-box">
      <h2>Poznaj kraje świata!</h2>
      <Search handleSearch={handleSearch} />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
