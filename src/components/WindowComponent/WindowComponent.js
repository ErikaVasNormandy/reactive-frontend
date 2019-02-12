import React, { Component } from 'react';
import {styles} from './window.css';

var moment = require('moment');

var imageArray= [
      "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg",
      "https://i.redd.it/dwsod4t24n921.jpg",
      "https://i.redd.it/7oah0nilwhp11.jpg",
      "https://lettherebemovies.files.wordpress.com/2015/02/the-secret-of-kells-008.jpg?w=627&h=353",
      "https://preview.redd.it/chnpav915zf21.jpg?width=640&crop=smart&auto=webp&s=c3f839233b82303af62a6e0923a8a1ad20496698",
      "http://i.imgur.com/fRxjTq9.jpg",
      "https://images7.alphacoders.com/735/thumb-1920-735799.png",
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
      		<div className = "window" style={this.setSectionStyle()}>

                    <h1>{this.state.time}</h1>

      		</div>
    	);
  }
}

export default WindowComponent;
