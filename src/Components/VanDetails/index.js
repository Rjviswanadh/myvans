import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

function VanDetails() {
  const params = useParams();
  const [vandetails, setvandetails] = React.useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((response) => setvandetails(response.vans));
  }, [params.id]);

  return (
    <div>
      {vandetails ? (
        <div className="van-details">
          <img src={vandetails.imageUrl} alt={vandetails.name} />
          <div className="mt-3 van-details">
            <p>
              Price:
              <span> {vandetails.price} /day</span>
            </p>
            <p>{vandetails.description}</p>
          </div>
        </div>
      ) : (
        "Loading...."
      )}
    </div>
  );
}

export default VanDetails;
