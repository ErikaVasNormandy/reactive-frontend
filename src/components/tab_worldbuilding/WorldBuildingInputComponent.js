import React, { Component } from 'react';
import axios from 'axios';
import {styles} from './worldbuilding.css'
import sharedStyles from '../../App.css'

let today = new Date();
let todayString = today.toLocaleString()

class WorldBuildingInputComponent extends Component {

	constructor(props){
		super(props)

    	this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
    	this.handleDateChange = this.handleDateChange.bind(this);
    	this.handleSubjectChange = this.handleSubjectChange.bind(this);
	}


  componentDidMount() {
  }



  	state = {
                 action: "",
                 title: "",
                 bodyInput: "",
                 dateStamp: todayString,
                 images: [], 
                 subject: "",
                 tldr: ""
  }

addWorldBuilding = () =>{
    const task = {  
            action: this.state.title, 
            title: this.state.title,
            dateStamp: this.state.dateStamp,
            body: this.state.bodyInput,
            images: this.state.images, 
            subject: this.state.subject,
            tldr: this.state.tldr
          }

    console.log(task)

    if(task.action && task.action.length > 0){
     //// Submit
      axios.post('/api/worldbuildings', task)
        .then(res => {
          console.log(task)

          if(res.data){
            /// Defined in ContainerComponent.js
            this.props.getContents();
            /// Reset
            this.setState({action: "", dateStamp: Date(), bodyInput: "", title: "", images: [], subject: "", tldr: ""})
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


  handletldrChange = (event) => {
    this.setState({
      tldr: event.target.value
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

  handleSubjectChange = (event) =>{
    this.setState({
      subject: event.target.value
    })
  }

 render() {
    let { action } = this.state;
    return (
      <div className=" newPost ">
        <div className="input-field ">
          <input placeholder="TITLE"  type="text" onChange={this.handleTitleChange} value={this.state.title}/> 
          <input type="text" placeholder="Subject" onChange={this.handleSubjectChange} value={this.state.subject}/>
          <textarea placeholder="the tldr" className="materialize-textarea" onChange={this.handletldrChange} value={this.state.tldr}/>

          <textarea placeholder="What'll you say?" className="materialize-textarea" onChange={this.handleBodyChange} value={this.state.bodyInput}/>

          <input type="text" placeholder="Paste Image URL's Here " onChange={this.handleImageChange} value={this.state.images}/>
          <span><h6>Todays Date: {this.state.dateStamp}</h6></span>
          <button onClick={this.addWorldBuilding} className="btn waves-effect waves-light color: blue-grey darken-2" > Post </button>
        </div>
      </div>
    )
  }
}

export default WorldBuildingInputComponent
