import "./Statistics.css";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import PropTypes from "prop-types";

import React from "react";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}
      <ul className="stat-list">
        {stats.map((item) => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Statistics.defaultProps = {
  title: "No props",
};
