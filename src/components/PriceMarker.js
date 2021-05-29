import React from "react";

import "./PriceMarker.css";

const PriceMarker = ({ price, selected }) => {
  // add 'selected' class if selected is true
  const classes = `marker ${selected ? "selected" : ""}`;

  return <div className={classes}>{price}</div>;
};

export default PriceMarker;
