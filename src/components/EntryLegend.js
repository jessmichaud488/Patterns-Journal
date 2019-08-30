import React from "react";

const EntryLegend = () => {
  return (
    <div className="dream-legend u-margin-bottom-small">
      <i className="fas fa-signal fade-in-bottom" />
      <span className="dream-legend__text fade-in-bottom">Intensity Level</span>
      <i className="far fa-clock fade-in-bottom" />
      <span className="dream-legend__text fade-in-bottom">Hours Slept</span>
    </div>
  );
};

export default EntryLegend;