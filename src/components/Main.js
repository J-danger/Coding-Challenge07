import React, { Component } from 'react'
import Card from './Card'
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
  
    componentDidMount() {
      fetch('/data')
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

      fetch('/rsvp')
        .then((data) => data.json())
        .then(
          data => {
            // console.log(data)
            //iteration over the object to separate RSVP and wait list. Grabs name and photo
           for (var i in data) {
              var response = data[i].response;                          
              if (response === 'yes'){
                let rsvp = this.state.rsvpGuests                
                rsvp.push({name: data[i].member.name, photo: data[i].member.photo})
                this.setState({
                  isLoaded: true
                })                
              } else {
                let wait = this.state.waitListedGuests                
                wait.push({name: data[i].member.name, photo: data[i].member.photo})
                this.setState({
                  isLoaded: true
                })                  
              }
           }          
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
     return(
       <>     
       {/* <p>Created: {this.state.localTime} on {this.state.localDate}</p>
       <p>{this.state.description}</p> */}
      <Card
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

      <RSVP 
      rsvpGuests={this.state.rsvpGuests}
      waitListedGuests={this.state.waitListedGuests}
      />

      <div className ='rsvpList'>
        <h1>RSVP</h1>
        {rsvpList.map(rsvp => <p>{rsvp.name}</p>)}
      </div>

      <div className ='waitList'>
        <h1>Wait list</h1>
        {waitList.map(wait => <p>{wait.name}</p>)}
      </div>



       </>
       
     )
    }
  }

  export default Main;