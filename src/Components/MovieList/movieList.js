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
        Movie:[],
        Saga:[],
        Serie:[]
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

        this.state.Movie = [];

        let vals = this.state.Movie;

        let info = JSON.stringify(this.state.MovieList.peliculas[id]);

        vals.push(info);

        this.setState({ Movie:vals })
    };

    mostrarInformacionSagas = id => {

      this.state.Saga = [];

      let vals = this.state.Saga;

      let info = JSON.stringify(this.state.MovieList.sagas[id]);

      vals.push(info);

      this.setState({ Saga:vals })
  };

  mostrarInformacionSeries = id => {

    this.state.Serie = [];

    let vals = this.state.Serie;

    let info = JSON.stringify(this.state.MovieList.series[id]);

    vals.push(info);

    this.setState({ Serie:vals })
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

      let PeliculaActual = this.state.Movie[0];

      let SagaActual = this.state.Saga[0];

      let SerieActual = this.state.Serie[0];


        return (
          <div>
              <h2 class="text-center sliderTitle">Peliculas</h2>
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px"}} width={550} height={550} images={peliculas} slideDuration={0.5} onClickBullets={this.mostrarInformacion} showBullets={true}/>     
              <MovieDetail informacion={PeliculaActual}/>      
        
              <h2 class="text-center sliderTitle">Sagas</h2>
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px" }} width={550} height={550} images={sagas} slideDuration={0.5} onClickBullets={this.mostrarInformacionSagas} showBullets={true} />
              <MovieDetail informacion={SagaActual}/>  
                 
              <h2 class="text-center sliderTitle">Series</h2>              
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px" }} width={550} height={600} images={series} slideDuration={0.5} onClickBullets={this.mostrarInformacionSeries} showBullets={true} />
              <MovieDetail informacion={SerieActual}/> 
          </div>
          
      );

      
    }
}

export default MovieList;