import React from "react";
import PropTypes from "prop-types";
import Swatch from "./Swatch";
import Value from "./Value";

export default function ColorExample({ value, basics }) {
  const colorName = Object.keys(basics.colors).find(
    key => basics.colors[key] === value
  );
  return (
    <div>
      <Swatch color={value} />
      <Value>{value}</Value>
      {colorName ? <Value>{colorName}</Value> : null}
    </div>
  );
}

ColorExample.propTypes = {
  value: PropTypes.string,
  basics: PropTypes.shape({
    colors: PropTypes.object
  })
};
