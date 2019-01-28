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

      		<div className="businessCard">
          <img src = "https://zero-day.io/content/images/2017/05/start-msf.jpg"></img>
              <p>
                Bronze-tier technomancer for web apps and security, constant illustrator on the side. Even digitized clutter needs some razzle-dazzle with its lock :)</p>      		</div>
    	);
  }
}

export default BusinessCardComponent;
