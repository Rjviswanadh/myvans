import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Vans() {
  // const [searchItem, SetSearch] = useSearchParams();
  // const par = searchItem.get("type");
  const [Vans, setVans] = React.useState([]);
  const [Search, setSearchvans] = React.useState();

  const searchVans = (e) => {
    setSearchvans(e.target.value);
  };
  console.log(Search);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(Vans);
  const filterItem = Search
    ? Vans.filter(
        (eachChar) =>
          eachChar.type.toLowerCase() === Search ||
          eachChar.name.toLowerCase() === Search ||
          parseInt(eachChar.price) === Search
      )
    : Vans;
  //console.log(filterItem);
  const displayData = filterItem.map((eachVan) => {
    return (
      <div key={eachVan.id} className="eachvan">
        <Link to={`${eachVan.id}`} className="vansizing">
          <img src={eachVan.imageUrl} alt={eachVan.name} />
          <h1 className="d-inline">{eachVan.name}</h1>
          <p>
            {eachVan.price}
            <span>/day</span>
          </p>
          <p>{eachVan.type}</p>
        </Link>
      </div>
    );
  });

  return (
    <>
      <input type="text" onChange={searchVans} />
      <div className="display-data">{displayData}</div>
    </>
  );
}

export default Vans;
