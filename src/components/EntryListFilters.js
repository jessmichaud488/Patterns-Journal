import React from "react";
//import ReactDOM from "react-dom";
//import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
/*import {
  //setEntryFilter,
  //setTextFilter,
  //sortByDate,
  //sortByHoursSlept,
  setStartDate,
  setEndDate
} from "../actions/filters";*/
//import Select from 'react-select';

export class EntryListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "hoursSlept") {
      this.props.sortByHoursSlept();
    }
  };
  render() {
    return (
      <div className="entry-list-filters u-margin-bottom-small fade-in-bottom">
        <select>
          <option value="title">Search Entries by Title</option>
        </select>

        <select>
           <option value="date">Sort By Date</option>
           <option value="hoursSlept">Sort By Hours</option>
        </select>

        <select>
          <option value="moods">Search Entries by Mood</option>
          <option value="all">All Entries</option>
          <option value="peaceful">Peaceful</option>
          <option value="undecided">Undecided</option>
          <option value="depressed">Depressed</option>
        </select>


      </div>
    );
  }
}

/*const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setEntryFilter: entryType => dispatch(setEntryFilter(entryType)),
  sortByDate: () => dispatch(sortByDate()),
  sortByHoursSlept: () => dispatch(sortByHoursSlept()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});*/

export default EntryListFilters;