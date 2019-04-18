
import React, { Component } from 'react';
/// /// Date Formatting
import moment from 'moment';

/// /// Git URL Requests
import axios from 'axios';

/// /// Display
import MoreDetailsComponent from '../MoreDetailsComponent/MoreDetailsComponent';

/// /// Module for rendering markdown items in React
/// ///https://github.com/rexxars/react-markdown/issues/216
import ReactMarkdown from 'react-markdown';

/// /// Module for preventing xss scripts
import _ from 'lodash';






/// /// Prevent xss scripting
const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});



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
	}

/// /// Split up the URL to reformat it
	refineURL(props){
		var bodyPropInput = this.props.bodyProp
		var baseurl = "https://api.github.com/repos/ErikaVasNormandy/"
		var extractedurlarray = bodyPropInput.split("/")
		var readmeurl = baseurl + extractedurlarray[extractedurlarray.length -1 ] + "/readme"
		return(readmeurl)
	}

/// /// Use Axios to query the url for raw md data
	getGithub = (props) => {
		try{
			axios.get(this.refineURL(this.props.bodyProp),{headers: {"accept": "application/vnd.github.v3+json"}}).then(
				res => {
					this.setState({
						readme: atob(res.data.content)
					})
				})
		}
		catch(err){
			console.log(err, "error")
		}
	}


	handleClickedTile(){
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
		const displayDate = moment(this.props.dateProp).format('ddd, DD-MMM-YYYY')
		return(
				<div className = "tileComponentProject" onClick = {this.handleClickedTile}>
				{/*					{this.state.booleanForIsVisible ? <button className="closebtn">Close</button> : null }*/}
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
					{
						this.props.imagesProp.map(image => {
							return(
								<li key={image}>
									<div className="imageContainer">
										<img src={image}/>
									</div>
								</li>
               		 		)
						})
					}
					  <ReactMarkdown source={this.state.readme} />
					}
				}
				
					</ul>
				</div>
			)
	}
}

export default TileComponent