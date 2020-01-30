import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class RSVP extends Component{
  constructor(props){
    super();
    this.state = {
      isLoaded: props.isLoaded      
    }
  }

  render() {

    return (
      <div className="lists">
        <div className='rsvp'>
          <h1> RSVP </h1>
          {this.props.list.rsvp.map(rsvp =>
            <ul className= "list-group">
              <li className="list-group-item" key={rsvp.key}>{rsvp.name}</li>
            </ul>
          )}
        </div>
        <div className='wait'>
          <h1> Wait List </h1>
          {this.props.list.wait.map(wait =>
            <ul className= "list-group">
              <li className="list-group-item" key={wait.key}>{wait.name}</li>
            </ul>
          )}
        </div>
      </div>
    )
   
  }
}

export default RSVP