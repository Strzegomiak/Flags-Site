import CountryItem from "./CountryItem";

function CountryList(props: any) {
  return (
    <div className="country">
      {props.countries.map((country: any) => {
        return <CountryItem country={country} />;
      })}
    </div>
  );
}

export default CountryList;
