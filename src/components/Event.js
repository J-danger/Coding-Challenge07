import React, { Component } from 'react';


 
class Event extends Component {
  constructor(props){
    super();
    this.state = {
      isLoaded: props.isLoaded,
      time: props.timeStart      
    }
  }


  
  render(){

    if(this.props.timeStart === 0) return <p>Loading...</p>
    else {
    return (
      <>
        <div className="card">
            <h1>Event: {this.props.name}</h1>
            <p>Announced: {this.props.created} </p>
            <p>Duration: {this.props.duration}</p>        
            <a href={this.props.link}>Event Link</a> 
            <p>Date: {this.props.startDate}</p>
            <p>Time: {this.props.startTime}</p>
            <p>RSVP: {this.props.yesRSVP}/{this.props.rsvpLimit}</p>
            <p>Current wait list: {this.props.waitList}</p> 
            <p>Status: {this.props.status}</p>
            <p>Open to: {this.props.visibility}</p>
          
        </div>
          
      </>
    )
  }
  }
}
 
export default Event;