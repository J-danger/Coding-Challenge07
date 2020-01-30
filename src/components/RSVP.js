import React, { Component } from 'react'

class RSVP extends Component{
  constructor(props){
    super();
    this.state = {
      isLoaded: props.isLoaded,
      rsvp: props.rsvp
    }
  }

  render() {
    return (
      <div>
        <h1> RSVP </h1>
        {this.props.rsvp.map(rsvp =>
          <div>
            {rsvp.name}
            <img src={rsvp.photo}></img>
          </div>
        )}
      </div>
    )
  }
}

export default RSVP