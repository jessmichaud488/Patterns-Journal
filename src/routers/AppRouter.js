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

function AppRouter() {
  return (
    <BrowserRouter>
    <div className="main-wrapper">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/" component={Header} />
      <Route exact path="/dashboard" component={DashboardPage} />
    </div>
    </BrowserRouter>
  );
}

export default AppRouter;