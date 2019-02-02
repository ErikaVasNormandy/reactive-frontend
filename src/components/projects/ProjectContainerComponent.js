import React, {Component} from 'react';
import axios from 'axios';

import ProjectInputComponent from './ProjectInputComponent';
import ProjectListComponent from './ProjectListComponent';
import TileComponent from './TileComponent';

require('dotenv').config();



class ProjectContainerComponent extends Component {
  constructor(props){
    super(props)

    this.toggleAdminItem = this.toggleAdminItem.bind(this);

  }


  getInitialState(){
    this.setState({
      showAdminPanel: false
    })
  }

  state = {
    projects: []
  }

  componentDidMount(){
    this.getProjects();
  }

  getProjects = () => {
    axios.get('/api/projects')
      .then(res => {
        if(res.data){
          this.setState({
            projects: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }

  deleteProject = (id) => {

    axios.delete(`/api/projects/${id}`)
      .then(res => {
        if(res.data){
          this.getProjects()
        }
      })
      .catch(err => console.log(err))
  }



  toggleAdminItem(e){
    var authProject = window.prompt("Create a New Project: ")
    // if(authProject == `${process.env.REACT_APP_PW_PROJ}`){
    //   console.log("Hello projects!")
    console.log("hello from toggle")
       this.setState({ 
          showAdminPanel: true
       });


  // }
}


  render() {
    {/* What is this for? */}
    let { projects } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
        { this.getProjects()}

         {this.state.showAdminPanel ? <ProjectInputComponent getProjects={this.getProjects}/> : null }

        <button className="blue-grey lighten-4 adminBtn material-icons waves-effect waves-light btn " onClick={this.toggleAdminItem} value="showAdmin">palette</button>

        {/* Render out the contents via a list */}
        <ProjectListComponent projects={projects} deleteProject={this.deleteProject}/>
      </div>
    )
  }
}

export default ProjectContainerComponent;