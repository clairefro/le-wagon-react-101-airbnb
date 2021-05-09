import React from "react";

import "./Flat.css";

const Flat = ({ data }) => {
  const { imageUrl, name, price, priceCurrency } = data;

  return (
    <div className="flat">
      <div
        className="flat-picture"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="flat-title">
        {name} - {price}
        {priceCurrency}
      </div>
    </div>
  );
};

export default Flat;
