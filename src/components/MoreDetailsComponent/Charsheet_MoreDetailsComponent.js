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
					Roles = {this.props.Roles}
					Age = {this.props.Age}
				   	Alignment = {this.props.Alignment}				   	
				   	Childhood = {this.props.Childhood}
				   	Goals = {this.props.Goals}
				   	Background = {this.props.Background}
				   	CurrentStatus = {this.props.CurrentStatus}
				   	images = {this.props.images}


				/>
			</div>

			)
	}
}


export default Charsheet_MoreDetailsComponent;