import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import MoreDetailsComponent from '../../MoreDetailsComponent/MoreDetailsComponent'

const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});


class WorldBuildingTileComponent extends Component {
	constructor(props){
		super(props);
		this.handleClickedTile = this.handleClickedTile.bind(this)
		this.setState({
			booleanForIsVisible: false
		})
	}
	state = {
		CharacterName: "",
		PreviewPic: "", 
		Roles: "",
		tldr: "",
		Priority: 0,
		Alignment: "",
		Age: "",
		Gender:"",
		Tier:"",
		Background:"",
		CurrentStatus:"",
		images: []
	}

	handleClickedTile(){
		console.log(this.state.booleanForIsVisible)
		this.setState({
			booleanForIsVisible: !this.state.booleanForIsVisible
		})
	}
	

	createMarkup() {
  	return {__html: 'First &middot; Second'};
	}

	render(){
	
		return(

				<div className = "tileComponentWorldBuilding" onClick= {this.handleClickedTile}>
				   {this.state.booleanForIsVisible ? <MoreDetailsComponent details = {this.props.Background} /> : null }

					<div className ="row">
						<div className = "col s9 m9 l9">
							<h5>{this.props.titleProp}  </h5>
						</div>

					</div>
					<ul>
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<div className="imageContainer"><img src={image}/></div>
	                	  	</li>
               			)})}
            			<div className="displayText" dangerouslySetInnerHTML={createMarkup(this.props.tldrProp)} ></div>

					</ul>
				</div>


			)
	}

}

export default WorldBuildingTileComponent