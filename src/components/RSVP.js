import React, { Component } from 'react'
import { render } from '@testing-library/react'

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false, 
          rsvpGuests: props.rsvp,
          waitListedGuests: props.wait     
        };
      }

      componentDidUpdate(prevProps, prevState, snapshot){        
          console.log(prevProps)
         
          
      }


      
      
      render() {    

            return(
            <></>
        
            )
      }
}


export default RSVP;

            //     <div className ='rsvpList'>
            //     <h1>RSVP</h1>
            //     {/* {rsvpList.map(rsvp => <p key={rsvp.name}>{rsvp.name}</p>)}
            //     {this.state.rsvpGuests[0]} */}
            //     <ul>
            //       <For of={rsvpList} as={item =>
            //         <li key={rsvpList.member}>{rsvpList.member.name}</li>
            //       }/>
            //     </ul>
            //   </div>
        
            //   {/* <div className ='waitList'>
            //     <h1>Wait list</h1>
            //     {waitList.map(wait => <p key={wait.name}>{wait.name}</p>)}
            //   </div> */}