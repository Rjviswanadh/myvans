import React from "react";
import { useOutletContext } from "react-router-dom";

const Hostpricing = () => {
  const context = useOutletContext();
  //console.log(context.vans[0]);
  return (
    <div className="mt-3">
      <p>
        price : <span>{context.vans[0].price} / day</span>
      </p>
    </div>
  );
};

export default Hostpricing;
