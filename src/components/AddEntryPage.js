import React from "react";
//import { connect } from "react-redux";
import EntryForm from "./EntryForm";
import { addEntry } from "../actions/entries";

export class AddEntryPage extends React.Component {
  onSubmit = entry => {
    console.log("onSubmit.entry =", entry);
    addEntry(entry);
  };
  render() {
    return (
      <div className="wrapper">
        <EntryForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addEntry: entry => dispatch(addEntry(entry))
});

export default AddEntryPage;