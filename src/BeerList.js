import React, { Component } from "react";
import Card from "./Card";

class BeerList extends Component {
  render() {
      return(
        <div className="App">
       
        <div className="container">
          <div className="row">
            <div className="col-sm mb-2">            
              <Card></Card>
            </div>         
          </div>
        </div>
      </div>  )
  }
}

export default BeerList;
