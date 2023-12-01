import { useState } from "react";
import { Link } from "react-router-dom";

function CountryItem(props: any) {
  return (
    <div className="country-box">
      <Link to={"/Country/" + props.country.name.common}>
        <img className="image-flag" src={props.country.flags.png} />
      </Link>
      <div>
        <input
          className="xxx"
          type="checkbox"
          onChange={() => {
            // Toggle favorite status
            if (props.favorites.includes(props.country.name.common)) {
              props.setFavorites(
                props.favorites.filter(
                  (id: any) => id !== props.country.name.common
                )
              );
            } else {
              props.setFavorites([
                ...props.favorites,
                props.country.name.common,
              ]);
            }
          }}
        />
      </div>
      <Link to={"/Country/" + props.country.name.common}>
        <h2>Kraj: {props.country.name.common}</h2>
        <h2>Stolica: {props.country.capital}</h2>
      </Link>
    </div>
  );
}

export default CountryItem;
