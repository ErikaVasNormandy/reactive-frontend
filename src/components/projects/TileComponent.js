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
		tagsProp: "",
		dateProp: "",
		imagesProp: []
	}


	render(){

		return(
				<div className = "tileComponentProject">
					<div className ="row">
						<div className = "col s8 m8 l8">
							<h5>{this.props.titleProp}  </h5>
								
						</div>
						<div className = "col s4 m4 l4 datestamp">
							{this.props.dateProp} 
						</div>

					</div>
						
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<div className="imageContainer"><img src={image}/></div>
	                	  </li>
               			)})}
						<div>
							{this.props.tagsProp}
							
						</div>

				</div>


			)
	}

}

export default TileComponent