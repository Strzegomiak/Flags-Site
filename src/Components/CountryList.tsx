import { useEffect, useState } from "react";
import CountryItem from "./CountryItem";

function CountryList() {
  const [countries, setCountries] = useState<[]>([]);

  async function getCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  }

  useEffect(() => {
    getCountries();
  }, []);
  console.log(countries);
  return (
    <div className="country">
      {countries.map((country: any) => {
        return <CountryItem country={country} />;
      })}
    </div>
  );
}

export default CountryList;
