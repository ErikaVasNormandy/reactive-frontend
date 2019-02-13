import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import {styles} from './moredetails.css';


class VignetteComponent extends Component {
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div className="vignettePage">
				{this.props.vignettedetails}



			</div>

			)
	}
}


export default VignetteComponent;