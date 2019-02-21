import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import {styles} from './charsheet.css'


import Charsheet_MoreDetailsComponent from '../../MoreDetailsComponent/Charsheet_MoreDetailsComponent'

const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});


class CharsheetTileComponent extends Component {
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
				   {this.state.booleanForIsVisible ? 
				   	<Charsheet_MoreDetailsComponent 
				   	CharacterName = {this.props.CharacterNameProp}
				   	PreviewPic = {this.props.PreviewPicProp}
				   	Roles = {this.props.RolesProp}
				   	Age = {this.props.AgeProp}
				   	Alignment = {this.props.AlignmentProp}				   	
				   	Gender = {this.props.GenderProp}
				   	Tier = {this.props.TierProp}
				   	Background = {this.props.BackgroundProp}
				   	CurrentStatus = {this.props.CurrentStatusProp}
				   	images = {this.props.imagesProp}

				   	/> : null }

					<div className ="row">
						<div className = "col s9 m9 l9">
							<h5>{this.props.CharacterNameProp}  </h5>
						</div>

					</div>
					
					<div className = "imageContainer" ><img src={this.props.PreviewPicProp} alt ="huh image must have moved"/></div>
            		<span>{this.props.RolesProp}</span>
            		<div className="displayText" dangerouslySetInnerHTML={createMarkup(this.props.tldrProp)} ></div>

				
				</div>


			)
	}

}

export default CharsheetTileComponent