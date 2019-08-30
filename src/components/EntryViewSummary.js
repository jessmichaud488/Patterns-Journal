import React from "react";
//import ReactDOM from "react-dom";
//import { connect } from "react-redux";
//import getVisibleEntries from "../selectors/entries";
//import hoursSleptTotal from "../selectors/hoursSleptTotal";

const EntryViewSummary = ({ entryCount, hoursSleptTotal }) => {
  const entryCountWord = entryCount === 1 ? "entry" : "entries";
  const hoursSleptWord = hoursSleptTotal === 1 ? "hour" : "hours";
  return (
    <div className="entry-view-summary u-margin-bottom-small fade-in-bottom">
      <p className="entry-view-summary__text">
        Viewing {entryCount} {entryCountWord} during {hoursSleptTotal}{" "}
        {hoursSleptWord} of sleep
      </p>
    </div>
  );
};

/*const mapStateToProps = state => {
  const visibleEntries = getVisibleEntries(state.entries, state.filters);

  return {
    entryCount: visibleEntries.length,
    hoursSleptTotal: hoursSleptTotal(visibleEntries)
  };
};*/

export default EntryViewSummary;