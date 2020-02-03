import React, { Component } from 'react'
import Event from './Event'
import RSVP from './RSVP'


// import Test from './Test'

class Main extends Component {
    constructor() {
      super();
      this.state = {
        error: null,
        isLoaded: false, 
        rsvpGuests: [],
        waitListedGuests: []      
      };
    }

    getData(){
      setTimeout(() => {
         fetch('/data')
        .then((data) => data.json())       
        .then(
          data => {
              
              // save event data in state
            this.setState({                            
              created: data[0].created,
              description: data[0].description,
              duration: data[0].duration,
              link: data[0].link,
              time: data[0].time,
              membersPayFee: data[0].members_pay_fee,
              name: data[0].name,
              rsvpLimit: data[0].rsvp_limit,
              status: data[0].status,
              updated: data[0].updated,
              visibility: data[0].visibility,
              waitList: data[0].waitlist_count,
              yesRSVP: data[0].yes_rsvp_count,
              isLoaded: true,
              address: data[0].venue.address_1,
              country: data[0].venue.city,
              state: data[0].venue.state,
              zip: data[0].venue.zip,
              
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
                  //iteration over the object to separate RSVP and wait list. Using .map
                  let rsvp = this.state.rsvpGuests 
                  let wait = this.state.waitListedGuests
                    
                    data.map((data, i) =>{  
                      if (data.response === "yes"){
                        return rsvp.push({name: data.member.name, photo: data.member.photo, key: i})
                      } else {
                        return wait.push({name: data.member.name, photo: data.member.photo, key: i}) 
                      }
                  })  
                  this.setState({
                    isLoaded: true,
                  });
      
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
            ) 
      }, 1000)
    }

    
    componentDidMount() {
        this.getData()
    }

    render() {
     
       if (this.state.isLoaded === true){
        const rsvpList = this.state.rsvpGuests
        const waitList = this.state.waitListedGuests
        const timeStamp = this.state.time
        // console.log(rsvpList)
        
        // created Epoch conversion 
        var createdDate = new Date(this.state.created);
        var dateString = createdDate.toDateString()	

        // time (start) Epoch conversion 
        var formattedStartDate = new Date(timeStamp);
        var startDate = formattedStartDate.toDateString()
        
        var startTime = new Date(timeStamp).toLocaleTimeString("en-US")
       
        
        // duration epoch conversion
        var duration = new Date(this.state.duration * 1000);
        var hoursDur  = duration.getHours();
        var formattedTimeDur = hoursDur + ' hours'

        return(
          <> 
          <div className='event'> 
         
            <Event
              created={dateString}
              description={this.state.description}
              duration={formattedTimeDur}
              link={this.state.link}
              startDate={startDate}
              startTime={startTime}
              membersPay={this.state.membersPayFee}
              name={this.state.name}
              rsvpLimit={this.state.rsvpLimit}
              status={this.state.status}
              updated={this.state.update}
              visibility={this.state.visibility}
              waitList={this.state.waitList}
              yesRSVP={this.state.yesRSVP}
            />
          </div>  
            <RSVP
            list={{rsvp: rsvpList, wait: waitList}}
            isLoaded={this.state.isLoaded}
            key={rsvpList.key}
            />
        </>
        )
      } else {
        return(
          <p>Loading...</p>
        )
      }
    }
  }
  export default Main;