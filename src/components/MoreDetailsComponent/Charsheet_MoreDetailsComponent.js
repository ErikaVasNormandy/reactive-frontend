import React, { Component } from 'react';
import {styles} from './moredetails.css';

import Charsheet_VignetteComponent from './Charsheet_VignetteComponent'


class Charsheet_MoreDetailsComponent extends Component {


	render(){
		return(
			<div className="mainPage">
				<Charsheet_VignetteComponent	
					CharacterName = {this.props.CharacterName}
					PreviewPic = {this.props.PreviewPic}
					Roles = {this.props.Role}
					Age = {this.props.Age}
				   	Alignment = {this.props.Alignment}				   	
				   	Gender = {this.props.Gender}
				   	Tier = {this.props.Tier}
				   	Background = {this.props.Background}
				   	CurrentStatus = {this.props.CurrentStatus}
				   	images = {this.props.images}


				/>
			</div>

			)
	}
}


export default Charsheet_MoreDetailsComponent;