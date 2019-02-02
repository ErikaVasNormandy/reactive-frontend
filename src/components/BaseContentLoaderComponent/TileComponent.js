import React, { Component } from 'react';
import axios from 'axios';



class TileComponent extends Component {
	constructor(props){
		super(props);
		// this.showImages = this.showImages.bind(this)
		{}
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
					<div className ="row">
						<div className = "col s8 m8 l8">
							<h5>{this.props.titleProp}</h5>

						</div>
						<div className = "col s2 m2 l2">
							<p><span> {this.props.dateProp}</span></p>
						</div>

					</div>
						
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<img src={image}/>
	                	  </li>
               			)})}
 					<p><span>{this.props.bodyProp}</span></p>

				</div>


			)
	}

}

export default TileComponent