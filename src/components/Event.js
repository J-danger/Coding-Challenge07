import React, { Component } from 'react';

 
class Event extends Component {
  constructor(props){
    super();
    this.state = {
      isLoaded: props.isLoaded,
      time: props.timeStart      
    }
  }

  render(){

    // attempt to remove broken href
    var theString = this.props.description;
    var theStringMinusOne = theString.substring(0, theString.length-340);
    // console.log(theStringMinusOne)


    return (

      <>
      <div className="event-wrapper">
        <div className="card">
          <div className="react-container">
            <span className="react-logo">
                  <span className="nucleo"></span>
            </span>
          </div>
          <div className="event-info">
            <h1>{this.props.name}</h1>
            <h3>{this.props.startDate}</h3>
            <h3>{this.props.startTime} - {this.props.endTime}  </h3>
            <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button className="rsvpLink">RSVP</button></a>
          </div>
          
      <div className="description"> 
        <p>Sponsored by **Dialexa**</p> <p>We once again visit our friends at Dialexa deep in the heart of Dallas!</p> <p>6:15 - 6:30pm: Food/Drinks/Networking<br/>6:30 - 6:45pm: "Jobs Open Mic"<br/>6:45 - 7:00pm: Jobs follow-up<br/>7:00pm: Welcome from our sponsor<br/>7:05 - 8:30pm: Speakers</p> <p>• Lucy McGuigan – "Stack, and Switch, and Tab, Oh My! - Finding Your Way with React Navigation"<br/>• Scott Haley - RxJS in React<br/>• Doug Lasater – TBD</p> <p>8:30pm: Close of event<br/>--------<br/>Handling routing and navigation is one of the most critical aspects to master when making the leap from web development with React to mobile development with React Native. Enter React Navigation, a powerful tool for structuring the navigation flow of your React Native app. In this session, we’ll take a look at the basic navigator types available through the React Navigation API, some options for configuration, and navigating and passing data between screens. Using an example project with pre-built screens, we will go from a roadmap of app flow to fully functional navigation. You’ll walk away knowing how to create and configure Stack, Switch, and MaterialTopTab navigators and how to use the navigation prop within your screen components.</p> <p>Lucy McGuigan is a Front-End Engineer at Alto, a ride-hailing startup in Dallas, where she works on cross-platform mobile applications in React Native. Lucy is passionate about the intersection of design and software development, and how elegant user interfaces can structure great user experiences. Before becoming a developer, her professional career included teaching high school math as a Teach for America Corps Member, art historical scholarship (M.A., SMU), graphic design and digital illustration work, various roles in exhibitions and collections, and grant-writing and organizational development in the nonprofit Community Design sphere. These diverse and varied experiences lend a unique perspective to her work, which is driven and informed by a desire to leverage technology to help people explore their world and expand their horizons.<br/>--------<br/>Scott Haley is a full-stack engineer at Dialexa. He has a passion for product design and innovation and has experience in many different fields of development including web, mobile, AR/VR, and game development. Outside of coding, Scott spends his time playing games (video, board, and sports), cooking, and taking pictures of his cat.<br/>--------<br/>Doug Lasater is a full-stack engineer at Dialexa with a frontend focus. He is interested in React/Vue, frontend architecture, and baby yoda.<br/>--------<br/>Parking</p> <p>Follow this link to have a bird's eye view of the closest parking garage to Dialexa.<br/><a href="https://www.google.com/maps/d/viewer?mid=1tQ_eKGtEUmFNfxGVzHWQ7uuEDeHM4lwQ&amp;usp=sharing\" className="linkified\">https://www.google.com/maps/d/viewer?mid=1tQ_eKGtEUmFNfxGVzHWQ7uuEDeHM4lwQ&amp;usp=sharing</a></p>
      </div>
      <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.3990755801688!2d-96.79267858428209!3d32.781676180970564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e98e06e1af689%3A0x1a2dfeb664f02ce5!2s2200%20Commerce%20St%2C%20Dallas%2C%20TX%2075201!5e0!3m2!1sen!2sus!4v1580698394811!5m2!1sen!2sus" title="map" width="400" height="400" frameBorder="0" allowFullScreen=""></iframe>
          </div>
        </div>
      </div>

      </>

    )
 
  }
}
 
export default Event;