import React from "react";
import EntryLegend from "./EntryLegend";
import EntryList from "./EntryList";
import EntryListFilters from "./EntryListFilters";
import EntryViewSummary from "./EntryViewSummary";

class EntriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }
  
  componentDidMount() {
    fetch('/entryrouter')
      .then(res => {
          console.log(res);
          return res.json()
       })
      .then(entries => { 
          console.log(entries); 
          this.setState({ entries })
       });
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