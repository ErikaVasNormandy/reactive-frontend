import React, { Component } from 'react';
import axios from 'axios';



class TileComponent extends Component {
	constructor(props){
		super(props);
		// this.showImages = this.showImages.bind(this)

	}

	state = {
		action: "",
		titleProp: "", 
		bodyProp: "",
		dateProp: Date(),
		imagesProp: []
	}


	render(){

		return(
				<div className = "tileComponent">
					<h1>Tile Component</h1>
					<p><span>this.props.titleProp ----->  {this.props.titleProp}</span></p>
					<p><span>this.props.bodyProp ----->  {this.props.bodyProp}</span></p>
					<p><span>this.props.dateProp ------> {this.props.dateProp}</span></p>
						
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<img src={image}/>
	                	  </li>
               			)})}
              	
				</div>


			)
	}

}

export default TileComponent