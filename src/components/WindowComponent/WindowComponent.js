import React, { Component } from 'react';
import {styles} from './window.css';

var moment = require('moment');

var imageArray= [
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/44313099_10212862141057542_8263251781669093376_n.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=41ad4abe146e92fa2b8190df159e88fc&oe=5CE1D8F5",
      "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg",
      "https://i.redd.it/dwsod4t24n921.jpg",
      "https://i.redd.it/7oah0nilwhp11.jpg",

      "https://preview.redd.it/chnpav915zf21.jpg?width=640&crop=smart&auto=webp&s=c3f839233b82303af62a6e0923a8a1ad20496698",
      // "https://images7.alphacoders.com/735/thumb-1920-735799.png",
      "https://wallpapercave.com/wp/wp2682163.png",
      "https://images2.alphacoders.com/735/thumb-1920-735771.png",
      "https://images8.alphacoders.com/625/thumb-1920-625703.jpg",
      // "https://www.jpl.nasa.gov/visions-of-the-future/images/earth-small.jpg",
      "https://images4.alphacoders.com/836/thumb-1920-836209.jpg",
      "https://i.pinimg.com/originals/bc/42/77/bc42777fcca60501522eea7fc16becba.jpg",

      "https://i.imgur.com/IElwzES.png",
      "http://i.imgur.com/jVayW4g.png",


      ]
class WindowComponent extends Component {
  	constructor(props){
  		super(props);

      this.shuffleArray = this.shuffleArray.bind(this)


  		this.state = {
        time: moment().format('ddd LTS'),
  			imgUrl: "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg",
        randImgUrl: this.shuffleArray(this.imageArray)
  		}

  	 }
    getInitialState() {
      this.setSectionStyle()
    }


    shuffleArray() {
        const i = imageArray.length;
        const j = Math.floor(Math.random() * (i));
        return imageArray[j]
    }

    setSectionStyle(){
        const backgroundimagechanged ={
        backgroundImage:`url(${this.shuffleArray()})`
    }
      return backgroundimagechanged

    }



	render() {
		// let sectionStyle = {
		// 	backgroundImage:`url(${this.state.randImgUrl})`
		// }


    	return (

    		<div>
      		<div className = "window" style={this.setSectionStyle()}>
                    <h1 className="windowDisplay windowText">Scavenger's Repo</h1>
                    <h5 className="windowDisplay">{this.state.time}</h5>
                    <br/>
 					{/* <span className="windowText">{this.shuffleArray()}</span> */}

      		</div>


      		</div>

    	);
  }
}

export default WindowComponent;
