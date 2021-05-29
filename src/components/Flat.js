import React from "react";

import "./Flat.css";

const Flat = ({ data, setSelectedFlat, selected }) => {
  const { imageUrl, name, price, priceCurrency } = data;

  // add 'selected' class if selected is true
  const flatClasses = `flat ${selected ? "selected" : ""}`;

  const flatImgStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={flatClasses} onClick={() => setSelectedFlat(data)}>
      <div className="flat-picture" style={flatImgStyle}></div>
      <div className="flat-title">
        {name} - {price}
        {priceCurrency}
      </div>
    </div>
  );
};

export default Flat;
