
import React, { Component } from 'react';
/// /// Date Formatting
import moment from 'moment';

/// /// Git URL Requests
import axios from 'axios';

import {styles} from './worldbuilding.css';

import HTMLMoreDetailsComponent from '../MoreDetailsComponent/HTMLMoreDetailsComponent'

/// /// Module for preventing xss scripts
import _ from 'lodash';




/// /// Prevent xss scripting
const createMarkup = encodedHtml => ({
  __html: _.unescape(encodedHtml),
});



class WorldBuildingTileComponent extends Component {

	constructor(props){
		super(props)
		this.handleClickedTile = this.handleClickedTile.bind(this)
		this.getGithub = this.getGithub.bind(this)
		this.setState({
			booleanForIsVisible: false,
			githubindex: ""
		})
	}

/// /// Split up the URL to reformat it

/// /// Use Axios to query the url for raw md data
	getGithub = (props) => {
		try{
			axios.get(this.props.bodyProp,{headers: {"accept": "application/vnd.github.v3+json"}}).then(
				res => {
					console.log(res)
					this.setState({
						githubindex: res.data
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
			   	{this.state.booleanForIsVisible ? <HTMLMoreDetailsComponent details = {this.state.githubindex}/> : null }

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
					  <p><span dangerouslySetInnerHTML={createMarkup(this.state.githubindex)} ></span> </p>
					}
				}
				
					</ul>
				</div>
			)
	}
}

export default WorldBuildingTileComponent