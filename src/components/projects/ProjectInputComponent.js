import React, { Component } from 'react';
import axios from 'axios';
import {styles} from './projects.css'
import sharedStyles from '../../App.css'

let today = new Date();
let todayString = today.toDateString()


class ProjectInputComponent extends Component {

	constructor(props){
		super(props)

    this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

	}
 

  	state = {
                 action: "",
                 title: "",
                 bodyInput: "",
                 dateStamp: todayString,
                 images: []
  }

  addProject = () =>{
    this.setState({
        dateStamp: todayString
    })

  	const task = {  
            action: this.state.title, 
  					title: this.state.title,
  					dateStamp: todayString,
  					tags: this.state.bodyInput,
  					images: this.state.images
  				}

  	console.log(task)

  	 if(task.title && task.title.length > 0){
  	 //// Submit
      axios.post('/api/projects', task)
        .then(res => {
        	console.log(task)

          if(res.data){
          	/// Defined in ContainerComponent.js
            this.props.getProjects();
          	/// Reset
            this.setState({action: "", dateStamp: todayString, bodyInput: "", tags: "", title: "", images: []})
          }
        })
        .catch(err => console.log(err))
    }else 
    {
      console.log('input field required')
    }
  }


  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }


  handleBodyChange = (event) => {
    this.setState({
      bodyInput: event.target.value
    })
  }

   handleImageChange = (event) => {
  	this.setState({
  		images: event.target.value
  	})
  }

  handleDateChange = (event) =>{
    this.setState({
      dateStamp: event.target.value
    })
  }

 render() {
    let { action } = this.state;
    return (
      <div className=" newPost ">
        <div className="input-field ">
          <input placeholder="TITLE"  type="text" onChange={this.handleTitleChange} value={this.state.title}/>
          <textarea placeholder="What'll you say?" className="materialize-textarea" onChange={this.handleBodyChange} value={this.state.bodyInput}/>
          <input type="text" placeholder="Paste Image URL's Here " onChange={this.handleImageChange} value={this.state.images}/>
          <span><h6>Todays Date: {this.state.dateStamp}</h6></span>{console.log(this.state.dateStamp)}
          <button onClick={this.addProject}className="btn waves-effect waves-light color: blue-grey darken-2" >Add Project</button>
        </div>
      </div>
    )
  }
}

export default ProjectInputComponent
