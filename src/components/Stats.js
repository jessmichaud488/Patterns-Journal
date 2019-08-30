import React from "react";
import { connect } from "react-redux";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: "",
      undecidedEntryPct: "",
      totalEntries: this.props.entries.length,
      avgSleepTime: 0,
      avgIntensityLevel: 0
    };
  }
  componentWillMount() {
    const entries = this.props.entries;
    let undecidedEntryCount = 0;
    let totalSleepTime = 0;
    let totalIntensityLevel = 0;

    entries.forEach(entry => {
      if (entry.entryType === "undecided") {
        undecidedEntryCount += 1;
      }

      // Calculate average sleep time
      totalSleepTime += entry.hoursSlept;
      this.setState(() => {
        return {
          avgSleepTime: (totalSleepTime / entries.length).toFixed(1)
        };
      });

      // Calculate average mood intensity level
      totalIntensityLevel += entry.intensityLevel;
      this.setState(() => {
        return {
          avgIntensityLevel: (totalIntensityLevel / entries.length).toFixed(1)
        };
      });
    });

    // Calculate rank
    undecidedEntryCount >= 5
      ? this.setState(() => {
          return {
            rank: "Mental Health Medalist"
          };
        })
      : this.setState(() => {
          return {
            rank: "Self Care Solider"
          };
        });

    // Calculate entry percentage
    entries.length !== 0
      ? this.setState(() => {
          return {
            undecidedEntryPct:
              ((undecidedEntryCount / entries.length) * 100)
                .toFixed(2)
                .toString() + "%"
          };
        })
      : this.setState(() => {
          return {
            undecidedEntryPct: "0%"
          };
        });
  }
  render() {
    return (
      <div className="stat-cards-wrapper">
        <div className="stat-cards-wrapper__vertical u-margin-bottom-medium">
          <div className="stat-card stat-card--vertical stat-card--1 fade-in-bottom">
            <img
              src="PERCENTAGE"
              alt="entry percentage"
              className="stat-card__img"
            />
            <div className="stat-card--vertical__text-box">
              <p className="stat-card__stat">{this.state.undecidedEntryPct}</p>
              <p className="stat-card__title">Entry Percentage</p>
            </div>
          </div>
          <div className="stat-card stat-card--vertical stat-card--2 fade-in-bottom">
            <img src="RANK" alt="current rank" className="stat-card__img" />
            <div className="stat-card--vertical__text-box">
              <p className="stat-card__stat">{this.state.rank}</p>
              <p className="stat-card__title">Current Rank</p>
            </div>
          </div>
          <div className="stat-card stat-card--vertical stat-card--3 fade-in-bottom">
            <img src="ENTRIES" alt="total entries" className="stat-card__img" />
            <div className="stat-card--vertical__text-box">
              <p className="stat-card__stat">{this.state.totalEntries}</p>
              <p className="stat-card__title">Total Entries</p>
            </div>
          </div>
        </div>
        <div className="stat-cards-wrapper__horizontal u-margin-bottom-medium">
          <div className="stat-card stat-card--horizontal stat-card--4 fade-in-bottom">
            <div className="stat-card--horizontal__text-box">
              <p className="stat-card__stat">{this.state.avgSleepTime} hours</p>
              <p className="stat-card__title">Average Sleep Time</p>
            </div>
            <div className="stat-card__img-container">
              <img
                src="SLEEP"
                alt="average sleep"
                className="stat-card__img stat-card__img--horizontal"
              />
            </div>
          </div>
          <div className="stat-card stat-card--horizontal stat-card--5 fade-in-bottom">
            <div className="stat-card--horizontal__text-box">
              <p className="stat-card__stat">{this.state.avgIntensityLevel}</p>
              <p className="stat-card__title">Average Intensity</p>
            </div>
            <div className="stat-card__img-container">
              <img
                src="INTENSITY"
                alt="average intensity"
                className="stat-card__img stat-card__img--horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries
});

export default connect(mapStateToProps)(Stats);