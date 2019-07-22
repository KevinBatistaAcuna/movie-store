import React, { Component } from 'react';
import {Route} from 'react-router-dom';

const json = './movies.json';

class Header extends Component {
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
        // obj.forEach(function(el) {
        //     x = el.nombre;
        //     // console.log(el);
        // });
        x = obj.map(function (value) {
            console.log(value);
        });
        // console.log(obj);
    }
    
    // for (let key in obj.peliculas){
    //     let result = obj.peliculas[1];
    //     for(let test in result){
    //         // console.log(result[1]);
    //     }
    //     console.log(result);
    // }
    return(
        <h1>{ x }</h1>
    ) 
  }
//   render() {
//     const child = this.state.movies.map((element) => {
//       return <div>
//         <p>{ element.data.peliculas[1].nombre }</p>
//       </div>
//     });

//     return <div><div>{ child }</div></div>;
//   }
}

export default Header;