import React from "react";
import EntriesPage from "../components/EntriesPage";
//import AddEntryPage from "../components/AddEntryPage";
import DashboardPage from "../components/DashboardPage";
import EditEntryPage from "../components/EditEntryPage";
import Header from "../components/Header";
import { HomePage } from "../components/HomePage";
import Stats from "../components/Stats";
import Charts from "../components/Charts";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class AppRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  render() {
  return (
    <BrowserRouter>
    <div className="main-wrapper">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/" component={Header} />
      <Route exact path="/dashboard" render={ ()=><DashboardPage user={this.state.user}/> } />
    </div>
    </BrowserRouter>
  );
  }
}

export default AppRouter;