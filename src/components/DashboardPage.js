import React from "react";
import Charts from "./Charts";
//import Stats from "./Stats";
import AddEntryPage from "./AddEntryPage";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    console.log('fetching data from entry router');
    fetch('http://localhost:8080/entryrouter')
      .then(res => {
          console.log("dashboard page -", res);
          return res.json()
       })
      .then(entries => { 
          console.log("dashboard page -", entries); 
          this.setState({ entries })
       });
   }

  render() {
    return (
      <div>
        <p>hello dashboard</p>
      </div>
    );
  }
}

export default DashboardPage;