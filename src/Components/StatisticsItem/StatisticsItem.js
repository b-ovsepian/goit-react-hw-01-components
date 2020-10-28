import "./StatisticsItem.css";

import React from "react";

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className="item" style={{ backgroundColor: random_rgba() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
