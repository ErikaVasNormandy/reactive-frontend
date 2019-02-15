import React, { Component } from 'react';
import {styles} from './moredetails.css';

import VignetteComponent from './VignetteComponent'


class MoreDetailsComponent extends Component {


	render(){
		return(
			<div className="mainPage">
				<VignetteComponent vignettedetails = {this.props.details}/>
			</div>

			)
	}
}


export default MoreDetailsComponent;