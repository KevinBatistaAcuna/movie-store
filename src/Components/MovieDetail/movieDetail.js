import React from 'react'
import Dialog from 'react-bootstrap-dialog';
import {Button} from 'react-bootstrap';
import './movieDetail.css';
 
export default class MovieDetail extends React.Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
  }

  onClick () {
    /*this.dialog.showAlert(this.props.informacion)*/
    let data = JSON.parse(this.props.informacion);

    let body =  <div class="container">
                  <div class="row">
                    <div class="col-md-5">
                      <h4>Información general:</h4>
                      <ul>
                        <li>{`Género: ${data.genero} `} </li>
                        <li>{`Costo: ${data.costo} `} </li>
                        <li>{`Fecha: ${data.fecha}`} </li>                
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <iframe width="420" height="315" src={ data.trailer }></iframe>
                    </div>
                  </div>
                </div>;
       
    this.dialog.show({
        title: data.nombre,
        body: body,
        actions: [
          Dialog.OKAction()
        ],
        onHide: (dialog) => {
          dialog.hide()
        }
      })
  }

  
 
  render () {
    return (
      <div class="text-center">
        <Button onClick={this.onClick}>Show alert</Button>
        <Dialog ref={(el) => { this.dialog = el }}/>     
      </div>
    )
  }
}