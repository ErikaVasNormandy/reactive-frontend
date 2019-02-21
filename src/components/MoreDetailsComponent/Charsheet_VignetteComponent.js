import React, { Component } from 'react';
import _ from 'lodash';
import {styles} from './moredetails.css';


const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});

class Charsheet_VignetteComponent extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="vignettePage">
				<h2>{this.props.CharacterName}</h2>
				<div className = "statsDiv">
					<p>{this.props.Roles}	</p>
					<p>{this.props.Age}	</p>
					<p>	</p>
					<p>{this.props.Alignment}	</p>
					<p>{this.props.Tier}	</p>
					<p>{this.props.Gender}	</p>
				</div>
				<img className = "profilePic" src = {this.props.PreviewPic} alt ="img moved"/>
				<div dangerouslySetInnerHTML={createMarkup(this.props.Background)} ></div>
				<div dangerouslySetInnerHTML={createMarkup(this.props.CurrentStatus)} ></div>

					<ul>
					{this.props.images.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<div className="galleryPic"><img src={image}/></div>
	                	  	</li>
               			)})}

				</ul>
			
				 



			</div>

			)
	}
}


export default Charsheet_VignetteComponent;