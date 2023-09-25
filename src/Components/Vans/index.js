import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Vans() {
  const [Vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayData = Vans.map((eachVan) => {
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
      <div className="display-data">{displayData}</div>
    </>
  );
}

export default Vans;
