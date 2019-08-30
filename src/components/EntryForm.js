import React from "react";
//import ReactDOM from "react-dom";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.entry);
    this.state = {
      title: props.entry ? props.entry.title : "",
      entry: props.entry ? props.entry.entry : "",
      hoursSlept: props.entry ? props.entry.hoursSlept : "",
      entryType: props.entry ? props.entry.entryType : "content",
      createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
      intensityLevel: props.entry ? props.entry.intensityLevel : 0,
      calendarFocused: false,
      error: "",
      buttonText: "",
      formHeading: props.entry ? "Edit Entry" : "Add New Entry",
      imgUrl: props.entry
        ? `../images/intensity-level-${props.entry.intensityLevel}.png`
        : "IMAGE 0"
    };
  }
  // Control user input and set state
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onEntryChange = e => {
    const entry = e.target.value;
    this.setState(() => ({ entry }));
  };
  onHoursSleptChange = e => {
    const hoursSlept = e.target.value;
    if (!hoursSlept || hoursSlept.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ hoursSlept }));
    }
  };
  onEntryTypeChange = e => {
    const entryType = e.target.value;
    this.setState(() => ({ entryType }));
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onSliderChange = e => {
    const intensityLevel = e.target.value;
    this.setState(() => ({ intensityLevel }));

    intensityLevel === "0"
      ? this.setState(() => {
          return {
            imgUrl: "IMAGE"
          };
        })
      : intensityLevel === "1"
      ? this.setState(() => {
          return {
            imgUrl: "IMAGE"
          };
        })
      : intensityLevel === "2"
      ? this.setState(() => {
          return {
            imgUrl: "IMAGE"
          };
        })
      : intensityLevel === "3"
      ? this.setState(() => {
          return {
            imgUrl: "IMAGE"
          };
        })
      : intensityLevel === "4"
      ? this.setState(() => {
          return {
            imgUrl: "IMAGE"
          };
        })
      : this.setState(() => {
          return {
            imgUrl: "IMAGE"
          };
        });
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
      this.setState(() => ({ error: "Please fill in all fields" }));
    } else {
      this.setState(() => ({ error: "" }));

      this.props.onSubmit({
        title: this.state.title,
        entry: this.state.entry,
        hoursSlept: parseFloat(this.state.hoursSlept, 10),
        createdAt: this.state.createdAt.valueOf(),
        entryType: this.state.entryType,
        intensityLevel: parseFloat(this.state.intensityLevel, 10)
      });
    }
  };
  componentWillMount() {
    this.setState(() => ({        
      buttonText: this.state.title === false
      ? ("Edit Entry")
      : ("Add Entry") }));
  }
  render() {
    return (
      <div className="form-container fade-in-bottom">
        <h2 className="form-header u-margin-bottom-small">
          {this.state.formHeading}
        </h2>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            placeholder="Entry Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
            className="form__title-input"
          />
          <textarea
            className="form__entry-text-area"
            placeholder="What was your day like?"
            value={this.state.entry}
            onChange={this.onEntryChange}
          />
          <input
            type="text"
            placeholder="Hours Slept"
            value={this.state.hoursSlept}
            onChange={this.onHoursSleptChange}
            className="form__hours-slept-input"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <select
            className="form__entry-type-select"
            value={this.state.entryType}
            onChange={this.onEntryTypeChange}
          >
            <option value="peaceful">Peaceful</option>
            <option value="undecided">Undecided</option>
            <option value="depressed">Depressed</option>
          </select>
          <div className="form__slider-output">
            <div className="form__slider-output__img-container">
              <img
                src="images/swtich.png"
                alt="mood intensity icon"
                className="form__slider-output__img"
              />
            </div>
            <div className="form__slider-output__value-container">
              <span className="form__slider-output__value">
                {this.state.intensityLevel}
              </span>
              <p className="form__slider-output__value-label">Mood Intensity</p>
            </div>
          </div>
          <div className="form__intensity-level-slider__container">
            <input
              className="form__instensity-level-slider"
              onChange={this.onSliderChange}
              type="range"
              min="0"
              max="5"
              value={this.state.intensityLevel}
            />
            <span className="form__intensity-level-slider__description">
              Strength of emotions
            </span>
          </div>
          <button className="form__button btn btn--blue">
            {this.state.buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default EntryForm;