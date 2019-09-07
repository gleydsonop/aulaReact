import React, { Component } from "react";

import axios from "axios";

class Card extends Component {

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers').then(res => {
      const cervejas = res.data;
      console.log(cervejas);
      this.setState({cervejas});
      console.log(this.state)
    })
  }

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>          
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text d-flex flex-row">Name:{this.state.cervejas.name}</p>
            <p className="card-text d-flex flex-row">Tagline:</p>
            <p className="card-text d-flex flex-row">ImageURL:</p>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <hr />
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
