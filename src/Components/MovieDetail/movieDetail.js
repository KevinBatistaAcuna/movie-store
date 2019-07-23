import React from 'react'
import Dialog from 'react-bootstrap-dialog';
import {Button} from 'react-bootstrap';
 
export default class MovieDetail extends React.Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
  }

  onClick () {
      console.log('PROPS -> ');
    this.dialog.showAlert(this.props.informacion)
  }
 
  render () {
    return (
      <div>
      <Button onClick={this.onClick}>Show alert</Button>
        <Dialog ref={(el) => { this.dialog = el }} />
            
      </div>
    )
  }
}