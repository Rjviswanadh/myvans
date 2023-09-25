import React from "react";
import { Link, Outlet, useParams, NavLink } from "react-router-dom";
import "./index.css";

const Hostvansdetails = () => {
  const [hostvans, sethostvans] = React.useState(null);
  const usepara = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${usepara.id}`)
      .then((res) => res.json())
      .then((data) => sethostvans(data));
  }, [usepara.id]);
  console.log(hostvans);
  return (
    <div className="bg-info p-5 m-5 vans-info">
      <Link to="/host/vans" relative="path" className="back-home">
        Back to vans
      </Link>
      <div>
        {hostvans ? (
          <>
            {hostvans.vans.map((each) => (
              <div>
                <div className="d-flex justify-content-between mt-5">
                  <img src={each.imageUrl} alt={each.name} />
                  <div>
                    <h1>{each.name}</h1>
                    <p>{each.price}/day</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <h1>Loading</h1>
          </>
        )}
      </div>
      <div className="d-flex justify-content-around text-decoration-none mt-4">
        <NavLink className="text-decoration-none" to=".">
          Details
        </NavLink>
        <NavLink className="text-decoration-none" to="pricing">
          Pricing
        </NavLink>
        <NavLink className="text-decoration-none" to="photos">
          Photos
        </NavLink>
      </div>
      <Outlet context={hostvans} />
    </div>
  );
};

export default Hostvansdetails;
