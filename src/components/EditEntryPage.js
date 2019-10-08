import React from "react";
//import { connect } from "react-redux";
import EntryForm from "./EntryForm";
//import { editEntry } from "../actions/entries";

class EditEntryPage extends React.Component {

  onSubmit = entry => {
    this.props.editEntry(this.props.entry.id, entry);
    this.props.history.push("/entries");
  };
  
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <EntryForm entry={this.props.entry} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

/*const mapStateToProps = (state, props) => ({
  entry: state.entries.find(entry => entry.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editEntry: (id, entry) => dispatch(editEntry(id, entry))
});*/

export default EditEntryPage;