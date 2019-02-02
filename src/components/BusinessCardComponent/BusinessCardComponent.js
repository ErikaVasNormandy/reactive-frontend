import React, { Component } from 'react';
import {styles} from './businesscard.css';



class BusinessCardComponent extends Component {

//https://i.redd.it/79qghnkw98721.jpg
//https://i.redd.it/hm9dujjr22a21.jpg
//background-image: url("https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg");
//https://i.redd.it/dwsod4t24n921.jpg
///https://i.redd.it/7oah0nilwhp11.jpg
  	constructor(props){
  		super(props);

  	 }


	render() {

    	return (
         <div id="sideMenu" className="card large">
          <img className="menuImg" src="https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/VoidRune2MenuImg.png"></img>


              <p className = "sideMenuText">Bronze-tier technomancer for web apps and security, constant illustrator on the side. Even digitized clutter needs some razzle-dazzle with its lock :)  
                <ul className="sideMenuLinks">
                  <li className="sideMenuLinksLI"><a className="sideMenuLinksA" href="https://github.com/ErikaVasNormandy">Github</a></li>
                  <li className="sideMenuLinksLI"><a className= "sideMenuLinksA" href="https://www.linkedin.com/in/erika-hudiono-97a0285b">LinkedIn</a></li>
                </ul>

                </p>
      </div>

      
    	);
  }
}

export default BusinessCardComponent;
