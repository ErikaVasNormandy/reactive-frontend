import React, { Component } from 'react';
import _ from 'lodash';


const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});

class HTMLVignetteComponent extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="vignettePage">
				
				<p><span dangerouslySetInnerHTML={createMarkup(this.props.details)} ></span> </p>

			
				 



			</div>

			)
	}
}


export default HTMLVignetteComponent;