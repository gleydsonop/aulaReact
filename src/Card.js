import React, { Component } from "react";

import axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { cervejas: null };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(res => {
      const cervejas = res.data;
      this.setState({ cervejas: cervejas });
      console.log(`CERVEJAS:`);
      console.log(this.state);
    });
  }

  render() {
    const { beers } = this.state;

    return (
      <div>
        <div class="container">
          <div class="row">
            
              {this.state.cervejas &&
                this.state.cervejas.map(cerveja => (
                  <div className="col-sm-4" style={{ width: "18rem" }}>
                  <div className="card-body border mb-2" key={cerveja.id}>
                    <h5 className="card-title">{cerveja.name}</h5>
                    <p className="card-text d-flex flex-row">
                      Tagline: {cerveja.tagline}
                    </p>
                    <p className="card-text d-flex flex-row">
                      <a href={cerveja.image_url}>Foto</a>
                    </p>
                    <hr />
                    <a href="#" className="btn btn-primary">
                      Detalhes
                    </a>
                  </div>
                  </div>
                ))}
            
           
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
