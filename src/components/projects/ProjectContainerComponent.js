import React, {Component} from 'react';
import axios from 'axios';

import ProjectInputComponent from './ProjectInputComponent';
import ProjectListComponent from './ProjectListComponent';
import TileComponent from './TileComponent';

require('dotenv').config();
const pw = process.env.PW



class ProjectContainerComponent extends Component {
  constructor(props){
    super(props)

    this.toggleAdminItemProject = this.toggleAdminItemProject.bind(this);

  }


  getInitialState(){
    this.setState({
      showAdminPanelProject: false
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



  toggleAdminItemProject(e){
    var auth = window.prompt("Create a New Project: ")
    if(auth == `${process.env.REACT_APP_PW}`){
    this.setState({ 
      showAdminPanel: !this.state.showAdminPanel 
    });

  }
}


  render() {
    {/* What is this for? */}
    let { projects } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
        { this.getProjects()}

        {this.state.showAdminPanelProject ? <ProjectInputComponent getProjects={this.getProjects}/> : null }
        <button className="material-icons" onClick={this.toggleAdminItemProject} value="showAdmin">palette</button>


        {/* Render out the contents via a list */}
        <ProjectListComponent projects={projects} deleteProject={this.deleteProject}/>
      </div>
    )
  }
}

export default ProjectContainerComponent;