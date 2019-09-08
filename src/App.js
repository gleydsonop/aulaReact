import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <a class="navbar-brand" href="#">
          BeerDex
        </a>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm mb-2">
            <Card></Card>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default App;
