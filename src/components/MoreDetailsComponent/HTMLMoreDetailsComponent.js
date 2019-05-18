import React, { Component } from 'react';
import {styles} from './moredetails.css';

import HTMLVignetteComponent from './HTMLVignetteComponent'


class HTMLMoreDetailsComponent extends Component {


	render(){
		return(
			<div className="mainPage">
				<HTMLVignetteComponent	
					details = {this.props.details}

				/>
			</div>

			)
	}
}


export default HTMLMoreDetailsComponent;