import React, { Component } from 'react'
import Event from './Event'
import RSVP from './RSVP'
// import Test from './Test'

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false, 
        rsvpGuests: [],
        waitListedGuests: []      
      };
    }
  
    async componentDidMount() {
      await fetch('/data')
        .then((data) => data.json())       
        .then(
          data => {
              console.log(data[0])
              // save event data in state
            this.setState({                            
              created: data[0].created,
              description: data[0].description,
              duration: data[0].duration,
              link: data[0].link,
              localDate: data[0].local_date,
              localTime: data[0].local_time,
              membersPayFee: data[0].members_pay_fee,
              name: data[0].name,
              rsvpLimit: data[0].rsvp_limit,
              status: data[0].status,
              updated: data[0].updated,
              visibility: data[0].visibility,
              waitList: data[0].waitlist_count,
              yesRSVP: data[0].yes_rsvp_count
            });
          },         
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          )
        .then(

      await fetch('/rsvp')
        .then((data) => data.json())
        .then(
          data => {

            

           
            //iteration over the object to separate RSVP and wait list. Using .map
            data.map((data, index) =>{  
            
            
                this.setState({
                  isLoaded: true
                }) 
              
            })
           
            let rsvp = this.state.rsvpGuests 
            let wait = this.state.waitListedGuests               
            if (data.response === "yes"){
                rsvp.push({name: data.member.name, photo: data.member.photo, key: data.member.id})
                console.log(rsvp)
                this.setState({
                  isLoaded: true
                })   
            } 
            // else {
            //   wait.push({name: data.member.name, photo: data.member.photo, key: data.member.id})
            //   this.setState({
            //     isLoaded: true
            //   })               
            // }

          //   for (var i = 0; i < data.length; i++) {
          //     rsvp[data[i].member.name] 
          // }
          // this.setState(rsvp)
          // iteration over the object to separate RSVP and wait list. Using for loop
          //  for (var i in data) {
          //     var response = data[i].response; 
          //     let rsvp = this.state.rsvpGuests                
          //     let wait = this.state.waitListedGuests                          
          //     if (response === 'yes'){
          //       rsvp.push({name: data[i].member.name, photo: data[i].member.photo})
          //       this.setState({
          //         isLoaded: true
          //       })                
          //     } else {   
          //       wait.push({name: data[i].member.name, photo: data[i].member.photo})
          //       this.setState({
          //         isLoaded: true
          //       })                  
          //     }
          //  }          
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          )
        )  
    }
  
    render() {

      let rsvpList = this.state.rsvpGuests
      let waitList = this.state.waitListedGuests
      let rsvpKey = this.state.rsvpGuests.key
      let waitKey = this.state.waitListedGuests.key
     return(
       <>     
       {/* <p>Created: {this.state.localTime} on {this.state.localDate}</p>
       <p>{this.state.description}</p> */}
      <Event
        created={this.state.created}
        description={this.state.description}
        duration={this.state.duration}
        link={this.state.link}
        time={this.state.localTime}
        date={this.state.localDate}
        membersPay={this.state.membersPayFee}
        name={this.state.name}
        rsvpLimit={this.state.rsvpLimit}
        status={this.state.status}
        updated={this.state.update}
        visibility={this.state.visibility}
        waitList={this.state.waitList}
        yesRSVP={this.state.yesRSVP}
        
      />

      <div className ='rsvpList'>
        <h1>RSVP</h1>
        {rsvpList.map(rsvp => <p key={rsvpKey}>{rsvp.name}</p>)}
      </div>

      <div className ='waitList'>
        <h1>Wait list</h1>
        {waitList.map(wait => <p key={waitKey}>{wait.name}</p>)}
      </div>



       </>
       
     )
    }
  }

  export default Main;