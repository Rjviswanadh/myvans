import React from "react";
import { useOutletContext } from "react-router-dom";
import "./index.css";

const Hostphotos = () => {
  const context = useOutletContext();
  return (
    <div>
      <img
        className="photos-img"
        src={context.vans[0].imageUrl}
        alt={context.vans[0].name}
      />
    </div>
  );
};

export default Hostphotos;
