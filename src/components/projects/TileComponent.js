import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';


const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});


class TileComponent extends Component {
	constructor(props){
		super(props);

	}

	state = {
		action: "",
		titleProp: "", 
		tagsProp: "",
		dateProp: "",
		imagesProp: []
	}

	createMarkup() {
  	return {__html: 'First &middot; Second'};
	}

	render(){
		const displayDate = moment(this.props.dateProp).format('ddd, DD-MMM-YYYY')
		return(
				<div className = "tileComponentProject">
					<div className ="row">
						<div className = "col s8 m8 l8">
							<h5>{this.props.titleProp}  </h5>
								
						</div>
						<div className = "col s4 m4 l4 dateStamp">
							{displayDate} 
						</div>

					</div>
						
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<div className="imageContainer"><img src={image}/></div>
	                	  </li>
               			)})}
						<div className="displayText" dangerouslySetInnerHTML={createMarkup(this.props.tagsProp)} >
						</div>

				</div>


			)
	}

}

export default TileComponent