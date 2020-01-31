import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

 
class Event extends Component {
  constructor(props){
    super();
    this.state = {
      isLoaded: props.isLoaded      
    }
  }
  
  render(){
  
    return (
      <>
        <div className="card">
            <h1>Event: {this.props.name}</h1>
            <p>Announced: {this.props.created} </p>
            {/* {this.props.description} */}
            <p>Duration: {this.props.duration}</p>        
            <a href={this.props.link}>Event Link</a> 
            {/* <Moment add={{ hours: 6 }}>{this.props.timeStart}</Moment>   */}
            <p>Date: <Moment local parse="Do MMM YYYY hh:mm">{this.props.dateStart}{this.props.timeStart}</Moment> </p>
           
            {/* <p>Event starts at {this.props.timeStart} on {this.props.dateStart}</p>                 */}
            {/* <p>{this.props.membersPay}</p> */}
            <p>RSVP: {this.props.yesRSVP}/{this.props.rsvpLimit}</p>
            <p>Current wait list: {this.props.waitList}</p> 
              
            <p>Status: {this.props.status}</p>
            {/* <p> {this.props.updated}</p> */}
            <p>Open to: {this.props.visibility}</p>
          
        </div>
          
      </>
    )
  }
}
 
export default Event;