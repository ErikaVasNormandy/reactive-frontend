

import React, { Component } from 'react';


import { BrowserRouter, Route, Link } from "react-router-dom";

import {styles} from './aboutcss.css';

class AboutComponent extends Component {
  render() {
    return (
      <div className ="row">
      	<div className = "col s7, m7, l7 columnAbout">
      		<h2>About </h2>
      			{/*<img className="profilePicture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/30441830_10211585837750757_7216752123478802432_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=ff781458086da956e4bda81a462b4c35&oe=5CF1019A" alt="Huh image must have moved"></img>*/}
      			<img className="profilePicture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/44109337_10212832963288116_2238843666879741952_n.jpg?_nc_cat=111&_nc_ht=scontent-sjc3-1.xx&oh=7917f5d58af679e6a1532066c3fa2a4c&oe=5CDCA9B4" alt="Huh image must have moved"></img>
      			<p>Erika Hudiono is a Bay Area Techie with an interest in both digital and traditional art, games, creative writing, crafting a la apps, and various other gimmicks. </p>
      			<p>Erika frequently applies a unique approach to her work as a security engineer and technical analyst. When not collecting various hats for SRE and developer roles, she is known for illustration and digital art. </p>
      	</div>

      	 <div className = "col s5, m5, l5 columnAbout">
      	   	<h2>Contact</h2>
      	  	<h6>For Enquires: </h6>
      	  		<p>Online Email: <a href="mailto:erikavasnormandy@gmail.com?subject=Message from Reactive.Scavengers-Repo.com Site">erikavasnormandy@gmail.com</a>  </p>
      	  		<p>Github: <a href="https://github.com/ErikaVasNormandy"> Erika Vas Normandy</a></p>
      	  		<p>Linkedin: <a href="https://www.linkedin.com/in/erika-hudiono/">Erika Hudiono</a></p>
      	  		<p>Instagram <a href="https://www.instagram.com/curiousquarian/"> Portfolio</a></p>
      	  		<img className="profilePicture" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/43245675_10212775561373104_7715986176934412288_n.jpg?_nc_cat=110&_nc_ht=scontent-sjc3-1.xx&oh=bb3a53ba5c5bf937b2d81c9aaa43fd98&oe=5CF4AD6A" alt = "Huh image must have moved datacenters"/>
  	       	  	<p>Can you tell how <a href ="http://www.tomhovey.co.uk/about">Tom Hovey's</a> inspired this About page? :)</p>
      	  </div>
      </div>
    );
  }
}

export default AboutComponent;

