import React, {Component} from 'react';
import CarouselSlider from 'react-carousel-slider';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import SimpleImageSlider from "react-simple-image-slider";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'

import alertify from 'alertifyjs';


class MovieList extends Component {
    
    state = {
        MovieList: [],
        isFetch: true
      };

      componentWillMount () {        
        axios.get('./movies.json') // JSON File Path
        .then( response => {
          this.setState({
            MovieList: response.data,isFetch: false
        });
      })
      .catch(function (error) {
        console.log(error);
      });     
      };

      Eliminar = id => {
        console.log('ID -> ' + id);

        this.dialog.show({
          title: this.state.MovieList.peliculas[id].nombre,
          body: 'How are you?',
          actions: [
            Dialog.OKAction()
          ],
          bsSize: 'small',
          onHide: (dialog) => {
            dialog.hide()
            console.log('closed by clicking background.')
          }
        })


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


        return (
          <div>
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px", width:"auto"}} width={1350} height={550} images={peliculas} slideDuration={0.5} onClickBullets={this.Eliminar} showBullets={true} />     

              <Dialog ref={(component) => { this.dialog = component }} />                
      
        
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px" }}  width={550} height={550} images={sagas}/>
        
              
         
              <SimpleImageSlider  style={{ margin: "0 auto", marginTop: "50px" }} width={550} height={600} images={series}/>
          </div>
          
      );

      
    }
}

export default MovieList;