import React from 'react'
import Dialog from 'react-bootstrap-dialog';
import {Button} from 'react-bootstrap';
 
export default class MovieDetail extends React.Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
  }

  onClick () {
    /*this.dialog.showAlert(this.props.informacion)*/
    let data = JSON.parse(this.props.informacion);

    let body =  <li> {`Información general:`}
                     <ul></ul>
                     <ul>{`Género: ${data.genero} `} </ul>
                     <ul>{`Costo: ${data.costo} `} </ul>
                     <ul>{`Fecha: ${data.fecha}`} </ul>                
                </li>;
       
    this.dialog.show({
        title: data.nombre,
        body: body,
        actions: [
          Dialog.OKAction()
        ],
        bsSize: 'small',
        onHide: (dialog) => {
          dialog.hide()
        }
      })
  }

  
 
  render () {
    return (
      <div>
      <Button onClick={this.onClick}>Show alert</Button>
        <Dialog ref={(el) => { this.dialog = el }} clas/>
            
      </div>
    )
  }
}