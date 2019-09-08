import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { cervejas: null };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then(res => {
      const cervejas = res.data;
      this.setState({ cervejas: cervejas });          
    });
  }

  detalhar(id, e) {
    e.preventDefault();
    console.log(`Botão clicado ${id}`);    
    window.location.href = `${id}`;
  }

  render() {    

    return (
      <div>
        <div className="container">
          <div className="row">
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
                    <a href="#" className="btn btn-primary" onClick={(e) => this.detalhar(cerveja.id, e)}>
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
