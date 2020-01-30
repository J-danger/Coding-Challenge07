import React, { Component } from 'react'

class RSVP extends Component{
  constructor(props){
    super();
    this.state = {
      isLoaded: props.isLoaded      
    }
  }

  render() {
    return (
      <>
      <div className='rsvp'>
        <h1> RSVP </h1>
        {this.props.list.rsvp.map(rsvp =>
          <div>
            {rsvp.name}
            <img src={rsvp.photo}></img>
          </div>
          
        )}
      </div>
      <div className='wait'>
        <h1> Wait List </h1>
        {this.props.list.wait.map(wait =>
          <div>
            {wait.name}
            <img src={wait.photo}></img>
          </div>
        )}
      </div>
      </>
    )
  }
}

export default RSVP