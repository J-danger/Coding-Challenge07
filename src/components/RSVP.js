import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class RSVP extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoaded: props.isLoaded      
    }
  }

  render() {
    return (
      <div className="lists">
        <div className='rsvp'>
          <h3> RSVP ({this.props.yesRSVP}/{this.props.rsvpLimit}) </h3>
          {this.props.list.rsvp.map(rsvp =>
            <ul className= "list-group">
              <li className="list-group-item" key={rsvp.key}>{rsvp.name}</li>
            </ul>
          )}
        </div>
        <div className='wait'>
          <h3> Wait list ({this.props.waitList}) </h3>
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