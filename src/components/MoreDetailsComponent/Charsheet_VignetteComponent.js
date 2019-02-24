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
				<h3>{this.props.CharacterName}</h3>
				<img className = "profilePic" src = {this.props.PreviewPic} alt ="img moved"/>

				<div className = "statsDiv">
					<p><strong>Roles: </strong> {this.props.Roles}	</p>
					<p><strong>Age: </strong> {this.props.Age}	</p>
					<p><strong>Gender: </strong> {this.props.Gender}	</p>
					<p><strong>Alignment: </strong> {this.props.Alignment}	</p>
					<p><strong>Tier: </strong> {this.props.Tier}	</p>
				</div>


				<h3>Background</h3>
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