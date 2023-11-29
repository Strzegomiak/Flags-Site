import { useState } from "react";
import { Link } from "react-router-dom";

function CountryItem(props: any) {
  console.log(props.country);
  return (
    <div className="country-box">
      <Link to={"/Country/" + props.country.name.common}>
        <img className="image-flag" src={props.country.flags.png} />

        <h2>Kraj: {props.country.name.common}</h2>
        <h2>Stolica: {props.country.capital}</h2>
      </Link>
    </div>
  );
}

export default CountryItem;
