import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import MoreDetailsComponent from '../MoreDetailsComponent/MoreDetailsComponent';

// import marked from 'marked';
// import ReactMarkdown from 'react-markdown'
import ReactMarkdown from 'react-markdown';

const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});

///https://github.com/rexxars/react-markdown/issues/216

class TileComponent extends Component {

	constructor(props){


			super(props)
			this.handleClickedTile = this.handleClickedTile.bind(this)
			this.getGithub = this.getGithub.bind(this)
			this.refineURL = this.refineURL.bind(this)
			this.setState({
			booleanForIsVisible: false,
			readme: ""
		})

			// this.content = this.getGithub(this.props.bodyProp)
	}

	refineURL(props){
		console.log("REFINED URL CALLED")
		var bodyPropInput = this.props.bodyProp

		var baseurl = "https://api.github.com/repos/ErikaVasNormandy/"
		var extractedurlarray = bodyPropInput.split("/")
		var readmeurl = baseurl + extractedurlarray[extractedurlarray.length -1 ] + "/readme"
		 // https://github.com/ErikaVasNormandy/MERNstack
		return(readmeurl)
	}

  getGithub = (props) => {
  	try{
  		axios.get(this.refineURL(this.props.bodyProp),{headers: {"accept": "application/vnd.github.v3+json"}}).then(
  			res => {
      			// console.log(this.refineURL(this.props.bodyProp))
      			console.log(atob(res.data.content))
       	 		this.setState({
					readme: atob(res.data.content)
				})
        // this.setState({readme: atob(res.data.content)})
    	})
      }
     catch(err){
     	console.log(err, "error")
     }

  }
	handleClickedTile(){
		console.log(this.state.booleanForIsVisible)
		this.setState({
			booleanForIsVisible: !this.state.booleanForIsVisible
		})
	}

	state = {
		action: "",
		titleProp: "", 
		bodyProp: "",
		dateProp: "",
		imagesProp: [],
	}

	createMarkup() {
  	return {__html: 'First &middot; Second'};
	}
	componentDidMount(){
		var content = this.getGithub(this.props.bodyProp)		

  	}
	render(){
		{/*this.refineURL(this.props.bodyProp) */}
		const displayDate = moment(this.props.dateProp).format('ddd, DD-MMM-YYYY')
		return(
				<div className = "tileComponentProject" onClick= {this.handleClickedTile}>
				   {this.state.booleanForIsVisible ? <MoreDetailsComponent details = {this.state.readme}/> : null }
					<div className ="row">
						<div className = "col s8 m8 l8">
							<h5>{this.props.titleProp}  </h5>
								
						</div>
						<div className = "col s4 m4 l4 dateStamp">
							{displayDate} 
						</div>

					</div>
					<ul>
					{this.props.imagesProp.map(image => {
               		 	return(
                 		 	<li key={image}> 
                 		 		<div className="imageContainer"><img src={image}/></div>

	                	  </li>
               			)})}
					  <ReactMarkdown source={this.state.readme} />
					}
					}
				
					</ul>


				</div>


			)
	}

}

export default TileComponent