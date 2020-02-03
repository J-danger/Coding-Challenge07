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
    return (

      <>
      <div className="event-wrapper">
        <div className="card">
          <div className="react-container">
            <span className="react-logo">
                  <span className="nucleo"></span>
            </span>
          </div>
          <div className="event-info">
            <h1>{this.props.name}</h1>
            <h3>{this.props.startDate}</h3>
            <h3>{this.props.startTime} - {this.props.endTime}  </h3>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="rsvpLink">RSVP</button></a>
          </div>
          
      <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.3990755801688!2d-96.79267858428209!3d32.781676180970564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e98e06e1af689%3A0x1a2dfeb664f02ce5!2s2200%20Commerce%20St%2C%20Dallas%2C%20TX%2075201!5e0!3m2!1sen!2sus!4v1580698394811!5m2!1sen!2sus" title="map" width="400" height="400" frameBorder="0" allowFullScreen=""></iframe>
          </div>
        </div>
      </div>
      </>

    )
 
  }
}
 
export default Event;