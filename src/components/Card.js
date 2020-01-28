import React from 'react';
import { Link } from "react-router-dom";
 
function Card(props) {
  return (
    <>
       
            <div className="card">
                <p>Event: {props.name}</p>
                <p>Announced: {props.created} </p>
                {/* {props.description} */}
                <p>Duration: {props.duration}</p>
                <p>{props.link}</p>        
                <p>At {props.time} on {props.date}</p>                
                {/* <p>{props.membersPay}</p> */}
                <p>RSVP limit: {props.rsvpLimit} </p>     
                <p>Status: {props.status}</p>
                {/* <p> {props.updated}</p> */}
                <p>Open to: {props.visibility}</p>
                <p>Current wait list: {props.waitList}</p> 
                <p>RSVP: {props.yesRSVP}</p>     
            </div>
        
    </>
  )
}
 
export default Card;