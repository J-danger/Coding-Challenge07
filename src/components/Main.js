import React, { Component } from 'react'


class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: []
      };
    }
  
    componentDidMount() {
      fetch("/data")
        .then((data) => data.json())       
        .then(
          data => {
              console.log(data[0])
            this.setState({
              isLoaded: true,
              data: data[0],
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
    }
  
    render() {
     return(
       <>
       <p>Created: {this.state.localTime} on {this.state.localDate}</p>
       <p>{this.state.description}</p>
       </>
       
     )
    }
  }

  export default Main;