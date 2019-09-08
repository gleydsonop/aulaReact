import React from "react";
import "./App.css";
import Navbar from "./Navbar"

import BeerDetail from "./BeerDetail";
import BeerList from "./BeerList";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route exact path="/" component={BeerList} />
      <Route exact path="/:id" component={BeerDetail} />
    </Router>
  );
}

export default App;
