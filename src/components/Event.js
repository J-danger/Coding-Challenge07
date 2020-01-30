import React from 'react';

 
function Event(props) {
  return (
    <>
      <div className="card">
          <h1>Event: {props.name}</h1>
          <p>Announced: {props.created} </p>
          {/* {props.description} */}
          <p>Duration: {props.duration}</p>        
          <a href={props.link}>Event Link</a>        
          <p>At {props.time} on {props.date}</p>                
          {/* <p>{props.membersPay}</p> */}
          <p>RSVP: {props.yesRSVP}/{props.rsvpLimit}</p>
          <p>Current wait list: {props.waitList}</p> 
            
          <p>Status: {props.status}</p>
          {/* <p> {props.updated}</p> */}
          <p>Open to: {props.visibility}</p>
         
      </div>
        
    </>
  )
}
 
export default Event;