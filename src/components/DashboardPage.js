import React from "react";
import Charts from "./Charts";
//import Stats from "./Stats";
import AddEntryPage from "./AddEntryPage";

class DashboardPage extends React.Component {
  /*constructor(props) {
    super(props);
  }*/
  render() {
    return (
      <div>
        <Charts />
        <AddEntryPage />
      </div>
    );
  }
}

export default DashboardPage;