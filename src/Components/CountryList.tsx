import CountryItem from "./CountryItem";

function CountryList(props: any) {
  return (
    <div className="country">
      {props.countries.map((country: any) => {
        return (
          <CountryItem
            favorites={props.favorites}
            setFavorites={props.setFavorites}
            country={country}
          />
        );
      })}
    </div>
  );
}

export default CountryList;
