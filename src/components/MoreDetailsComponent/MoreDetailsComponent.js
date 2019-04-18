import React, { Component } from 'react';
import {styles} from './moredetails.css';

import VignetteComponent from './VignetteComponent'
import ReactMarkdown from 'react-markdown';


class MoreDetailsComponent extends Component {
	constructor(props){
		super(props)
		// this.setState({
		// 	booleanForIsVisible: true,
		// 	readme: ""
		// })
	}
  
	// handleClickedTile(){
	// 	this.setState({
	// 		booleanForIsVisible: false
	// 	})
	// }

	render(){
		return(
			<div className="mainPage" >
				<VignetteComponent vignettedetails = {this.props.details}/>
			</div>

			)
	}
}


export default MoreDetailsComponent;