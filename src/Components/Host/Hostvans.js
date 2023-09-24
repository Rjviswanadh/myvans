import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Hostvans = () => {
  const [hostvans, sethostvans] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => sethostvans(data));
  }, []);

  const renderHost = () => {
    return (
      <div className="bg-color p-4">
        {hostvans.vans.map((eachHost) => (
          <Link
            to={`/host/vans/${eachHost.id}`}
            key={eachHost.id}
            className="text-decoration-none"
          >
            <div className="container p-3 mt-4 bg-danger">
              <img
                src={eachHost.imageUrl}
                className="eachhost-img"
                alt={eachHost.name}
              />
              <div className="item-name">
                <h1>{eachHost.name}</h1>
                <p>
                  {eachHost.price}
                  <span>/day</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  return (
    <>
      <div>{hostvans ? <div>{renderHost()}</div> : "Loading"}</div>
    </>
  );
};

export default Hostvans;
