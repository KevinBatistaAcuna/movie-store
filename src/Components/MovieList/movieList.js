
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
 
     
       let peliculas =  this.state.MovieList.peliculas.map((item, index) => 
            <Link to = {'/' + item.nombre} >       
                <p>{item.nombre}</p>
            </Link>
        );

        let sagas =  this.state.MovieList.sagas.map((item, index) => 
        <Link to = {'/' + item.nombre} >       
            <p>{item.nombre}</p>
        </Link>
    );

    let series =  this.state.MovieList.series.map((item, index) => 
    <Link to = {'/' + item.nombre} >       
        <p>{item.nombre}</p>
    </Link>
    );  
        
        return (<Router>
            <CarouselSlider slideCpnts = {peliculas} />

            <CarouselSlider slideCpnts = {sagas} />

            <CarouselSlider slideCpnts = {series} />
        </Router>);
    }
}

export default MovieList;