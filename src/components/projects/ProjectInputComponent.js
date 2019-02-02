import React, { Component } from 'react';
import axios from 'axios';
import {styles} from './projects.css'
class ProjectInputComponent extends Component {
	constructor(props){
		super(props)

		this.handleBasicDescriptionChange = this.handleBasicDescriptionChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);

		this.handleTitleChange = this.handleTitleChange.bind(this);

	}
 

  	state = {
      action: "",
      title: "",
      bodyInput: "",
      dateStamp: Date(),
      images: []
  }

  addProject = () =>{
  	const task = {  
            action: this.state.title, 
  					title: this.state.title,
  					dateStamp: this.state.dateStamp,
  					body: this.state.bodyInput,
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
            this.setState({action: "", dateStamp: Date(), bodyInput: "", title: "", images: []})
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


  handleBasicDescriptionChange = (event) => {
  	this.setState({
  		bodyInput: event.target.value
  	})
  }


   handleImageChange = (event) => {
  	this.setState({
  		images: event.target.value
  	})
  }

 render() {
    let { action } = this.state;
    return (
      <div className="newPost">
        <div className="input-field">
          <input placeholder="TITLE"  type="text" onChange={this.handleTitleChange} value={this.state.title}/>
          <textarea placeholder="What'll you say?" className="materialize-textarea" onChange={this. handleBasicDescriptionChange} value={this.state.bodyInput}/>
          <input type="text" placeholder="Paste Image URL's Here " onChange={this.handleImageChange} value={this.state.images}/>
          <span><h6>Todays Date: {this.state.dateStamp}</h6></span>
          <button onClick={this.addProject}className="btn waves-effect waves-light color: blue-grey darken-2" >Add Project</button>
        </div>
      </div>
    )
  }
}

export default ProjectInputComponent