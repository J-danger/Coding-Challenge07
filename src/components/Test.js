import React from 'react'

function Test(props) {

    
    const reptiles = props.rsvpGuests;
  
    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
  }

  export default Test;


  // for (var i in rsvp){
    //     let rsvpName = [rsvp[i].name, rsvp[i].photo]
              
    //     // console.log('rsvp:', rsvpName)
    //     for (var i in wait){
    //         let waitName = [ wait[i].name, wait[i].photo]      
    //         // console.log('wait list:', waitName)
            
    //     }
    // }