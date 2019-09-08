import React, { Component } from "react";
import axios from "axios";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      cervejaDetalhada: null
    };    
  }


  componentDidMount() {
    console.log("STATE: " + this.state.id);
    axios.get(`https://api.punkapi.com/v2/beers/${this.state.id}`).then(res => {
      const cerveja = res.data;      
      this.setState({ cervejaDetalhada: cerveja });
    });
  }
  

  render() {
    let cerva = (this.state.cervejaDetalhada);
    if(cerva == null){
        return <div></div>;
    }    
    return (
        
      <div>
        <div class="form-group row d-flex">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Nome: {cerva[0].name}
          </label>
          <div class="col-sm-10"></div>
        </div>
        <div class="form-group row">
          <label for="descricao" class="col-sm-8 col-form-label">
            Descrição: {cerva[0].description}
          </label>
          <div class="col-sm-10">
            <input class="form-control-plaintext" id="descricao" readOnly />
          </div>
          <label for="descricao" class="col-sm-8 col-form-label">
            Tagline: {cerva[0].tagline}
          </label>
          <label for="descricao" class="col-sm-8 col-form-label">
            Imagem: <img src={cerva[0].image_url} ></img>
          </label>
          
        </div>
      </div>
    );
  }
}

export default BeerDetail;
