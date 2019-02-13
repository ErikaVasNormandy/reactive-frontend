import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {styles} from './moredetails.css';

import VignetteComponent from './VignetteComponent'


class MoreDetailsComponent extends Component {
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div className="mainPage">
			<VignetteComponent vignettedetails = {this.props.details}/>



			</div>

			)
	}
}


export default MoreDetailsComponent;