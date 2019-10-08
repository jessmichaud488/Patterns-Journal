import React from "react";
//import { connect } from "react-redux";
import { Line, Doughnut } from "react-chartjs-2";
import moment from "moment";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.entries)
    this.state = {
      // Chart configurations
      sleepTimeChartData: {
        labels: this.props.entries
          .map(entry => moment(entry.createdAt).format("MMM D"))
          .reverse(),
        datasets: [
          {
            label: "Hours Slept",
            fill: false,
            lineTension: 0.3,
            backgroundColor: "#53D1FE",
            borderColor: "#53D1FE",
            borderCapStyles: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#53D1FE",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#53D1FE",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.entries.map(entry => entry.hoursSlept).reverse()
          }
        ]
      },
      sleepTimeChartOptions: {
        animation: {
          duration: 2600,
          easing: "easeOutCubic"
        },
        legend: {
          labels: {
            fontColor: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            padding: 25
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "#fff"
              },
              gridLines: {
                color: "#7C7C7C"
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#fff"
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
      entryTypeChartData: {
        labels: ["Peaceful", "Undecided", "Depressed"],
        datasets: [
          {
            label: "Entry Types",
            backgroundColor: ["#53D1FE", "#191992", "#4332B8"],
            borderWidth: [2, 2, 2],
            data: []
          }
        ]
      },
      entryTypeChartOptions: {
        animation: {
          duration: 2600,
          easing: "easeOutCubic"
        },
        cutoutPercentage: 80,
        legend: {
          labels: {
            fontColor: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            padding: 25
          },
          position: "right"
        },
        rotation: Math.PI * Math.random()
      },
      entryTypeChartTotals: {
        peaceful: this.props.entries.filter(entry => {
          return entry.entryType === "peaceful";
        }),
        undecided: this.props.entries.filter(entry => {
          return entry.entryType === "undecided";
        }),
        depressed: this.props.entries.filter(entry => {
          return entry.entryType === "depressed";
        })
      }
    };
  }

  componentWillMount() {
    // Pull chart data
    /*fetch (
    mongodb+srv://me:Theoandmuffin!1@cluster0-lwkpm.mongodb.net/test?retryWrites=true&w=majority
    )*/
    console.log('Made it to Will Mount in Chart.js');
    const entryData = this.state.entryTypeChartData.datasets[0].data;
    const entryTypes = this.state.entryTypeChartTotals;
    entryData.push(
      entryTypes.peaceful.length,
      entryTypes.undecided.length,
      entryTypes.depressed.length
    );
  }
  render() {
    console.log('Made it to render in Chart.js');
    return (
      <div className="charts-container u-margin-bottom-big fade-in-bottom">
        <div className="chart chart--line-container">
          <Line
            data={this.state.sleepTimeChartData}
            options={this.state.sleepTimeChartOptions}
          />
        </div>
        <div className="chart chart--doughnut-container fade-in-bottom">
          <Doughnut
            data={this.state.entryTypeChartData}
            options={this.state.entryTypeChartOptions}
          />
        </div>
      </div>
    );
  }
}

/*const mapStateToProps = state => ({
  entries: state.entries
});*/

export default Charts;