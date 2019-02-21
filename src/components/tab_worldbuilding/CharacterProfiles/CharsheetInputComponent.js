import React, { Component } from 'react';
import axios from 'axios';

let today = new Date();
let todayString = today.toLocaleString()


class CharsheetInputComponent extends Component {

	constructor(props){
		super(props)

      this.handleCharacterName = this.handleCharacterName.bind(this);
	   this.handlePreviewPic =  this.handlePreviewPic.bind(this);
	   this.handleRoles = this.handleRoles.bind(this);
      this.handletldr = this.handletldr.bind(this);
      this.handlepriority = this.handlepriority.bind(this);
      this.handleAlignment = this.handleAlignment.bind(this);  
      this.handleGender = this.handleGender.bind(this);     
      this.handleTier = this.handleTier.bind(this);  
	     this.handleBackground = this.handleBackground.bind(this);
	   this.handleCurrentStatus = this.handleCurrentStatus.bind(this);  
	   this.handleimages = this.handleimages.bind(this);  
	}


  componentDidMount() {
  }



  	state = {
    	CharacterName: "",
		  PreviewPic: "",
		  Roles: "",
   		tldr : "",
    	priority : "",
    	Alignment: "",  
    	Gender: "",     
    	Tier: "",  
		  Background : "",
		  CurrentStatus: "",  
		  images : []
  	}
	
addCharsheet = () =>{
    const task = {  
    	CharacterName: this.state.CharacterName,
		  PreviewPic: this.state.PreviewPic,
		  Roles: this.state.Roles,
   		tldr : this.state.tldr,
    	priority : this.state.priority,
    	Alignment: this.state.Alignment,  
    	Gender: this.state.Gender,     
    	Tier: this.state.Tier, 
		Background : this.state.Background,
		CurrentStatus: this.tate.CurrentStatus,  
		images : this.state.images,  
    }


    if(task.CharacterName && task.CharacterName.length > 0){
     //// Submit
      axios.post('/api/charsheets', task)
        .then(res => {
          console.log(task)
          if(res.data){
            /// Defined in ContainerComponent.js
            this.props.getCharsheets();
            /// Reset
            this.setState({
    			CharacterName: "",
				PreviewPic: "",
				Roles: "",
   				tldr : "",
    			priority : "",
    			Alignment: "",  
    			Gender: "",     
    			Tier: "",  
				Background : "",
				CurrentStatus: "",  
				images : []
  				})
          }
        })
        .catch(err => console.log(err))
    }else 
    {
      console.log('input field required')
    }
  }


  handleCharacterName = (event) => {
    this.setState({
      CharacterName: event.target.value
    })
  }


  handlePreviewPic = (event) => {
    this.setState({
      PreviewPic: event.target.value
    })
  }

  handleRoles = (event) => {
    this.setState({
      Roles: event.target.value
    })
  }

   handletldr = (event) => {
  	this.setState({
  		tldr: event.target.value
  	})
  }

  handlepriority = (event) =>{
    this.setState({
      priority: event.target.value
    })
  }

  handleAlignment = (event) =>{
    this.setState({
      Alignment: event.target.value
    })
  }
  handleGender = (event) =>{
    this.setState({
      Gender: event.target.value
    })
  }
  handleTier = (event) =>{
    this.setState({
      Tier: event.target.value
    })
  }
  handleBackground = (event) =>{
    this.setState({
      Background: event.target.value
    })
  }
  handleCurrentStatus = (event) =>{
    this.setState({
      CurrentStatus: event.target.value
    })
  }
  
  handleimages = (event) =>{
    this.setState({
      images: event.target.value
    })
  }

 render() {
    let { action } = this.state;
    return (
      <div className=" newPost ">
        <div className="input-field ">
          <input type="text" placeholder="NAME"  onChange={this.handleCharacterName} value={this.state.CharacterName}/> 
          <input type="text" placeholder="PREIVEW PIC" onChange={this.handlePreviewPic} value={this.state.PreviewPic}/>
          <input type="text" placeholder="ROLES" onChange={this.handleRoles} value={this.state.Roles}/>
          <input type="text" placeholder="TLDR" onChange={this.handletldr} value={this.state.tldr}/>
          <input type="text" placeholder="PRIORITY" onChange={this.handlepriority} value={this.state.priority}/>
          <input type="text" placeholder="ALIGNMENT" onChange={this.handleAlignment} value={this.state.Alignment}/>
          <input type="text" placeholder="GENDER" onChange={this.handleGender} value={this.state.Gender}/>
          <input type="text" placeholder="TIER" onChange={this.handleTier} value={this.state.Tier}/>
          <textarea placeholder="BACKGROUND" className="materialize-textarea" onChange={this.handleBackground} value={this.state.Background}/>
          <input type="text" placeholder="CURRENT STATUS" onChange={this.handleCurrentStatus} value={this.state.CurrentStatus}/>
          <input type="text" placeholder="Paste Image URL's Here" onChange={this.handleimages} value={this.state.images}/>
          <button onClick={this.addCharsheet} className="btn waves-effect waves-light color: blue-grey darken-2" > Post </button>
        </div>
      </div>
    )
  }
}

export default CharsheetInputComponent
