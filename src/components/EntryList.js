import React from "react";
//import { connect } from "react-redux";
import EntryListItem from "./EntryListItem";
//import getVisibleEntries from "../selectors/entries";

class EntryList extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
  componentDidMount() {
    // Remove fade-in-bottom animation class to avoid conflict with calendar
    setTimeout(() => {
      this.refs.entryList.classList.remove("fade-in-bottom");
    }, 1600);
  }
  render() {
    console.log("entries = ", this.props)
    return (
      <div className="entry-list fade-in-bottom" ref="entryList">
        {this.props.entries.length === 0 ? (
          <p className="form__error">No entries</p>
        ) : (
          this.props.entries.map(entry => {
            return <EntryListItem key={entry.id} />;
          })
        )}
      </div>
    );
  }
}

/*const mapStateToProps = state => {
  return {
    entries: getVisibleEntries(state.entries, state.filters)
  };
};*/

export default EntryList;
