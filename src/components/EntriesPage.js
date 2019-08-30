import React from "react";
import EntryLegend from "./EntryLegend";
import EntryList from "./EntryList";
import EntryListFilters from "./EntryListFilters";
import EntryViewSummary from "./EntryViewSummary";

class EntriesPage extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
  componentDidMount() {
    // This fixes the bottom spacing issue that the moving stars background causes
    this.refs.wrapper.style.minHeight = window.innerHeight + "px";
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <EntryViewSummary />
        <EntryListFilters />
        <EntryLegend />
        <EntryList />
      </div>
    );
  }
}

export default EntriesPage;