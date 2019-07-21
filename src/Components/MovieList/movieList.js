
import React, {Component} from 'react'
import CarouselSlider from 'react-carousel-slider';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

class MovieList extends Component {
    
    state = {
        MovieList: [],
        isFetch: true
      };

      componentWillMount () {
       /* const baseUrl = '/movies.json';
        const response = await fetch(baseUrl);
        console.log('lll')
        const responseJson = await response.json();
        console.log('data ->'+ responseJson)*/
        /*this.setState( { MovieList: responseJson, isFetch: false } )*/
        
        axios.get('movies.json') // JSON File Path
        .then( response => {
          this.setState({
            MovieList: response.data,isFetch: false
        });
        console.log('data -> ' +  response.data.json())
      })
      .catch(function (error) {
        console.log(error);
      });
     
        
        

      };

    render() {

        if (this.state.isFetch ){
            return <div> Cargando....</div>
          }
            
          if (!this.state.MovieList ){
            return <div> No hay datos.</div>
          }
 
     
       let items =  this.state.MovieList.peliculas.map((item, index) => 
            <Link to = {'/' + item.nombre} >       
                <p>{item.nombre}</p>
            </Link>
        );
        
        return (<Router>
            <CarouselSlider slideCpnts = {items} />
        </Router>);
    }
}

export default MovieList;