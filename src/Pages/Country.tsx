import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
  const { countryId } = useParams();
  console.log(countryId);

  const [countries, setCountries] = useState<[]>([]);
  const dataCoutry = countries.filter(
    (country: any) => country.name.common === countryId
  );
  console.log(dataCoutry);

  async function getCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {dataCoutry.map((country: any) => {
        console.log(country.currencies);
        console.log(Object.keys(country.currencies));
        return (
          <div>
            <h2>Miasto: {country.name.common}</h2>
            <h2>Stlica: {country.capital}</h2>
            <h2>Kontynent: {country.subregion}</h2>
            <h2>GoogleMap: {country.maps.googleMaps}</h2>
            <h2>Populacja: {country.population}</h2>
            <h2>
              Języki:{" "}
              {Object.values(country.languages).map((lang: any) => {
                return <h2>{lang}</h2>;
              })}
            </h2>
            <h2>
              Waluta:{" "}
              {Object.keys(country.currencies).map((current: any) => {
                return <h2>{current}</h2>;
              })}
            </h2>
            <img className="image-flag" src={country.flags.png} />
          </div>
        );
      })}
      <Link to="/">Go Back to Main Page</Link>
    </div>
  );
};

export default Country;
