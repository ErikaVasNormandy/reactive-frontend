import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

import MetaTags from 'react-meta-tags';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TumblrShareButton,
  FacebookIcon,
} from 'react-share';


const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});


class TileComponent extends Component {
	constructor(props){
		super(props);
	}

	createMarkup() {
  	return {__html: 'First &middot; Second'};
	}

	state = {
		action: "",
		titleProp: "", 
		bodyProp: "",
		dateProp: Date(),
		imagesProp: []
	}


	render(){
		const displayDate = moment(this.props.dateProp).format('ddd, DD-MMM-YYYY')

		return(
				<div className = "tileComponent">
				<MetaTags>
					 <title>{this.props.titleProp}</title>
           	 		<meta name="description" content={this.props.titleProp}/>
            		<meta property="og:title" content={this.props.titleProp}/>
            		<meta property="og:image" content={this.props.imagesProp} />
				</MetaTags>

 
                {/* Top Part of the "Photo" */}
					<div className ="row">
						<div className = "col s8 m8 l8">
							<h5>{this.props.titleProp}</h5>
						</div>


						<div className = "col s4 m4 l4 baseDateStamp">
							{displayDate}
						</div>
					</div>
						


                {/* Display the images by applying a 'map' */}
                <ul>
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<div className="baseImageContainer"><img src={image} alt="Huh, looks like the image moved"/></div>
	                	  		
	                	  	</li>
               			)})}
				</ul>
 					<div className="displayText" dangerouslySetInnerHTML={createMarkup(this.props.bodyProp)} />


 					<FacebookShareButton quote="Oh look I posted today" children="Hello?" url= "http://reactive.scavengers-repo.com/" image={this.props.imagesProp}><FacebookIcon/>
				</FacebookShareButton>
				</div>

			)
	}

}

export default TileComponent