import React, { Component } from 'react';
import _ from 'lodash';
import {styles} from './charsheetdetails.css';


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
				<img className = "profilePic" src = {this.props.PreviewPic} alt ="img moved"/>

				<div className = "statsDiv">
					<p><strong>Roles: </strong> {this.props.Roles}	</p>
					<p><strong>Age: </strong> {this.props.Age}	</p>
					<p><strong>Childhood: </strong> {this.props.Childhood}	</p>
					<p><strong>Alignment: </strong> {this.props.Alignment}	</p>
					<p><strong>Goals: </strong> {this.props.Goals}	</p>
				</div>


				<h3>Background</h3>
				<div dangerouslySetInnerHTML={createMarkup(this.props.Background)} ></div>

				<h3>Current Status</h3>
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