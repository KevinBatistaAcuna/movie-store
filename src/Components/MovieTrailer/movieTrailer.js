import React, { Component } from 'react';
import axios from 'axios';

const json = './movies.json';

class MovieTrailer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {},
      isLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    axios.get(json)
        .then(response => {
            this.setState({
                movies: response.data,
                isLoading: false,
                error: null
            })
        })
        .catch(error => this.setState({
            error,
            isLoading: false
        }));
  }

  render(){
    let x = '';
    let obj = this.state.movies.peliculas;
    if(obj !== undefined){
        x = obj[0].trailer;
        console.log(obj[0].trailer);
    }
    
    return(
        <iframe width="420" height="315"
            src={ x }>
        </iframe>
    ) 
  }
}

export default MovieTrailer;