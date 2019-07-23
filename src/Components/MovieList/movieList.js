import React, {Component} from 'react';
import CarouselSlider from 'react-carousel-slider';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import SimpleImageSlider from "react-simple-image-slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import MovieDetail from '../MovieDetail/movieDetail';


class MovieList extends Component {
    
    state = {
        MovieList: [],
        isFetch: true,
        Movie:{}
      };

      componentWillMount () {        
        axios.get('./movies.json') // JSON File Path
        .then( response => {
          this.setState({
            MovieList: response.data,isFetch: false, Movie:[]
        });
      })
      .catch(function (error) {
        console.log(error);
      });     
      };

      mostrarInformacion = id => {

        console.log('PELICULA' + id)


        let info = this.state.MovieList.peliculas[id];
      

        console.log('PELICULA DETALLE' + info)

        this.setState({ Movie:info });

        console.log('PELICULA ESTADO' + this.state.Movie)
        

    };

    render() {

        if (this.state.isFetch ){
            return <div> Cargando....</div>
          }
            
          if (!this.state.MovieList ){
            return <div> No hay datos.</div>
          }
          
 
      let peliculas =  this.state.MovieList.peliculas;

      let sagas =  this.state.MovieList.sagas;

      let series =  this.state.MovieList.series;

      let actual = this.state.Movie;


        return (
          <div>
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px", width:"auto"}} width={1350} height={550} images={peliculas} slideDuration={0.5} onClickBullets={this.mostrarInformacion} showBullets={true} />     

              <MovieDetail informacion={actual}/>      
        
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px" }}  width={550} height={550} images={sagas}/>
                               
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px" }} width={550} height={600} images={series}/>
          </div>
          
      );

      
    }
}

export default MovieList;