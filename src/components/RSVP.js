import React, { Component } from 'react'
import { render } from '@testing-library/react'

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false, 
          rsvpGuests: props.rsvpGuests,
          waitListedGuests: props.waitListedGuests     
        };
      }


      
      
      render() {        


    //     function test() {
    //         let rsvp = this.state.rsvpGuests
    //         let wait = this.state.waitListedGuests
    //         let rsvpNames = {rsvp.map(function(name, index){
    //             return <li key={ index }>{name}</li>;
    //           })}
    //         return (
    //             <ul>
    //                 {rsvpNames}
    //             </ul>
    //         )
    // }
     
        // console.log(this.state.rsvpGuests)
        let rsvp = this.state.rsvpGuests
        let wait = this.state.waitListedGuests
    
    for (var i in rsvp){
        let rsvpName = [rsvp[i].name, rsvp[i].photo]
              
        console.log('rsvp:', rsvpName)
        for (var i in wait){
            let waitName = [ wait[i].name, wait[i].photo]      
            // console.log('wait list:', waitName)
            
        }
    }
            return(
            <>test</>
            )
        }
}

export default RSVP;

