import "./Statistics.css";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import React from "react";

const Statistics = (data) => {
  const { title, stats } = data;
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
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
