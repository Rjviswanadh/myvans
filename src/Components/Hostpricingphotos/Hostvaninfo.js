import React from "react";
import { useOutletContext } from "react-router-dom";
import "./index.css";

const Hostvaninfo = () => {
  const context = useOutletContext();

  return (
    <>
      <div className="d-flex flex-column">
        {context ? (
          <>
            <div className="mt-3 host-van-details">
              <h4>
                Name : <span>{context.vans[0].name}</span>
              </h4>
              <p>
                Description :{" "}
                <span className="host-van-details">
                  {context.vans[0].description}
                </span>
              </p>
              <p className="font-weight-bold">
                Visibility : <span className="text-weight-bold">Public</span>
              </p>
            </div>
          </>
        ) : (
          "Loading"
        )}
      </div>
    </>
  );
};

export default Hostvaninfo;
