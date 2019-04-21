import React, { Component } from 'react';
import _ from 'lodash';
import {styles} from './moredetails.css';
import ReactMarkdown from 'react-markdown';

const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});

class VignetteComponent extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="vignettePage">
					  <ReactMarkdown source={this.props.vignettedetails} />



			</div>

			)
	}
}


export default VignetteComponent;