import "./StatisticsItem.css";

import React from "react";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className="item" style={{ backgroundColor: random_rgb() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

function random_rgb() {
  var o = Math.floor,
    r = Math.random,
    s = 256;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}
