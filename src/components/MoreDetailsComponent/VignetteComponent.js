import React, { Component } from 'react';
import _ from 'lodash';
import {styles} from './moredetails.css';


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
				<div  dangerouslySetInnerHTML={createMarkup(this.props.vignettedetails)} ></div>



			</div>

			)
	}
}


export default VignetteComponent;