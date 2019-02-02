import React, {Component} from 'react';
import axios from 'axios';

import ProjectInputComponent from './ProjectInputComponent';
import ProjectListComponent from './ProjectListComponent';
import TileComponent from './TileComponent';
class ProjectContainerComponent extends Component {

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

  render() {
    {/* What is this for? */}
    let { projects } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
        { this.getProjects()}

        <ProjectInputComponent getProjects={this.getProjects}/>

        {/* Render out the contents via a list */}
        <ProjectListComponent projects={projects} deleteProject={this.deleteProject}/>
      </div>
    )
  }
}

export default ProjectContainerComponent;